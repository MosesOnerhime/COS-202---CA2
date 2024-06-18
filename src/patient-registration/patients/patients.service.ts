import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const newPatient: Patient = this.patientsRepository.create(createPatientDto);
    return this.patientsRepository.save(newPatient);
  }

  async findAll() {
    return await this.patientsRepository.find();
  }

  async findOne(id: number) {
    return await this.patientsRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    return await this.patientsRepository.update(id, updatePatientDto);
  }

  async deletePatient(id: number): Promise<void> {
    const patient = await this.patientsRepository.findOne({ where: { id } });
    if (!patient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    await this.patientsRepository.remove(patient);
}

}
