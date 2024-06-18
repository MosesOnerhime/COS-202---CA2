import { Injectable } from '@nestjs/common';
import { CreateClinicRecordDto } from './dto/create-clinic-record.dto';
import { UpdateClinicRecordDto } from './dto/update-clinic-record.dto';

@Injectable()
export class ClinicRecordsService {
  create(createClinicRecordDto: CreateClinicRecordDto) {
    return 'This action adds a new clinicRecord';
  }

  findAll() {
    return `This action returns all clinicRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicRecord`;
  }

  update(id: number, updateClinicRecordDto: UpdateClinicRecordDto) {
    return `This action updates a #${id} clinicRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicRecord`;
  }
}
