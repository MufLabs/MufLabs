import { CapabilityResolver } from "./CapabilityResolver";
import { ProviderResolver } from "./ProviderResolver";
import { RoutingPolicy } from "./RoutingPolicy";
import { ModelSelector } from "./ModelSelector";
export class RoutingEngine {
    capabilityResolver = new CapabilityResolver();
    providerResolver = new ProviderResolver();
    routingPolicy = new RoutingPolicy();
    modelSelector = new ModelSelector();
    async route(context) {
        let providers = context.providers.map(provider => ({
            provider,
            available: true
        }));
        providers = this.capabilityResolver.resolve(providers, context.routing.criteria);
        providers = this.providerResolver.resolve(providers, context.routing.criteria);
        providers = this.routingPolicy.apply(providers, context.routing.criteria);
        const model = this.modelSelector.select(providers, context.routing.criteria);
        if (!model || providers.length === 0) {
            throw new Error("No provider matched the routing criteria.");
        }
        return {
            selected: providers[0],
            alternatives: providers.slice(1)
        };
    }
}
//# sourceMappingURL=RoutingEngine.js.map