import { ProviderCandidate, RoutingCriteria } from "./types";
export interface IProviderResolver {
    resolve(providers: ProviderCandidate[], criteria?: RoutingCriteria): ProviderCandidate[];
}
//# sourceMappingURL=IProviderResolver.d.ts.map