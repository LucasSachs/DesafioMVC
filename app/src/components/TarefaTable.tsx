'use client';

import AlterarTarefaDialog from './AlterarTarefaDialog';
import DeletarTarefaDialog from './DeletarTarefaDialog';

export default function TarefaTable() {
	const data = [
		{
			id: 1,
			titulo: 'Tarefa 1',
			descricao: 'Descrição da tarefa 1',
			status: 'Pendente'
		},
		{
			id: 2,
			titulo: 'Tarefa 2',
			descricao: 'Descrição da tarefa 2',
			status: 'Concluída'
		},
		{
			id: 3,
			titulo: 'Tarefa 3',
			descricao: 'Descrição da tarefa 3',
			status: 'Pendente'
		}
	];

	return (
		<div className='overflow-x-auto'>
			<table className='table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Título</th>
						<th>Descrição</th>
						<th>Status</th>
						<th className='text-center'>Ação</th>
					</tr>
				</thead>

				<tbody>
					{data.map((tarefa) => (
						<tr key={tarefa.id}>
							<td>{tarefa.id}</td>
							<td>{tarefa.titulo}</td>
							<td>{tarefa.descricao}</td>
							<td>{tarefa.status}</td>
							<td className='w-0'>
								<div className='flex gap-2'>
									<AlterarTarefaDialog />
									<DeletarTarefaDialog />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
