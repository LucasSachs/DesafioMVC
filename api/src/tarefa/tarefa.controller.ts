import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './utils/create.tarefa.dto';
import { UpdateTarefaDto } from './utils/update.tarefa.dto';

@Controller('tarefa')
export class TarefaController {
	constructor(
		private readonly tarefaService: TarefaService
	) {}

	@Get()
	async getTarefas() {
		return await this.tarefaService.find({ relations: ['status']});
	}

	@Post()
	async createTarefa(@Body() tarefa: CreateTarefaDto) {
		return await this.tarefaService.createTarefa(tarefa);
	}

	@Put()
	async updateTarefa(@Body() tarefa: UpdateTarefaDto) {
		return await this.tarefaService.updateTarefa(tarefa);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.tarefaService.deleteTarefa(Number(id));
	}
}
