import { ProviderManager } from "../providers";
import { ProviderRegistry } from "../registry";
import { ExecutionPipeline } from "../execution";
export class Kernel {
    registry;
    providerManager;
    pipeline;
    constructor() {
        this.registry = new ProviderRegistry();
        this.providerManager = new ProviderManager(this.registry);
        this.pipeline = new ExecutionPipeline(this.providerManager);
    }
    /**
     * Permite registrar proveedores dinámicamente.
     */
    get providers() {
        return this.registry;
    }
    async execute(context, request) {
        const result = await this.pipeline.execute({
            kernel: context,
            request
        });
        return result.response;
    }
}
//# sourceMappingURL=Kernel.js.map