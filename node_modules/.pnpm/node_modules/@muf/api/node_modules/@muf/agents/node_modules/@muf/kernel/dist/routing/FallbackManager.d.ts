import { IFallbackManager } from "./IFallbackManager";
import { ProviderCandidate } from "./types";
export declare class FallbackManager implements IFallbackManager {
    next(current: ProviderCandidate, providers: ProviderCandidate[]): ProviderCandidate | undefined;
}
//# sourceMappingURL=FallbackManager.d.ts.map