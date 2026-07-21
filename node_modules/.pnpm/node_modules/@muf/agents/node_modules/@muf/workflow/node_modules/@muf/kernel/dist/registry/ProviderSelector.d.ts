import { IProvider } from "../providers";
export declare class ProviderSelector {
    /**
     * Selects the most appropriate provider.
     *
     * Current strategy:
     *  1. First available provider.
     *  2. Fallback to the first registered provider.
     *
     * This class is intentionally isolated so more advanced routing
     * (cost, latency, capabilities, model selection, load balancing,
     * failover, etc.) can be implemented later without changing the
     * ProviderManager.
     */
    select(providers: readonly IProvider[]): IProvider;
}
//# sourceMappingURL=ProviderSelector.d.ts.map