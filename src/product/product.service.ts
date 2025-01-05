import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateRequestContext, MikroORM, EntityManager } from '@mikro-orm/postgresql';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager
  ) {}

  @CreateRequestContext()
  async create(createProductDto: CreateProductDto) {
    const product = this.em.create(Product, createProductDto);
    await this.em.persistAndFlush(product);
    return product;
  }

  async findAll() {
    return await this.em.find(Product, {});
  }

  async findOne(id: number) {
    const product = await this.em.findOne(Product, { id });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    this.em.assign(product, updateProductDto);
    await this.em.persistAndFlush(product);
    return product;
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.em.removeAndFlush(product);
    return { message: `Product with id ${id} has been removed` };
  }
}
