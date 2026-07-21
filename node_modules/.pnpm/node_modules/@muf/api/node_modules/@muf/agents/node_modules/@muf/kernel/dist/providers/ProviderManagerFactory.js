import { ProviderManager } from "./ProviderManager";
import { ProviderRegistry } from "../registry";
export class ProviderManagerFactory {
    /**
     * Crea una nueva instancia del administrador de proveedores.
     */
    static create(providers) {
        const registry = new ProviderRegistry();
        if (providers) {
            for (const provider of providers) {
                registry.register(provider);
            }
        }
        return new ProviderManager(registry);
    }
}
//# sourceMappingURL=ProviderManagerFactory.js.map