// import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';

// export class ProductRepository extends EntityRepository<Product> {
//   async createProduct(createProductDto: CreateProductDto): Promise<Product> {
//     const product = new Product();
//     product.title = createProductDto.title;
//     product.price = createProductDto.price;
//     product.description = createProductDto.description;
//     await this.persistAndFlush(product);
//     return product;
//   }
// }