import { toast } from 'react-toastify';

export function toastError(message: string) {
	toast.error(message, {
		position: 'bottom-right',
		hideProgressBar: false,
		pauseOnHover: true,
		theme: 'colored',
		autoClose: 2000,
		style: {
			backgroundColor: '#ED4D4D'
		}
	});
}

export function toastSuccess(message: string) {
	toast.success(message, {
		position: 'bottom-right',
		hideProgressBar: false,
		pauseOnHover: true,
		theme: 'colored',
		autoClose: 2000,
		style: {
			backgroundColor: '#4DBE73'
		}
	});
}
