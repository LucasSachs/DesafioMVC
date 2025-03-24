'use client';

import Textarea from '@/components/Textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Input from '../../Input';
import { DialogClose } from '../../ui/dialog';
import { TarefaFormSchema, TarefaFormValidator } from './utils/TarefaFormValidator';

export default function TarefaForm() {
	const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<TarefaFormSchema>({
		resolver: zodResolver(TarefaFormValidator)
	});

	async function handleFormSubmit(data: TarefaFormSchema) {
		console.log(data);
		return await new Promise((resolve) => {
			setTimeout(resolve, 2000);
		});
	}

	return (
		<form
			onSubmit={handleSubmit(handleFormSubmit)}
			className='flex flex-col gap-3'
		>
			<div className='flex gap-3'>
				<div className='w-1/2'>
					<Input
						{...register('titulo')}
						label='Título da tarefa'
						error={errors.titulo?.message}
					/>
				</div>

				<div className='w-1/2'>
					<select
						{...register('status')}
						defaultValue='Selecione um status...'
						className='select border border-base-300 w-full'
					>
						<option disabled={true}>Status da Tarefa</option>
						<option>Pendente</option>
						<option>Concluída</option>
					</select>
				</div>
			</div>

			<Textarea
				{...register('descricao')}
				label='Descrição da tarefa'
				error={errors.descricao?.message}
			/>

			<div className='flex justify-center gap-2'>
				<DialogClose asChild>
					<button className='btn'>
						Cancelar
					</button>
				</DialogClose>

				<button
					disabled={isSubmitting}
					className='btn btn-success'
				>
					Salvar
				</button>
			</div>
		</form>
	);
}
