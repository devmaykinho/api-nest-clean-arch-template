import { FindAllProductsUseCase } from '../../../domain/usecases/product/find-all-products.usecase';
import { Injectable } from '@nestjs/common';
import { FindAllProductsRepositoryPg } from 'src/infra/repositories/product/find-all-product.repository.pg';

@Injectable()
export class FindAllProductsFactory {
  constructor(private readonly repository: FindAllProductsRepositoryPg) {}
  findAllProductsUsecase = (): FindAllProductsUseCase => {
    return new FindAllProductsUseCase(this.repository);
  };
}
