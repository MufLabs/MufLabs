export class NvidiaConfiguration {
    /**
     * API Key.
     */
    apiKey = "";
    /**
     * URL base de NVIDIA NIM.
     */
    baseUrl = "https://integrate.api.nvidia.com/v1";
    /**
     * Modelo por defecto.
     *
     * Puede cambiarse posteriormente por cualquier modelo
     * disponible en NVIDIA NIM.
     */
    defaultModel = "openai/gpt-oss-120b";
    /**
     * Organización (no utilizada).
     */
    organization;
    /**
     * Proyecto (no utilizado).
     */
    project;
    /**
     * Timeout en milisegundos.
     */
    timeout = 60000;
    /**
     * Número máximo de reintentos.
     */
    retries = 3;
    /**
     * Verificación TLS.
     */
    verifyTls = true;
    /**
     * Headers HTTP adicionales.
     */
    defaultHeaders;
    constructor(init) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
//# sourceMappingURL=NvidiaConfiguration.js.map