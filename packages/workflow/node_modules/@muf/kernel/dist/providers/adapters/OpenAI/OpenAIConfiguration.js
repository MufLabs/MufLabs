export class OpenAIConfiguration {
    /**
     * API Key.
     */
    apiKey = "";
    /**
     * URL base.
     */
    baseUrl = "https://api.openai.com/v1";
    /**
     * Modelo por defecto.
     */
    defaultModel = "gpt-5";
    /**
     * Organización (opcional).
     */
    organization;
    /**
     * Proyecto (opcional).
     */
    project;
    /**
     * Timeout.
     */
    timeout = 60000;
    /**
     * Número de reintentos.
     */
    retries = 3;
    /**
     * Verificación TLS.
     */
    verifyTls = true;
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
//# sourceMappingURL=OpenAIConfiguration.js.map