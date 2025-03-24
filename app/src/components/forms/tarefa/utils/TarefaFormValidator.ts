import { z } from 'zod';

export const TarefaFormValidator = z.object({
	id: z
		.number()
		.optional(),

	titulo: z
		.string()
		.nonempty('O título da tarefa é obrigatório.')
		.min(3, 'O título da tarefa deve ter no mínimo 3 caracteres.'),

	descricao: z
		.string()
		.nonempty('A descrição da tarefa é obrigatória.')
		.min(8, 'A descrição da tarefa deve ter no mínimo 8 caracteres.')
		.max(100, 'A descrição da tarefa deve ter no máximo 100 caracteres.'),

	status: z
		.enum(['Concluída', 'Pendente'], { message: 'O status dessa tarefa é inválido.' })
});

export type TarefaFormSchema = z.infer<typeof TarefaFormValidator>;
