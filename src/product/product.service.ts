import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { CreateRequestContext, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { MikroORM } from '@mikro-orm/postgresql';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: EntityRepository<Product>,
    private readonly orm: MikroORM,
  ) {}

  @CreateRequestContext()
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    await this.orm.em.flush();
    return product;
  }

  @CreateRequestContext()
  async findAll() {
    return await this.productRepository.findAll();
  }

  @CreateRequestContext()
  async findOne(id: number) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  @CreateRequestContext()
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    this.productRepository.assign(product, updateProductDto);
    return product;
  }

  @CreateRequestContext()
  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.nativeDelete(product);
    return { message: `Product with id ${id} has been removed` };
  }
}