import { OpenAICompatibleConfiguration } from "../OpenAICompatible";
export declare class LMStudioConfiguration implements OpenAICompatibleConfiguration {
    /**
     * API Key.
     * LM Studio normalmente no la requiere.
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
//# sourceMappingURL=LMStudioConfiguration.d.ts.map