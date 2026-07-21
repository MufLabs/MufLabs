import { ProviderCandidate, RoutingCriteria } from "./types";
import { ProviderModel } from "../providers";
export interface IModelSelector {
    select(providers: ProviderCandidate[], criteria?: RoutingCriteria): ProviderModel | undefined;
}
//# sourceMappingURL=IModelSelector.d.ts.map