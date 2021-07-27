import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import payload from '../assets/payload.json';

const mock = new MockAdapter(axios);

function parseQueryString(config: AxiosRequestConfig) {
  const queryString = config.url?.replace(/.*\?/, '');

  if (queryString === config.url || !queryString) {
    return null;
  }
  return JSON.parse('{"' + queryString.replace(/&/g, '","').replace(/[=]/g, '":"') + '"}', function (key, value) {
    return key === '' ? value : decodeURIComponent(value);
  });
}

mock.onGet(/\/api\/category\/?.*/).reply((config) => {
  const { categoryId } = parseQueryString(config);
  return [202, payload.category.find((item: any) => item.id === categoryId)];
});

mock.onGet(/\/api\/product\/?.*/).reply((config) => {
  const { subCategoryId } = parseQueryString(config);
  if (subCategoryId === 'allProducts') {
    return [
      202,
      {
        products: payload.product.map((subCategory: any) => subCategory.products).flat(),
      },
    ];
  } else {
    return [202, payload.product.find((item: any) => item.subCategoryId === subCategoryId)];
  }
});
