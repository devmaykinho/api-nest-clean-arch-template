import { CreateProductRepositoryPg } from '../../repositories/product/create-product.repository.pg';
import { CreateProductUseCase } from '../../../domain/usecases/product/create-product.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductFactory {
  constructor(private readonly repository: CreateProductRepositoryPg) {}
  createProductUsecase = (): CreateProductUseCase => {
    return new CreateProductUseCase(this.repository);
  };
}
