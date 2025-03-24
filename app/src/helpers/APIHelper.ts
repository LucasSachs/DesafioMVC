import { ApiContent, ApiError } from './utils/Types';

export async function FetchApi(requestConfig: RequestInit & { endpoint: string }): Promise<ApiContent | ApiError> {
	try {
		const response = await fetch(`${process.env.BACKEND_URL}${requestConfig.endpoint}`, {
			...requestConfig,
			headers: {
				'Content-Type': 'application/json',
				...requestConfig.headers
			}
		});

		if (!response.ok) {
			const erro: ApiError = {
				statusCode: response.status,
				success: false,
				message: response.statusText
			};

			return erro;
		}

		const responseContent: ApiContent = {
			statusCode: response.status,
			success: true,
			data: await response.json()
		};

		return responseContent;
	} catch (error: any) {
		const erro: ApiError = {
			statusCode: 500,
			success: false,
			message: error.message
		};

		return erro;
	}
}

export function isApiError(response: ApiContent | ApiError): response is ApiError {
	return !response.success;
}
