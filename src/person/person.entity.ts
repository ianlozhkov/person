import { IsInt, IsString, IsUUID, IsNotEmpty, MinLength, MaxLength, IsBoolean } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
    @IsUUID(4)
    @PrimaryGeneratedColumn()
    id: string;

    @IsString()
    @MinLength(3)
    @MaxLength(256)
    @Column({ unique: true })
    fullName: string;

    @IsInt()
    @IsNotEmpty()
    @Column()
    age: number;

    @IsBoolean()
    @Column()
    isDeleted: boolean;
}