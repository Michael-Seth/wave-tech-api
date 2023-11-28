import { Module } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { HospitalsController } from './hospitals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitals } from './entities/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospitals])],
  exports: [TypeOrmModule, HospitalsService],
  controllers: [HospitalsController],
  providers: [HospitalsService],
})
export class HospitalsModule {}
