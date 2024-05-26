import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "./person.entity";
import { Repository } from 'typeorm';
import { CreatePersonDTO, DeletePersonDTO } from "./dto/person.dto";

Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>,
    ) {}

    async createPerson(data: CreatePersonDTO): Promise<Person> {
        const newPerson = await this.personRepository.save(data);

        return newPerson;
    }

    async readPerson(id: string): Promise<Person> {
        let person: Person = null;

        person = await this.personRepository.findOne({
            where: { id: id },
        });
    
        return person;
    }

    async readAllPerson(): Promise<Person[]> {
        return await this.personRepository.find();
    }

    async updatePerson(data: Person): Promise<Person> {
        let updatedPerson: Person = null;

        await this.personRepository.findOne({
            where: { id: data.id },
        });

        updatedPerson = await this.personRepository.save(data);
    
        return updatedPerson;
    }

    async deletePerson(data: DeletePersonDTO): Promise<Person> {
        let deletedPerson: Person = null;

        const person = await this.personRepository.findOne({
            where: { id: data.id },
        });
        
        if (person?.id) {
            deletedPerson = await this.personRepository.save({
                id: person.id,
                fullName: person.fullName,
                age: person.age,
                isDeleted: true,
            });
        }
        
        return deletedPerson;
    }
}