import { Injectable } from '@nestjs/common';
import { ProductModel } from 'src/domain/model/product.model';

@Injectable()
export class CreateProductUseCase {
  create(product: ProductModel) {
    return product;
  }
}
