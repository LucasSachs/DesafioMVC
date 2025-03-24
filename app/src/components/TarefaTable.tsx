'use client';

import { useState } from 'react';
import AlterarTarefaDialog from './AlterarTarefaDialog';
import CadastrarTarefaDialog from './CadastrarTarefaDialog';
import DeletarTarefaDialog from './DeletarTarefaDialog';
import { Tarefa } from './forms/tarefa/utils/Types';

interface TarefaTableProps {
	data: Tarefa[];
}

export default function TarefaTable({ data }: TarefaTableProps) {
	const [dataState, setDataState] = useState<Tarefa[]>(data);

	return (
		<div className='flex flex-col gap-4'>
			<CadastrarTarefaDialog setDataState={setDataState} />

			<div className='overflow-x-auto w-full'>
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
						{dataState.map((tarefa: Tarefa) => (
							<tr key={tarefa.id}>
								<td>{tarefa.id}</td>
								<td>{tarefa.titulo}</td>
								<td>{tarefa.descricao}</td>
								<td>{tarefa.status.descricao}</td>
								<td className='w-0'>
									<div className='flex gap-2'>
										<AlterarTarefaDialog
											tarefa={tarefa}
											setDataState={setDataState}
										/>

										<DeletarTarefaDialog />
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
