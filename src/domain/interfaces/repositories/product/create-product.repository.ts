import { ProductModel } from 'src/domain/models/product.model';

export interface CreateProductRepository {
  create: (product: ProductModel) => Promise<void>;
}
