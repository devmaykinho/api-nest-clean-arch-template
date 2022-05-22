import { Injectable } from '@nestjs/common';
import { CreateProductRepository } from 'src/domain/interfaces/repositories/product/create-product.repository';
import { ProductModel } from 'src/domain/models/product.model';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly createProductRepository: CreateProductRepository,
  ) {}
  async create(product: ProductModel): Promise<void> {
    return await this.createProductRepository.create(product);
  }
}
