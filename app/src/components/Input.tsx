import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
	return (
		<label className='floating-label flex flex-col gap-1'>
			<span className={clsx({ 'text-error': error })}>{label}</span>
			<input
				placeholder={label}
				className={clsx('input input-md border border-base-300 w-full', {
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
