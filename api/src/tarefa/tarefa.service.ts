import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusService } from 'src/status/status.service';
import { FindManyOptions, Repository } from 'typeorm';
import { Tarefa } from './tarefa.entity';
import { CreateTarefaDto } from './utils/create.tarefa.dto';
import { UpdateTarefaDto } from './utils/update.tarefa.dto';

@Injectable()
export class TarefaService {
	constructor(
		@InjectRepository(Tarefa) private readonly tarefaRepository: Repository<Tarefa>,
		private readonly statusService: StatusService
	) {}

	async find(filter?: FindManyOptions<Tarefa>): Promise<Tarefa[]> {
		return await this.tarefaRepository.find(filter);
	}

	async updateTarefa(tarefa: UpdateTarefaDto): Promise<Tarefa> {
		const tarefaToUpdate = await this.tarefaRepository.findOne({ where: { id: tarefa.id } });
		if (!tarefaToUpdate) {
			throw new HttpException('Tarefa não encontrada', 500);
		}

		const status = await this.statusService.findOneBy({ where: { descricao: tarefa.status } });
		if (!status) {
			throw new HttpException('Status não encontrado', 500);
		}

		return await this.tarefaRepository.save({
			...tarefaToUpdate,
			...tarefa,
			status
		});
	}

	async createTarefa(tarefa: CreateTarefaDto): Promise<Tarefa> {
		const status = await this.statusService.findOneBy({ where: { descricao: tarefa.status } });
		if (!status) {
			throw new HttpException('Status não encontrado', 500);
		}

		return await this.tarefaRepository.save({
			...tarefa,
			status
		});
	}
}
