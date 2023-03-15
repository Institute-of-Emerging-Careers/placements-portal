export interface ErrorMessage {
	msg: string;
}
//Used for error handling and logging
export class MyError extends Error {
	constructor(message: string, public readonly statusCode: number) {
        super(message);
        this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}