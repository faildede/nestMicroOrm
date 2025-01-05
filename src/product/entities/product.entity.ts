import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Product {
    @PrimaryKey()
    id!: number;

    @Property()
    title!: string;

    @Property()
    price!: number;

    @Property()
    description!: string;

    constructor(title: string, price: number, description: string) {
        this.title = title;
        this.price = price;
        this.description = description;
    }
}
