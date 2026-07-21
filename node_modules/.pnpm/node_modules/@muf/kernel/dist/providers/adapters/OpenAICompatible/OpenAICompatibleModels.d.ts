import { ProviderModel } from "../../ProviderModel";
import { OpenAICompatibleConfiguration } from "./OpenAICompatibleConfiguration";
interface OpenAICompatibleRemoteModel {
    id: string;
    object: string;
    created?: number;
    owned_by?: string;
}
export declare class OpenAICompatibleModels {
    static discover(configuration: OpenAICompatibleConfiguration): Promise<ProviderModel[]>;
    static map(models: OpenAICompatibleRemoteModel[]): ProviderModel[];
}
export {};
//# sourceMappingURL=OpenAICompatibleModels.d.ts.map