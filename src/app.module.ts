import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    UserModule,
    MikroOrmModule.forRoot({
      entities: ['./dist/entity.js'],
      entitiesTs: ['./src/entity.ts'],
      dbName: 'db',
      driver: PostgreSqlDriver,
    }),
    ProductModule,
  ],
})
export class AppModule {}
