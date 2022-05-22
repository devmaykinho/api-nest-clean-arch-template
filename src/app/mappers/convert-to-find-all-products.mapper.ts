import { ProductModel } from 'src/domain/models/product.model';
import { FindAllProductsResponse } from '../responses/find-all-products.response';

export const convertToFindAllProducs = (
  product: ProductModel,
): FindAllProductsResponse => ({
  id: product.id,
  name: product.name,
  description: product.description,
  value: product.value,
});
