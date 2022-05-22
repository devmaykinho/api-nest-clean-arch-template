import { Body, Controller, Post } from '@nestjs/common';
import { ProductCreateRequest } from 'src/app/requests/product/product-create.request';
import { CreateProductFactory } from 'src/infra/factories/product/create-product.factory';

@Controller('product')
export class ProductController {
  constructor(private readonly factory: CreateProductFactory) {}
  @Post()
  async create(@Body() body: ProductCreateRequest) {
    const id = 1;
    const { name, description, value } = body;
    const createProductUsecase = this.factory.createProductUsecase();
    return await createProductUsecase.create({ id, name, description, value });
  }
}
