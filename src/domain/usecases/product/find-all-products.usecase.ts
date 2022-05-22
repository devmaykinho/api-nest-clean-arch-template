import { Injectable } from '@nestjs/common';
import { FindAllProductsRepository } from 'src/domain/interfaces/repositories/product/find-all-products.repository';
import { ProductModel } from 'src/domain/models/product.model';

@Injectable()
export class FindAllProductsUseCase {
  constructor(
    private readonly findAllProductsRepository: FindAllProductsRepository,
  ) {}
  async find(): Promise<Array<ProductModel>> {
    return await this.findAllProductsRepository.find();
  }
}
