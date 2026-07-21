export class RegistryInspector {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    inspect() {
        const providers = this.registry.getAll();
        return {
            totalProviders: providers.length,
            providerIds: providers.map(p => p.id),
            providerNames: providers.map(p => p.name)
        };
    }
}
//# sourceMappingURL=RegistryInspector.js.map