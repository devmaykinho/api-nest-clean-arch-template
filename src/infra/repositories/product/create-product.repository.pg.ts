import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductRepository } from 'src/domain/interfaces/repositories/product/create-product.repository';
import { ProductModel } from 'src/domain/models/product.model';
import { Repository } from 'typeorm';
import { ProductEntity } from '../../entities/product.entity';

export class CreateProductRepositoryPg implements CreateProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  create = async (product: ProductModel): Promise<void> => {
    console.log('resultado', product);
    await this.productRepository.save(product);
  };
}
