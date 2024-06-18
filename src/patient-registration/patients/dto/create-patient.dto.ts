export class CreatePatientDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly middleName?: string;
    readonly dateOfBirth?: Date;
    readonly address?: string
    readonly dateOfReg?: Date;
    readonly matric: boolean;
}