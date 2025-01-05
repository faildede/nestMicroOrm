import { Migration } from '@mikro-orm/migrations';

export class Migration20250105115030 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "product" ("id" serial primary key, "title" varchar(255) not null, "price" int not null, "description" varchar(255) null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "product" cascade;`);
  }

}
