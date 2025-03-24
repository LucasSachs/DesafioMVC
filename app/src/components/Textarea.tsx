import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLTextAreaElement> {
	label: string;
	error?: string;
}

export default function Textarea({ label, error, ...props }: InputProps) {
	return (
		<label className='floating-label flex flex-col gap-1'>
			<span className={clsx({ 'text-error': error })}>{label}</span>
			<textarea
				placeholder={label}
				className={clsx('textarea resize-none w-full border-base-300 border', {
					'input-error !border-red-500': error
				})}
				{...props}
			/>

			<div className='text-error text-xs'>
				<span>{error}</span>
			</div>
		</label>
	);
}
