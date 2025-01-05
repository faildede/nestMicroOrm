import { Entity, PrimaryKey, Property } from "@mikro-orm/core";


@Entity()
// @Entity({ repository: ()=> ProductRepository })
export class Product {
    @PrimaryKey()
    id!: number;

    @Property()
    title: string;

    @Property()
    price: number;

    @Property({nullable: true})
    description: string;
}
