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

const CategoryDetail = () => {
  const [products, setProducts] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<Array<any>>([]);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState('allProducts');

  const { data: categoryResponse } = useQuery(
    'categoryData',
    fetchCategoryData
  );
  const { data: productResponse } = useQuery(
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
    categoryResponse?.data &&
      setSubCategories([
        allProductsChip,
        ...categoryResponse.data.subCategories,
      ]);
  }, [categoryResponse?.data]);

  useEffect(() => {
    if (productResponse?.data.products) {
      setProducts(productResponse?.data.products);
    } else {
      setProducts([]);
    }
  }, [productResponse?.data.products]);

  const handleSubCategory = (subCategoryId: string) => {
    setActiveSubCategoryId(subCategoryId);
  };

  const productItem = (props: { item: any; index: number }) => {
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
        renderItem={(props: { item: any; index: number }) => (
          <ChipButton
            label={props.item.name}
            key={props.item.name + props.index}
            onPress={() => handleSubCategory(props.item.id)}
            isActive={activeSubCategoryId === props.item.id}
          />
        )}
        keyExtractor={(item) => item.name}
        // data={categoryResponse?.data.subCategories}
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
