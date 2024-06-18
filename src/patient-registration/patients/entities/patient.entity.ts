import { ClinicRecord } from "../../../patient-registration/clinic-records/entities/clinic-record.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    middleName: string;

    @Column({nullable: false})
    dateOfBirth: Date;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    dateOfReg: Date;

    @Column({ default: true })
    matric: boolean;

    @OneToMany(type => ClinicRecord, clinicrecord => clinicrecord.patient)
    clinicrecord: Patient;
}
