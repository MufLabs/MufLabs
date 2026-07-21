export declare class ProviderNotFoundError extends Error {
    /**
     * Identificador del proveedor solicitado.
     */
    readonly providerId?: string;
    /**
     * Lista de proveedores disponibles.
     */
    readonly availableProviders?: readonly string[];
    constructor(providerId?: string, availableProviders?: readonly string[]);
}
//# sourceMappingURL=IProviderNotFoundError.d.ts.map