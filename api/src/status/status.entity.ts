import { Tarefa } from 'src/tarefa/tarefa.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Status {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	descricao: string;

	@OneToMany(() => Tarefa, (tarefa) => tarefa.status)
	tarefas: Tarefa[];
}
