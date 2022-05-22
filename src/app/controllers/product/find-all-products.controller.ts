import { Controller, Get } from '@nestjs/common';
import { convertToFindAllProducs } from 'src/app/mappers/convert-to-find-all-products.mapper';
import { FindAllProductsResponse } from 'src/app/responses/find-all-products.response';
import { FindAllProductsFactory } from 'src/infra/factories/product/find-all-products.factory';

@Controller('product')
export class FindAllProductsController {
  constructor(private readonly factory: FindAllProductsFactory) {}
  @Get()
  async findAll(): Promise<Array<FindAllProductsResponse>> {
    const findAllProductsUsecase = this.factory.findAllProductsUsecase();
    const products = await findAllProductsUsecase.find();
    return products.map((product) => convertToFindAllProducs(product));
  }
}
