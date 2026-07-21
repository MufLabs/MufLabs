import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { OpenAIConfiguration } from "./OpenAIConfiguration";
import { ProviderInfo } from "../../ProviderInfo";
export declare class OpenAIProvider extends OpenAICompatibleProvider {
    readonly id: string;
    readonly name: string;
    constructor(configuration: OpenAIConfiguration);
    protected buildInfo(): ProviderInfo;
    initialize(): Promise<void>;
}
//# sourceMappingURL=OpenAIProvider.d.ts.map