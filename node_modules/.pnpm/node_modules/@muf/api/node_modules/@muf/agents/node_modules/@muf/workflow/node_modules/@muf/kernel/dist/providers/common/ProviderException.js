export class ProviderException extends Error {
    statusCode;
    provider;
    cause;
    constructor(message, provider, statusCode, cause) {
        super(message);
        this.name = "ProviderException";
        this.provider = provider;
        this.statusCode = statusCode;
        this.cause = cause;
    }
}
//# sourceMappingURL=ProviderException.js.map