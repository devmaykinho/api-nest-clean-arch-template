import { Body, Controller, Post } from '@nestjs/common';
import { ProductCreateRequest } from 'src/app/request/product/product-create.request';
import { CreateProductUseCase } from 'src/domain/usecase/product/create-product.usecase';

@Controller('product')
export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}
  @Post()
  create(@Body() body: ProductCreateRequest) {
    const id = 1;
    const { name, description, value } = body;
    return this.createProductUseCase.create({ id, name, description, value });
  }
}
