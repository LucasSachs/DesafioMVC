import { IsNumber, IsPositive } from 'class-validator';
import { CreateTarefaDto } from './create.tarefa.dto';

export class UpdateTarefaDto extends CreateTarefaDto {
	@IsNumber()
	@IsPositive()
	id: number;
}
