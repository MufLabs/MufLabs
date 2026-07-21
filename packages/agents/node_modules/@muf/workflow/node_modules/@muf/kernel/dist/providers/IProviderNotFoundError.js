export class ProviderNotFoundError extends Error {
    /**
     * Identificador del proveedor solicitado.
     */
    providerId;
    /**
     * Lista de proveedores disponibles.
     */
    availableProviders;
    constructor(providerId, availableProviders) {
        const message = providerId
            ? availableProviders && availableProviders.length > 0
                ? `Provider '${providerId}' was not found. Available providers: ${availableProviders.join(", ")}.`
                : `Provider '${providerId}' was not found.`
            : "No AI provider has been registered.";
        super(message);
        this.name = "ProviderNotFoundError";
        this.providerId = providerId;
        this.availableProviders = availableProviders;
        Object.setPrototypeOf(this, ProviderNotFoundError.prototype);
    }
}
//# sourceMappingURL=IProviderNotFoundError.js.map