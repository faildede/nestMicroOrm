import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

const config: MikroOrmModuleOptions = {
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  dbName: 'db',
  user: 'admin',
  password: 'adminexample',
  driver: PostgreSqlDriver,
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
  extensions: [SeedManager, Migrator],
  seeder: {
    path: './src/seeders', 
    pathTs: undefined, 
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}', 
    emit: 'ts', 
    fileName: (className: string) => className, 
  },

  // registerExtensions: (orm) => [
  //   new Migrator(orm),
  // ],
};

export default config;