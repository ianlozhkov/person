import { Body, Controller, Get, HttpException, Param, Post } from "@nestjs/common";
import { PersonService } from "./person.service";
import { CreatePersonDTO, DeletePersonDTO } from "./dto/person.dto";
import { Person } from "./person.entity";

export class IsOkException extends HttpException {
    constructor() {
        super({ status: 'error' }, 200);
    }
}

export class IResponse<DataType> {
    constructor(data?: DataType) {
        this.data = data;
    }

    status: 'ok' | 'error';
    data?: DataType;
}

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Post('/create-person')
    async createPerson(@Body() requestBody: CreatePersonDTO): Promise<IResponse<Person>> {
        let responseData: Person = null;

        try {
            responseData = await this.personService.createPerson(requestBody);
        } catch (e) {
            throw new IsOkException();
        }
        
        return {
            status: 'ok',
            data: responseData,
        };
    }

    @Get('/read-person/:id')
    async readPerson(@Param('id') id: string): Promise<IResponse<Person>> {
        let responseData: Person = null;

        try {
            responseData = await this.personService.readPerson(id);
        } catch (e) {
            throw new IsOkException();
        }

        return {
            status: 'ok',
            data: responseData,
        }
    }

    @Get('/read-all-person')
    async readAllPerson(): Promise<IResponse<Person[]>> {
        let responseData: Person[] = [];

        try {
            responseData = await this.personService.readAllPerson();
        } catch (e) {
            throw new IsOkException();
        }

        return {
            status: 'ok',
            data: responseData,
        }
    }

    @Post('/update-person')
    async updatePerson(@Body() requestBody: Person): Promise<IResponse<Person>> {
        let responseData: Person = null;

        try {
            responseData = await this.personService.updatePerson(requestBody);
        } catch (e) {
            throw new IsOkException();
        }

        return {
            status: 'ok',
            data: responseData,
        }
    }

    @Post('/delete-person')
    async deletePerson(@Body() requestBody: DeletePersonDTO): Promise<IResponse<Person>> {
        let responseData: Person = null;

        try {
            responseData = await this.personService.deletePerson(requestBody);
        } catch (e) {
            throw new IsOkException();
        }

        return {
            status: 'ok',
            data: responseData,
        }

    }
}