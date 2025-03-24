import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusModule } from 'src/status/status.module';
import { TarefaController } from './tarefa.controller';
import { Tarefa } from './tarefa.entity';
import { TarefaService } from './tarefa.service';

@Module({
	imports: [TypeOrmModule.forFeature([Tarefa]), StatusModule],
	providers: [TarefaService],
	controllers: [TarefaController]
})
export class TarefaModule {}
