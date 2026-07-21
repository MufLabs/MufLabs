import { IRoutingEngine } from "./IRoutingEngine";
import { RoutingContext, RoutingResult } from "./types";
export declare class RoutingEngine implements IRoutingEngine {
    private readonly capabilityResolver;
    private readonly providerResolver;
    private readonly routingPolicy;
    private readonly modelSelector;
    route(context: RoutingContext): Promise<RoutingResult>;
}
//# sourceMappingURL=RoutingEngine.d.ts.map