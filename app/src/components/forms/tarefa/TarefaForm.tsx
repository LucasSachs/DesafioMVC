'use client';

import Textarea from '@/components/Textarea';
import { isApiError } from '@/helpers/APIHelper';
import { toastError, toastSuccess } from '@/helpers/ToastHelper';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../Input';
import { DialogClose } from '../../ui/dialog';
import { createTarefa, updateTarefa } from './utils/TarefaFormActions';
import { TarefaFormSchema, TarefaFormValidator } from './utils/TarefaFormValidator';
import { Tarefa } from './utils/Types';

interface TarefaFormProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	setDataState: Dispatch<SetStateAction<Tarefa[]>>;
	tarefa?: Tarefa
}

export default function TarefaForm({ setIsOpen, tarefa, setDataState }: TarefaFormProps) {
	const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<TarefaFormSchema>({
		resolver: zodResolver(TarefaFormValidator),
		defaultValues: {
			id: tarefa?.id
		}
	});

	async function handleFormSubmit(data: TarefaFormSchema) {
		let response = undefined;
		if (tarefa) {
			response = await updateTarefa(data);
		} else {
			response = await createTarefa(data);
		}

		if (isApiError(response)) {
			return toastError(`Houve um erro ao atualizar a tarefa: ${response.message}`);
		}

		if (tarefa) {
			setDataState((prev) => prev.map((tarefa) => {
				if (tarefa.id === response.data.id) { return response.data; }
				return tarefa;
			}));
		} else {
			setDataState((prev) => [...prev, response.data]);
		}

		toastSuccess('Tarefa atualizada com sucesso!');
		return setIsOpen(false);
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
						defaultValue={tarefa?.titulo}
						error={errors.titulo?.message}
					/>
				</div>

				<div className='w-1/2'>
					<select
						{...register('status')}
						defaultValue={tarefa?.status.descricao}
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
				defaultValue={tarefa?.descricao}
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
