import 'dotenv/config';
process.env['NODE_CONFIG_DIR'] = 'src/config';
import config from 'config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.get('database.postgres.host'),
  port: config.get('database.postgres.port'),
  username: config.get('database.postgres.username'),
  password: config.get('database.postgres.password'),
  database: config.get('database.postgres.database'),
  synchronize: config.get('database.postgres.synchronize'),
  logging: config.get('database.postgres.logging'),
  entities: ['src/models/**/*.ts', './xld-data/models/**/*.ts'],
  migrations: ['src/database/migrations/*.ts', 'src/database/seeders/*.ts', './xld-data/database/migrations/*.ts'],
  subscribers: [],
});
