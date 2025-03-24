import { Status } from 'src/status/status.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefa {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	titulo: string;

	@Column()
	descricao: string;

	@ManyToOne(() => Status, (status) => status.id, { nullable: false })
	@JoinColumn({ name: 'status_id' })
	status: Status;

	@CreateDateColumn()
	created_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
