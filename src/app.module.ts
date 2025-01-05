import { Module } from '@nestjs/common';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProductModule } from './product/product.module';
import { SeedManager } from '@mikro-orm/seeder';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      dbName: 'db',
      user: 'admin',
      password: 'adminexample',
      driver: PostgreSqlDriver,
    }),
    ProductModule,
  ],
})
export class AppModule {}