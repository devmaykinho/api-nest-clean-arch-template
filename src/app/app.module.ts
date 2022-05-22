import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { CreateProductRepositoryPg } from '../infra/repositories/product/create-product.repository.pg';
import { CreateProductFactory } from 'src/infra/factories/product/create-product.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../infra/entities/product.entity';

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
  controllers: [AppController, ProductController],
  providers: [AppService, CreateProductRepositoryPg, CreateProductFactory],
})
export class AppModule {}
