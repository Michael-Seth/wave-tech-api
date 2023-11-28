// src/db/seeds/user.seeder.ts
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../users/entities/user.entity';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await dataSource.query('DELETE FROM user;');
    const repository = dataSource.getRepository(User);
    const hasedPassword = await bcrypt.hash('Michael007', 10);

    const entities = await repository.create([
      {
        email: 'michaelosas78@gmail.com',
        password: hasedPassword,
        firstName: 'Michael',
        lastName: 'Osas',
      },
    ]);
    await repository.upsert(entities, ['email']);
  }
}
