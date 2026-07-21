import { HttpResponse } from "../../common";
import { BaseProvider } from "../../BaseProvider";
import { ProviderRequest } from "../../ProviderRequest";
import { ProviderResponse } from "../../ProviderResponse";
import { ProviderInfo } from "../../ProviderInfo";
import { OpenAICompatibleClient } from "./OpenAICompatibleClient";
import { OpenAICompatibleConfiguration } from "./OpenAICompatibleConfiguration";
export declare class OpenAICompatibleProvider extends BaseProvider {
    protected readonly configuration: OpenAICompatibleConfiguration;
    readonly id: string;
    readonly name: string;
    protected readonly client: OpenAICompatibleClient;
    constructor(configuration: OpenAICompatibleConfiguration);
    protected buildInfo(): ProviderInfo;
    initialize(): Promise<void>;
    execute(request: ProviderRequest): Promise<ProviderResponse>;
    embeddings(input: string | string[], model?: string): Promise<HttpResponse>;
    moderations(input: string, model?: string): Promise<HttpResponse>;
    images(prompt: string, model?: string, size?: string, quality?: string, style?: string, count?: number): Promise<HttpResponse>;
    speech(input: string, voice: string, model?: string, format?: string): Promise<HttpResponse>;
    availableModels(): Promise<HttpResponse>;
    protected resolveModel(request: ProviderRequest): string;
}
//# sourceMappingURL=OpenAICompatibleProvider.d.ts.map