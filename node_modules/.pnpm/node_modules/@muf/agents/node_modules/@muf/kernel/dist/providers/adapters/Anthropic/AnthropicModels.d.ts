import { ProviderModel } from "../../ProviderModel";
import { AnthropicConfiguration } from "./AnthropicConfiguration";
interface AnthropicRemoteModel {
    id: string;
    display_name?: string;
    created_at?: string;
    type?: string;
}
export declare class AnthropicModels {
    static discover(configuration: AnthropicConfiguration): Promise<ProviderModel[]>;
    static map(models: AnthropicRemoteModel[]): ProviderModel[];
}
export {};
//# sourceMappingURL=AnthropicModels.d.ts.map