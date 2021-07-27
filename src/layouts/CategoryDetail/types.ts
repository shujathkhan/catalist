type BrandType = {
  name: string;
};

export type ProductType = {
  id: string;
  name: string;
  brand: BrandType;
  price: string;
};

export type SubCategoryType = {
  name: string;
  id: string;
  productIds: Array<number>;
};
