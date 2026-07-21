export class ProviderResolver {
    resolve(providers, criteria) {
        let candidates = [...providers];
        //
        // Provider solicitado explícitamente
        //
        if (criteria?.provider) {
            candidates = candidates.filter(candidate => candidate.provider.id === criteria.provider ||
                candidate.provider.name === criteria.provider ||
                candidate.provider.info.vendor === criteria.provider);
        }
        //
        // Solo proveedores disponibles
        //
        candidates = candidates.filter(candidate => candidate.available !== false);
        //
        // Solo proveedores locales
        //
        if (criteria?.localOnly) {
            candidates = candidates.filter(candidate => candidate.provider.info.vendor.toLowerCase() === "local");
        }
        return candidates;
    }
}
//# sourceMappingURL=ProviderResolver.js.map