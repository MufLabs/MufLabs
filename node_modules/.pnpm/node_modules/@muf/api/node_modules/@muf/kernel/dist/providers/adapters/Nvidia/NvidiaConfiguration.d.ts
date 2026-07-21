import { OpenAICompatibleConfiguration } from "../OpenAICompatible";
export declare class NvidiaConfiguration implements OpenAICompatibleConfiguration {
    /**
     * API Key.
     */
    apiKey: string;
    /**
     * URL base de NVIDIA NIM.
     */
    baseUrl: string;
    /**
     * Modelo por defecto.
     *
     * Puede cambiarse posteriormente por cualquier modelo
     * disponible en NVIDIA NIM.
     */
    defaultModel: string;
    /**
     * Organización (no utilizada).
     */
    organization?: string;
    /**
     * Proyecto (no utilizado).
     */
    project?: string;
    /**
     * Timeout en milisegundos.
     */
    timeout: number;
    /**
     * Número máximo de reintentos.
     */
    retries: number;
    /**
     * Verificación TLS.
     */
    verifyTls: boolean;
    /**
     * Headers HTTP adicionales.
     */
    defaultHeaders?: Record<string, string>;
    constructor(init?: Partial<OpenAICompatibleConfiguration>);
}
//# sourceMappingURL=NvidiaConfiguration.d.ts.map