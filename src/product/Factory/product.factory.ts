import { Factory } from "@mikro-orm/seeder";
import { faker } from "@faker-js/faker";
import { Product } from "../entities/product.entity";

export class ProductFactory extends Factory<Product> { 
    model = Product;

    definition (): Partial<Product> {
        return {
            title: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            description: faker.commerce.productDescription(),
            
        }
    }
}