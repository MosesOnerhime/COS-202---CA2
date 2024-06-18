import { Controller, Get, Post, Body, Param, Delete, Render, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  
  constructor(private readonly patientsService: PatientsService) {}

  @Get('create')
  @Render('patients/create-patient.html')
  createForm() {
  }
  
  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    const createdPatient = await this.patientsService.create(createPatientDto);
    return { ...createdPatient, matric: createPatientDto.matric }; // Return the created patient data with updated 'matric'
  }

  @Get()
  @Render('patients/patients.html')
  async findAll() {
    const patients = await this.patientsService.findAll();
    return { patients };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
