import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person, PersonI } from "./person.entity";
import { Repository } from 'typeorm';
import { PersonControllerI as I } from "./person.interface";

Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>,
    ) {}

    async createPerson(data: I.createPerson.RequestI): Promise<I.createPerson.ResponseI> {
        let isOk = true;
        let newPerson: PersonI = null;

        try {
            newPerson = await this.personRepository.save(data.person);
        } catch (e) {
            console.log(e);
            isOk = false;
        }
        
        return {
            status: isOk ? 'ok' : 'error',
            newPerson: newPerson,
        };
    }

    async readPerson(idPerson: number): Promise<I.readPerson.ResponseI> {
        let isOk = true;
        let person: PersonI = null;

        try {
            person = await this.personRepository.findOne({
                where: { id: idPerson },
            });
        } catch (e) {
            console.log(e);
            isOk = false;
        }

        return {
            status: isOk ? 'ok' : 'error',
            person: person,
        };
    }

    async readAllPerson(): Promise<I.readAllPerson.ResponseI> {
        let isOk = true;
        let persons: PersonI[] = [];

        try {
            persons = await this.personRepository.find();
        } catch (e) {
            console.log(e);
            isOk = false;
        }

        return {
            status: isOk ? 'ok' : 'error',
            persons: persons,
        };
    }

    async updatePerson(data: I.updatePerson.RequestI): Promise<I.updatePerson.ResponseI> {
        let isOk = true;
        let updatedPerson: PersonI = null;

        try {
            await this.personRepository.update(data.person.id, data.person);
        } catch (e) {
            console.log(e);
            isOk = false;
        }

        return {
            status: isOk ? 'ok' : 'error',
            updatedPerson: updatedPerson,
        };
    }

    async deletePerson(data: I.deletePerson.RequestI): Promise<I.deletePerson.ResponseI> {
        let isOk = true;
        try {
            await this.personRepository.delete({ id: data.idPerson });
        } catch (e) {
            console.log(e);
            isOk = false;
        }
        
        return { status: isOk ? 'ok' : 'error' };
    }
}