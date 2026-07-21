export class FallbackManager {
    next(current, providers) {
        if (providers.length === 0) {
            return undefined;
        }
        const index = providers.findIndex(provider => provider.provider.id ===
            current.provider.id);
        if (index < 0) {
            return providers[0];
        }
        if (index + 1 >= providers.length) {
            return undefined;
        }
        return providers[index + 1];
    }
}
//# sourceMappingURL=FallbackManager.js.map