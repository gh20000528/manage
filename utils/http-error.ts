export default class HttpError extends Error {
    code: string;
    errorCode: string;

    constructor(message: string, errorCode: string) {
        super(message);
        this.code = errorCode;
        this.errorCode = errorCode; // 如果需要，確保正確設置errorCode
        this.message = message; 
    }
}

