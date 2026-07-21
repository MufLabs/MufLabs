import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { NvidiaConfiguration } from "./NvidiaConfiguration";
import { ProviderInfo } from "../../ProviderInfo";
export declare class NvidiaProvider extends OpenAICompatibleProvider {
    readonly id: string;
    readonly name: string;
    constructor(configuration: NvidiaConfiguration);
    protected buildInfo(): ProviderInfo;
}
//# sourceMappingURL=NvidiaProvider.d.ts.map