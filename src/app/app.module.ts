import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { CreateProductRepositoryPg } from '../infra/repositories/product/create-product.repository.pg';
import { CreateProductFactory } from 'src/infra/factories/product/create-product.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../infra/entities/product.entity';
import { FindAllProductsController } from './controllers/product/find-all-products.controller';
import { FindAllProductsRepositoryPg } from 'src/infra/repositories/product/find-all-product.repository.pg';
import { FindAllProductsFactory } from 'src/infra/factories/product/find-all-products.factory';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  controllers: [AppController, ProductController, FindAllProductsController],
  providers: [
    AppService,
    CreateProductRepositoryPg,
    CreateProductFactory,
    FindAllProductsRepositoryPg,
    FindAllProductsFactory,
  ],
})
export class AppModule {}
