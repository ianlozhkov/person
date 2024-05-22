import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PersonService } from "./person.service";
import { PersonControllerI as I } from "./person.interface";

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Post(I.createPerson.route)
    async createPerson(@Body() requestBody: I.createPerson.RequestI): Promise<I.createPerson.ResponseI> {
        return await this.personService.createPerson(requestBody);
    }

    @Get(I.readPerson.route)
    async readPerson(@Param('id') idPerson: number): Promise<I.readPerson.ResponseI> {
        return await this.personService.readPerson(idPerson);
    }

    @Get(I.readAllPerson.route)
    async readAllPerson(): Promise<I.readAllPerson.ResponseI> {
        return await this.personService.readAllPerson();
    }

    @Post(I.updatePerson.route)
    async updatePerson(@Body() requestBody: I.updatePerson.RequestI): Promise<I.updatePerson.ResponseI> {
        return await this.personService.updatePerson(requestBody);
    }

    @Post(I.deletePerson.route)
    async deletePerson(@Body() requestBody: I.deletePerson.RequestI): Promise<I.deletePerson.ResponseI> {
        return await this.personService.deletePerson(requestBody);
    }
}