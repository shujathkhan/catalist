import { AxiosResponse } from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import CardButton from '../../components/CardButton';
import ChipButton from '../../components/ChipButton';
import { fetchCategoryData, fetchProductData } from '../../server/services';
import { styles } from './style';
import { ProductType, SubCategoryType } from './types';

const CategoryDetail = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [subCategories, setSubCategories] = useState<Array<SubCategoryType>>([]);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState('allProducts');

  const { data: categoryResponse } = useQuery<AxiosResponse<any>>('categoryData', fetchCategoryData);

  const { data: productResponse } = useQuery<AxiosResponse<any>>(
    ['productData', activeSubCategoryId],
    () => fetchProductData(activeSubCategoryId),
    {
      enabled: !!activeSubCategoryId,
    }
  );

  useEffect(() => {
    const allProductsChip = {
      name: 'All Products',
      id: 'allProducts',
      productIds: [123123, 123123, 123123],
    };

    categoryResponse?.data && setSubCategories([allProductsChip, ...categoryResponse.data.subCategories]);
  }, [categoryResponse]);

  useEffect(() => {
    if (productResponse?.data.products) {
      setProducts(productResponse?.data?.products);
    } else {
      setProducts([]);
    }
  }, [productResponse?.data]);

  const handleSubCategory = (subCategoryId: string) => {
    setActiveSubCategoryId(subCategoryId);
  };

  const productItem = (props: { item: ProductType; index: number }) => {
    const imageIndex = props.index + 500;
    return (
      <CardButton
        label={props.item.brand.name}
        description={props.item.name}
        price={props.item.price}
        imageIndex={imageIndex}
        type={'card'}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={styles.subCategories}
        renderItem={(props: { item: SubCategoryType; index: number }) => (
          <ChipButton
            label={props.item.name}
            key={props.item.name + props.index}
            onPress={() => handleSubCategory(props.item.id)}
            isActive={activeSubCategoryId === props.item.id}
          />
        )}
        keyExtractor={(item) => item.name}
        data={subCategories}
      />
      {products.length ? (
        <FlatList
          refreshing={!products.length}
          numColumns={2}
          contentContainerStyle={styles.products}
          renderItem={productItem}
          data={products}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.fallbackProducts}>
          <Text> No products to show.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CategoryDetail;
