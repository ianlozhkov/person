import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface PersonI {
    id?: number,
    fullname?: string,
    age?: number,
}

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    fullName: string;

    @Column()
    age: number;
}