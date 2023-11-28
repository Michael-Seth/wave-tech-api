import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Hospitals } from '../../hospitals/entities/hospital.entity';

export default class HospitalSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('DELETE FROM hospitals;');

    const repository = dataSource.getRepository(Hospitals);
    const entities = await repository.create([
      {
        name: 'NISH Health Care Abuja',
        address: 'Damunde estate, life camp, Abuja',
        phone_number: '08103397068',
        ratings: '5',
      },
    ]);
    await repository.upsert(entities, ['ratings']);

    const hospitalFactory = factoryManager.get(Hospitals);
    // save 1 factory generated entity, to the database
    await hospitalFactory.save();

    // save 5 factory generated entities, to the database
    await hospitalFactory.saveMany(10);
  }
}
