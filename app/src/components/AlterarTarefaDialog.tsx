'use client';

import { Pen } from 'lucide-react';
import { useState } from 'react';
import TarefaForm from './forms/tarefa/TarefaForm';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function AlterarTarefaDialog() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogTrigger>
				<div className='tooltip' data-tip='Alterar'>
					<div className='btn btn-sm btn-primary text-white'>
						<Pen size={16} />
					</div>
				</div>
			</DialogTrigger>

			<DialogContent className='min-w-3xl'>
				<DialogHeader>
					<DialogTitle>Formulário de Tarefa</DialogTitle>
					<DialogDescription>
						Aqui você pode atualizar os detalhes dessa tarefa conforme for necessário.
					</DialogDescription>
				</DialogHeader>

				<div className='pt-2'>
					<TarefaForm />
				</div>
			</DialogContent>
		</Dialog>
	);
}
