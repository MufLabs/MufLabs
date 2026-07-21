import { OpenAICompatibleConfiguration } from "../OpenAICompatible";
export declare class OpenAIConfiguration implements OpenAICompatibleConfiguration {
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
     * Organización (opcional).
     */
    organization?: string;
    /**
     * Proyecto (opcional).
     */
    project?: string;
    /**
     * Timeout.
     */
    timeout: number;
    /**
     * Número de reintentos.
     */
    retries: number;
    /**
     * Verificación TLS.
     */
    verifyTls: boolean;
    /**
     * Headers adicionales.
     */
    defaultHeaders?: Record<string, string>;
    constructor(init?: Partial<OpenAICompatibleConfiguration>);
}
//# sourceMappingURL=OpenAIConfiguration.d.ts.map