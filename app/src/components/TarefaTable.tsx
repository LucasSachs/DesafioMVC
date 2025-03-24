'use client';

import clsx from 'clsx';
import { useState } from 'react';
import AlterarTarefaDialog from './AlterarTarefaDialog';
import CadastrarTarefaDialog from './CadastrarTarefaDialog';
import DeletarTarefaDialog from './DeletarTarefaDialog';
import { StatusEnum } from './forms/tarefa/utils/Enum';
import { Tarefa } from './forms/tarefa/utils/Types';

interface TarefaTableProps {
	data: Tarefa[];
}

export default function TarefaTable({ data }: TarefaTableProps) {
	const [dataState, setDataState] = useState<Tarefa[]>(data);

	return (
		<div className='flex flex-col gap-4 size-full'>
			<CadastrarTarefaDialog setDataState={setDataState} />

			<div className='overflow-auto'>
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
								<td>
									<div className='flex gap-2 items-center'>
										<div className={clsx('rounded-full size-4', {
											'bg-orange-400': tarefa.status.descricao === StatusEnum.PENDENTE,
											'bg-green-400': tarefa.status.descricao === StatusEnum.CONCLUIDA
										})}/>

										<span>{tarefa.status.descricao}</span>
									</div>
								</td>
								<td className='w-0'>
									<div className='flex gap-2'>
										<AlterarTarefaDialog
											tarefa={tarefa}
											setDataState={setDataState}
										/>

										<DeletarTarefaDialog
											tarefa={tarefa}
											setDataState={setDataState}
										/>
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
