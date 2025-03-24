import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTarefaDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	titulo: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	@MaxLength(100)
	descricao: string;

	@IsString()
	@IsNotEmpty()
	status: string;
}
