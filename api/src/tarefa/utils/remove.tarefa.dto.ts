import { IsNumber, IsPositive } from 'class-validator';

export class RemoveTarefaDto {
	@IsNumber()
	@IsPositive()
	id: number;
}
