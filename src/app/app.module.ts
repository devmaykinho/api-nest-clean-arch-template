import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateProductUseCase } from '../domain/usecases/product/create-product.usecase';
import { ProductController } from './controllers/product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, CreateProductUseCase],
})
export class AppModule {}
