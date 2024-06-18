import { Module } from '@nestjs/common';
import { ClinicRecordsService } from './clinic-records.service';
import { ClinicRecordsController } from './clinic-records.controller';

@Module({
  controllers: [ClinicRecordsController],
  providers: [ClinicRecordsService],
})
export class ClinicRecordsModule {}
