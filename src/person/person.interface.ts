import { PersonI } from "./person.entity";

export namespace PersonControllerI {

    /**
     * Создать человека
     */
    export namespace createPerson {
        export const route = '/create-person';
    
        export interface RequestI {
            person: {
                fullName: string,
                age: number,
            }
        }
    
        export interface ResponseI {
            status: 'ok' | 'error',
            newPerson?: PersonI,
        }
    }

    /**
     * Получить человека
     */
    export namespace readPerson {
        export const route = '/read-person/:id';

        export interface RequestI {}

        export interface ResponseI {
            status: 'ok' | 'error',
            person?: PersonI,
        }
    }

    /**
     * Получить всех людей
     */
    export namespace readAllPerson {
        export const route = '/read-all-person';

        export interface RequestI {}

        export interface ResponseI {
            status: 'ok' | 'error',
            persons: PersonI[],
        }
    }

    /**
     * Изменить человека
     */
    export namespace updatePerson {
        export const route = '/update-person';

        export interface RequestI {
            person: PersonI,
        }

        export interface ResponseI {
            status: 'ok' | 'error',
            updatedPerson?: PersonI,
        }
    }

    /**
     * Удалить человека
     */
    export namespace deletePerson {
        export const route = '/delete-person';

        export interface RequestI {
            idPerson: number,
        }

        export interface ResponseI {
            status: 'ok' | 'error',
        }
    }
}

