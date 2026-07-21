import { HttpResponse } from "../../common";
import { BaseProvider } from "../../BaseProvider";
import { ProviderRequest } from "../../ProviderRequest";
import { ProviderResponse } from "../../ProviderResponse";
import { ProviderInfo } from "../../ProviderInfo";
import { AnthropicClient } from "./AnthropicClient";
import { AnthropicConfiguration } from "./AnthropicConfiguration";
export declare class AnthropicProvider extends BaseProvider {
    protected readonly configuration: AnthropicConfiguration;
    readonly id: string;
    readonly name: string;
    protected readonly client: AnthropicClient;
    constructor(configuration: AnthropicConfiguration);
    protected buildInfo(): ProviderInfo;
    initialize(): Promise<void>;
    execute(request: ProviderRequest): Promise<ProviderResponse>;
    availableModels(): Promise<HttpResponse>;
    protected resolveModel(request: ProviderRequest): string;
}
//# sourceMappingURL=AnthropicProvider.d.ts.map