import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/status/status.entity';
import { Tarefa } from 'src/tarefa/tarefa.entity';
import { TarefaModule } from 'src/tarefa/tarefa.module';

@Module({
	imports: [
		TarefaModule,
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'santacasa.sqlite',
			entities: [Status, Tarefa],
			synchronize: true
		})
	]
})
export class AppModule {}
