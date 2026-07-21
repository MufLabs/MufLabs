import { IRoutingPolicy } from "./IRoutingPolicy";
import { ProviderCandidate, RoutingCriteria } from "./types";
export declare class RoutingPolicy implements IRoutingPolicy {
    apply(providers: ProviderCandidate[], criteria?: RoutingCriteria): ProviderCandidate[];
    private calculateScore;
    private modelScore;
}
//# sourceMappingURL=RoutingPolicy.d.ts.map