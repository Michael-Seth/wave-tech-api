import { setSeederFactory } from 'typeorm-extension';
import { Hospitals } from '../../hospitals/entities/hospital.entity';

export const HospitalsFactory = setSeederFactory(Hospitals, (faker) => {
  const hospital = new Hospitals();

  hospital.name = faker.company.name();
  hospital.address = faker.location.streetAddress(true);
  hospital.phone_number = faker.phone.number();
  hospital.ratings = faker.number.int({ min: 1, max: 5 }).toString();

  return hospital;
});
