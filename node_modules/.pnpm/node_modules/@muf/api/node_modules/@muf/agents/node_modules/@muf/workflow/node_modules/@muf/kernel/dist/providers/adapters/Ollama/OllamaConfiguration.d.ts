import { OpenAICompatibleConfiguration } from "../OpenAICompatible";
export declare class OllamaConfiguration implements OpenAICompatibleConfiguration {
    /**
     * API Key.
     * Ollama no la utiliza.
     */
    apiKey: string;
    /**
     * URL base.
     */
    baseUrl: string;
    /**
     * Modelo por defecto.
     */
    defaultModel: string;
    /**
     * Organización.
     */
    organization?: string;
    /**
     * Proyecto.
     */
    project?: string;
    /**
     * Timeout.
     */
    timeout: number;
    /**
     * Reintentos.
     */
    retries: number;
    /**
     * TLS.
     */
    verifyTls: boolean;
    /**
     * Headers adicionales.
     */
    defaultHeaders?: Record<string, string>;
    constructor(init?: Partial<OpenAICompatibleConfiguration>);
}
//# sourceMappingURL=OllamaConfiguration.d.ts.map