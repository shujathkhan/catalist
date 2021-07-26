import { createServer } from 'miragejs';
import { AnyFactories, AnyModels } from 'miragejs/-types';
import payload from '../assets/payload.json';

export default createServer<AnyModels, AnyFactories>({
  routes() {
    this.namespace = 'api';

    this.get('/category/:id', (schema, request) => {
      const categoryId = request.params.id;
      return payload.category.find((item) => item.id === categoryId);
    });

    this.get('/product/:subCategoryId', (schema, request) => {
      const subCategoryId = request.params.subCategoryId;
      if (subCategoryId === 'allProducts') {
        return {
          products: payload.product
            .map((subCategory) => subCategory.products)
            .flat(),
        };
      } else {
        return payload.product.find(
          (item) => item.subCategoryId === subCategoryId
        );
      }
    });
  },
});
