import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { GeminiConfiguration } from "./GeminiConfiguration";
import { ProviderInfo } from "../../ProviderInfo";
export declare class GeminiProvider extends OpenAICompatibleProvider {
    readonly id: string;
    readonly name: string;
    constructor(configuration: GeminiConfiguration);
    protected buildInfo(): ProviderInfo;
}
//# sourceMappingURL=GeminiProvider.d.ts.map