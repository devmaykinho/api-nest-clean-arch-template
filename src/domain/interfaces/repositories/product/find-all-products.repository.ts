import { ProductModel } from 'src/domain/models/product.model';

export interface FindAllProductsRepository {
  find: () => Promise<Array<ProductModel>>;
}
