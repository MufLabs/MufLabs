import { ProviderNotFoundError } from "./ProviderNotFoundError";
import { ProviderSelector } from "../registry";
export class ProviderManager {
    registry;
    selector = new ProviderSelector();
    constructor(registry) {
        this.registry = registry;
    }
    register(provider) {
        this.registry.register(provider);
    }
    unregister(providerId) {
        return this.registry.unregister(providerId);
    }
    hasProvider(providerId) {
        return this.getProvider(providerId) !== undefined;
    }
    getProvider(providerId) {
        return this.registry
            .getAll()
            .find(provider => provider.id === providerId);
    }
    getProviders() {
        return this.registry.getAll();
    }
    async execute(request) {
        const provider = this.selector.select(this.registry.getAll());
        if (!provider) {
            throw new ProviderNotFoundError(undefined, this.registry
                .getAll()
                .map(provider => provider.id));
        }
        if (!(await provider.isAvailable())) {
            throw new Error(`Provider '${provider.id}' is not available.`);
        }
        return provider.execute(request);
    }
}
//# sourceMappingURL=ProviderManager.js.map