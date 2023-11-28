import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { JwtAuthGuard } from 'src/auth/strategies/jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.hospitalsService.findAll();
  }
}
