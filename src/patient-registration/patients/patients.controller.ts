import { Controller, Get, Post, Body, Param, Delete, Render, Put, ParseIntPipe } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get('create')
  @Render('patients/create-patient.html')
  createForm() {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    const createdPatient = await this.patientsService.create(createPatientDto);
    return { ...createdPatient, matric: createPatientDto.matric };
  }

  @Get()
  @Render('patients/patients.html')
  async findAll() {
    const patients = await this.patientsService.findAll();
    return { patients };
  }

  @Get(':id')
  @Render('patients/patient-detail.html')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const patient = await this.patientsService.findOne(id);
    return { patient };
  }

  @Get('edit/:id')
  @Render('patients/edit-patient.html')
  async editForm(@Param('id', ParseIntPipe) id: number) {
    const patient = await this.patientsService.findOne(id);
    return { patient };
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatePatientDto: UpdatePatientDto) {
    await this.patientsService.update(id, updatePatientDto);
    return { message: 'Patient updated successfully' };
  }

  @Delete(':id')
  async deletePatient(@Param('id', ParseIntPipe) id: number) {
    await this.patientsService.deletePatient(id);
    return { message: 'Patient deleted successfully' };
  }

  @Get(':id/clinic-records/create')
  @Render('patients/clinic-records.html')
  createClinicRecordForm(@Param('id', ParseIntPipe) id: number) {
    return { patientId: id };
  }

  
}
