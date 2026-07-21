export declare class ProviderException extends Error {
    readonly statusCode?: number;
    readonly provider?: string;
    readonly cause?: unknown;
    constructor(message: string, provider?: string, statusCode?: number, cause?: unknown);
}
//# sourceMappingURL=ProviderException.d.ts.map