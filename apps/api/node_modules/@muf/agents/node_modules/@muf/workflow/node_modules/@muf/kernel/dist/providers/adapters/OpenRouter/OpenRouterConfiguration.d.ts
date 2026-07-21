import { OpenAICompatibleConfiguration } from "../OpenAICompatible";
export declare class OpenRouterConfiguration implements OpenAICompatibleConfiguration {
    /**
     * API Key.
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
     * Organización (no utilizada por OpenRouter).
     */
    organization?: string;
    /**
     * Proyecto (no utilizado por OpenRouter).
     */
    project?: string;
    /**
     * Timeout.
     */
    timeout: number;
    /**
     * Número máximo de reintentos.
     */
    retries: number;
    /**
     * Verificar certificados TLS.
     */
    verifyTls: boolean;
    /**
     * Headers adicionales.
     */
    defaultHeaders?: Record<string, string>;
    constructor(init?: Partial<OpenAICompatibleConfiguration>);
}
//# sourceMappingURL=OpenRouterConfiguration.d.ts.map