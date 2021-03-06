import axios from 'axios';

export const fetchCategoryData = async () => await axios.get('/api/category/?categoryId=personalCare');

export const fetchProductData = async (subCategoryId: string) => await axios.get(`/api/product?subCategoryId=${subCategoryId}`);
