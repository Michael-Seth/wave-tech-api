import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager, runSeeders } from 'typeorm-extension';
import UserSeeder from './seeds/user.seeder';
import HospitalSeeder from './seeds/hospital.seeder';
import { HospitalsFactory } from './factories/hospitals.factory';


export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [UserSeeder, HospitalSeeder],
      factories: [HospitalsFactory],
    });
  }
}

export { MainSeeder };
