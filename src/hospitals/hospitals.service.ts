import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospitals } from './entities/hospital.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HospitalsService {
  constructor(
    @InjectRepository(Hospitals)
    private hospitalRepository: Repository<Hospitals>,
  ) {}

  async findAll(): Promise<Partial<Hospitals>[]> {
    const hospitals = await this.hospitalRepository.find({
      select: ['name', 'address', 'phone_number', 'ratings'],
    });
    return hospitals;
  }
}
