import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	label: string;
}

export default function Input({ label, ...props }: InputProps) {
	return (
		<label className='floating-label'>
			<span>{label}</span>
			<input
				className='input input-md border border-base-300 w-full'
				placeholder={label}
				{...props}
			/>
		</label>
	);
}
