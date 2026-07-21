export class ProviderRegistry {
    providers = new Map();
    register(provider) {
        this.providers.set(provider.id, provider);
    }
    unregister(id) {
        return this.providers.delete(id);
    }
    exists(id) {
        return this.providers.has(id);
    }
    get(id) {
        return this.providers.get(id);
    }
    getAll() {
        return [...this.providers.values()];
    }
    clear() {
        this.providers.clear();
    }
    size() {
        return this.providers.size;
    }
    ids() {
        return [...this.providers.keys()];
    }
}
//# sourceMappingURL=ProviderRegistry.js.map