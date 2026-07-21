import { ProviderRequest } from "../../ProviderRequest";
import { ProviderResponse } from "../../ProviderResponse";
import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { OpenRouterConfiguration } from "./OpenRouterConfiguration";
import { ProviderInfo } from "../../ProviderInfo";
export declare class OpenRouterProvider extends OpenAICompatibleProvider {
    readonly id: string;
    readonly name: string;
    constructor(configuration: OpenRouterConfiguration);
    protected buildInfo(): ProviderInfo;
    initialize(): Promise<void>;
    execute(request: ProviderRequest): Promise<ProviderResponse>;
}
//# sourceMappingURL=OpenRouterProvider.d.ts.map