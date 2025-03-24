export interface Tarefa {
	id: number;
	titulo: string;
	descricao: string;
	status: Status;
	created_at: Date;
	deleted_at: Date | null;
}

export interface Status {
	id: number;
	descricao: string;
}
