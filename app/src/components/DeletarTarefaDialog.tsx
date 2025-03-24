'use client';

import { FetchApi, isApiError } from '@/helpers/APIHelper';
import { toastError, toastSuccess } from '@/helpers/ToastHelper';
import { Trash2 } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { Tarefa } from './forms/tarefa/utils/Types';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface DeletarTarefaDialogProps {
	setDataState: Dispatch<SetStateAction<Tarefa[]>>;
	tarefa: Tarefa;
}

export default function DeletarTarefaDialog({ setDataState, tarefa }: DeletarTarefaDialogProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	async function handleDelete() {
		setIsLoading(true);

		const response = await FetchApi({
			endpoint: `/tarefa/${tarefa.id}`,
			method: 'DELETE'
		});

		if (isApiError(response)) {
			toastError(`Houve um erro ao deletar a tarefa: ${response.message}`);
			return setIsLoading(false);
		}

		setDataState((prevState) => prevState.filter((current) => current.id !== tarefa.id));
		toastSuccess('Tarefa removida com sucesso!');
		setIsOpen(false);
		setIsLoading(false);
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogTrigger>
				<div className='tooltip' data-tip='Deletar'>
					<div className='btn btn-sm btn-error text-white'>
						<Trash2 size={16} />
					</div>
				</div>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Você tem certeza disso?</DialogTitle>
					<DialogDescription>
						Essa ação é permanente e não poderá ser desfeita. A tarefa <span className='text-black font-medium'>{tarefa.titulo}</span> será excluída definitivamente.
					</DialogDescription>
				</DialogHeader>

				<div className='flex justify-center gap-2'>
					<DialogClose asChild>
						<button
							disabled={isLoading}
							className='btn'
						>
							Cancelar
						</button>
					</DialogClose>

					<button
						disabled={isLoading}
						className='btn btn-error'
						onClick={handleDelete}
					>
						Deletar
					</button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
