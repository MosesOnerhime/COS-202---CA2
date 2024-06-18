import { CreatePatientDto } from "../../../patient-registration/patients/dto/create-patient.dto";
import { Gender } from "../../../patient-registration/patientRegistration.types";

export class CreateClinicRecordDto {

    readonly department: string;
    readonly matriculationNumber: string;
    readonly Gender: string;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;
    readonly user: CreatePatientDto; //In case you want to create a user along with student

}