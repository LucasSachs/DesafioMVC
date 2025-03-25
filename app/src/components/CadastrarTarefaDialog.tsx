'use client';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import TarefaForm from './forms/tarefa/TarefaForm';
import { Tarefa } from './forms/tarefa/utils/Types';
import { DialogHeader } from './ui/dialog';

interface CadastrarTarefaDialogProps {
	setDataState: Dispatch<SetStateAction<Tarefa[]>>;
}

export default function CadastrarTarefaDialog({ setDataState }: CadastrarTarefaDialogProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogTrigger>
				<div className='btn btn-primary flex gap-1'>
					<Plus size={24} />
					<span>Cadastrar nova tarefa</span>
				</div>
			</DialogTrigger>

			<DialogContent className='min-w-3xl'>
				<DialogHeader>
					<DialogTitle>Formulário de Tarefa</DialogTitle>
					<DialogDescription>
						Aqui você pode cadastrar uma nova tarefa.
					</DialogDescription>
				</DialogHeader>

				<div className='pt-2'>
					<TarefaForm
						setIsOpen={setIsOpen}
						setDataState={setDataState}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}
