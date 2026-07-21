import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { OllamaConfiguration } from "./OllamaConfiguration";
import { ProviderInfo } from "../../ProviderInfo";
export declare class OllamaProvider extends OpenAICompatibleProvider {
    readonly id: string;
    readonly name: string;
    constructor(configuration: OllamaConfiguration);
    protected buildInfo(): ProviderInfo;
}
//# sourceMappingURL=OllamaProvider.d.ts.map