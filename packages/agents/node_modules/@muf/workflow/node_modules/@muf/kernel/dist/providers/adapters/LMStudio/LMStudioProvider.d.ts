import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { LMStudioConfiguration } from "./LMStudioConfiguration";
import { ProviderInfo } from "../../ProviderInfo";
export declare class LMStudioProvider extends OpenAICompatibleProvider {
    readonly id: string;
    constructor(configuration: LMStudioConfiguration);
    protected buildInfo(): ProviderInfo;
}
//# sourceMappingURL=LMStudioProvider.d.ts.map