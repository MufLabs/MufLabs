export class LMStudioConfiguration {
    /**
     * API Key.
     * LM Studio normalmente no la requiere.
     */
    apiKey = "";
    /**
     * URL base.
     */
    baseUrl = "http://localhost:1234/v1";
    /**
     * Modelo por defecto.
     */
    defaultModel = "local-model";
    /**
     * Organización.
     */
    organization;
    /**
     * Proyecto.
     */
    project;
    /**
     * Timeout.
     */
    timeout = 60000;
    /**
     * Reintentos.
     */
    retries = 1;
    /**
     * TLS.
     */
    verifyTls = false;
    /**
     * Headers adicionales.
     */
    defaultHeaders;
    constructor(init) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
//# sourceMappingURL=LMStudioConfiguration.js.map