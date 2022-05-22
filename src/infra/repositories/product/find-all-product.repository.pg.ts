import { InjectRepository } from '@nestjs/typeorm';
import { FindAllProductsRepository } from 'src/domain/interfaces/repositories/product/find-all-products.repository';
import { ProductModel } from 'src/domain/models/product.model';
import { Repository } from 'typeorm';
import { ProductEntity } from '../../entities/product.entity';

export class FindAllProductsRepositoryPg implements FindAllProductsRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  find = async (): Promise<Array<ProductModel>> => {
    return await this.productRepository.find();
  };
}
