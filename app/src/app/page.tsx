import TarefaTable from '@/components/TarefaTable';
import { FetchApi, isApiError } from '@/helpers/APIHelper';

export default async function Page() {
	const data = await FetchApi({
		endpoint: '/tarefa',
		method: 'GET',
		cache: 'no-cache'
	});

	if (isApiError(data)) {
		return (
			<div className='flex justify-center size-full items-center'>
				<span className='text-error text-lg rounded-lg bg-red-100 p-4'>Houve um erro ao buscar os dados da API, por favor verifique se a mesma está ativa.</span>
			</div>
		);
	}

	return (
		<div className='p-8 overflow-hidden'>
			<TarefaTable data={data.data} />
		</div>
	);
}
