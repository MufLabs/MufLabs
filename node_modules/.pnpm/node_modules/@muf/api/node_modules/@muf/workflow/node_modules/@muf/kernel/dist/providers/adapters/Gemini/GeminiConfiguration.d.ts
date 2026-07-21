import { OpenAICompatibleConfiguration } from "../OpenAICompatible";
export declare class GeminiConfiguration implements OpenAICompatibleConfiguration {
    apiKey: string;
    baseUrl: string;
    defaultModel: string;
    organization?: string;
    project?: string;
    timeout: number;
    retries: number;
    verifyTls: boolean;
    defaultHeaders?: Record<string, string>;
    constructor(init?: Partial<OpenAICompatibleConfiguration>);
}
//# sourceMappingURL=GeminiConfiguration.d.ts.map