import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/domain/models/product.model';

@Injectable()
export class CreateProductUseCase {
  create(product: ProductModel) {
    return product;
  }
}
