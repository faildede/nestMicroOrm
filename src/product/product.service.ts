import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateRequestContext, MikroORM, EntityManager } from '@mikro-orm/postgresql';


@Injectable()
export class ProductService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager
  ) {}

  @CreateRequestContext()
  create(createProductDto: CreateProductDto) {
    const em = this.orm.em.fork();
    
    return ;
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
