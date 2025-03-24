'use server';

import { FetchApi } from '@/helpers/APIHelper';
import { TarefaFormSchema } from './TarefaFormValidator';

export async function updateTarefa(tarefa: TarefaFormSchema) {
	const response = await FetchApi({
		endpoint: '/tarefa',
		method: 'PUT',
		body: JSON.stringify(tarefa)
	});

	return response;
}

export async function createTarefa(tarefa: TarefaFormSchema) {
	const response = await FetchApi({
		endpoint: '/tarefa',
		method: 'POST',
		body: JSON.stringify(tarefa)
	});

	return response;
}

export async function deleteTarefa(id: number) {
	const response = await FetchApi({
		endpoint: '/tarefa',
		method: 'DELETE',
		body: JSON.stringify({ id })
	});

	return response;
}
