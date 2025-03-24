import TarefaTable from '@/components/TarefaTable';
import { FetchApi, isApiError } from '@/helpers/APIHelper';
import { toastError } from '@/helpers/ToastHelper';

export default async function Page() {
	const data = await FetchApi({
		endpoint: '/tarefa',
		method: 'GET'
	});

	if (isApiError(data)) {
		return toastError(`Houve um erro ao buscar os dados: ${data.message}`);
	}

	return (
		<div className='p-8 overflow-hidden'>
			<TarefaTable data={data.data} />
		</div>
	);
}
