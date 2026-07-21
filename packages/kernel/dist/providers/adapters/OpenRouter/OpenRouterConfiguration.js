export class OpenRouterConfiguration {
    /**
     * API Key.
     */
    apiKey = "";
    /**
     * URL base.
     */
    baseUrl = "https://openrouter.ai/api/v1";
    /**
     * Modelo por defecto.
     */
    defaultModel = "openai/gpt-5";
    /**
     * Organización (no utilizada por OpenRouter).
     */
    organization;
    /**
     * Proyecto (no utilizado por OpenRouter).
     */
    project;
    /**
     * Timeout.
     */
    timeout = 60000;
    /**
     * Número máximo de reintentos.
     */
    retries = 3;
    /**
     * Verificar certificados TLS.
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
//# sourceMappingURL=OpenRouterConfiguration.js.map