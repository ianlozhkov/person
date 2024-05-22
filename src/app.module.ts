import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person/person.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: '127.0.0.1',
			port: 5432,
			username: 'dev',
			password: 'dev',
			database: 'db_test',
			entities: [Person],
			synchronize: true,
		}),
		PersonModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
