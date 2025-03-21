import Input from './Input';

export default function TarefaForm() {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex gap-3'>
				<div className='w-1/2'>
					<Input label='Título da tarefa' />
				</div>

				<div className='w-1/2'>
					<Input label='Título da tarefa' />
				</div>
			</div>

			<label className='floating-label'>
				<span>Descrição da tarefa</span>
				<textarea
					className='textarea resize-none w-full border-base-300 border'
					placeholder='Descrição da tarefa'
				/>
			</label>
		</div>
	);
}
