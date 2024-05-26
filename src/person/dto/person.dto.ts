import { OmitType } from "@nestjs/mapped-types";
import { Person } from "../person.entity";
import { IsNotEmpty, IsUUID } from "class-validator";

export class CreatePersonDTO extends OmitType(Person, ['id']) {}

export class DeletePersonDTO {
    @IsUUID(4)
    @IsNotEmpty()
    id: string;
}