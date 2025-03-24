interface ApiMessage {
	statusCode: number;
	success: boolean;
}

export interface ApiError extends ApiMessage {
	message: string;
}

export interface ApiContent extends ApiMessage {
	data: any;
}
