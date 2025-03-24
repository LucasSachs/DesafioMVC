import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import logo from '../../public/logo.png';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Desafio Técnico - MVC',
	description: 'Desafio Técnico da empresa Santa Casa'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='pt'>
			<body className={`${poppins.className} antialiased`}>
				<ToastContainer />
				<div className='w-full h-screen bg-base-200 justify-center items-center flex flex-col relative'>
					<div className='size-3/4 bg-base-100 border border-base-300 shadow-md rounded-lg flex flex-col'>
						<div className='border-b-base-300 w-full border-b flex justify-between items-center p-3'>
							<Link
								href='https://santacasapg.com/'
								target='_blank'
							>
								<Image
									src={logo}
									alt='Logo'
									width={100}
								/>
							</Link>

							<span className='text-lg text-center'>Teste Técnico: Sistema de Gerenciamento de Tarefas com Interface</span>
							<div />
						</div>

						{children}
					</div>

					<div className='absolute bottom-4 text-sm'>Desenvolvido por: Lucas Sachs</div>
				</div>
			</body>
		</html>
	);
}
