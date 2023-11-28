import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import MainSeeder from './main.seed';
import * as dotenv from 'dotenv'; 
dotenv.config();


(async () => {
  const databaseType: string = process.env.DATABASE_TYPE || 'mysql'; // Default to 'mysql' if not provided

  const options: DataSourceOptions & SeederOptions = {
    type: databaseType as any,
    url: `${process.env.DATABASE_URL}`,
    host: `${process.env.DATABASE_HOST}`,
    port: parseInt(process.env.DATABASE_PORT),
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    synchronize: true,
    dropSchema: false,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    seeds: [MainSeeder],
  };

  const dataSource = new DataSource(options);

  try {
    await dataSource.initialize();
    await dataSource.synchronize(true);
    await runSeeders(dataSource);
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    process.exit();
  }
})();
