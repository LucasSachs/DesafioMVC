'use client';

import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function DeletarTarefaDialog() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	async function handleDelete() {
		setIsLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		setIsLoading(false);
		setIsOpen(false);
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
						Essa ação é permanente e não poderá ser desfeita. A tarefa será excluída definitivamente.
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
