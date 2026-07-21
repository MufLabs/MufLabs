import { IModelSelector } from "./IModelSelector";
import { ProviderCandidate, RoutingCriteria } from "./types";
import { ProviderModel } from "../providers";
export declare class ModelSelector implements IModelSelector {
    select(providers: ProviderCandidate[], criteria?: RoutingCriteria): ProviderModel | undefined;
    private calculateScore;
}
//# sourceMappingURL=ModelSelector.d.ts.map