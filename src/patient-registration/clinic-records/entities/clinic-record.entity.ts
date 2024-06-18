import { Gender } from "../../../patient-registration/patientRegistration.types";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "../../../patient-registration/patients/entities/patient.entity";

@Entity()
export class ClinicRecord {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department: string;

    @Column({nullable: true})
    matriculationNumber: string;

    @Column()
    Gender: string;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;

    @JoinColumn()
    @ManyToOne(type => Patient, patient => patient.clinicrecord, {cascade:true})
    patient: Patient;
}