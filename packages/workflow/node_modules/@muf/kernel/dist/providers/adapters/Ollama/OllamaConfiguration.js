export class OllamaConfiguration {
    /**
     * API Key.
     * Ollama no la utiliza.
     */
    apiKey = "";
    /**
     * URL base.
     */
    baseUrl = "http://localhost:11434/v1";
    /**
     * Modelo por defecto.
     */
    defaultModel = "llama3";
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
//# sourceMappingURL=OllamaConfiguration.js.map