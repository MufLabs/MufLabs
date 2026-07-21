import { KernelContext } from "../context";
import { KernelRequest, KernelResponse } from "../types";
import { IKernel } from "./IKernel";
import { ProviderRegistry } from "../registry";
export declare class Kernel implements IKernel {
    private readonly registry;
    private readonly providerManager;
    private readonly pipeline;
    constructor();
    /**
     * Permite registrar proveedores dinámicamente.
     */
    get providers(): ProviderRegistry;
    execute(context: KernelContext, request: KernelRequest): Promise<KernelResponse>;
}
//# sourceMappingURL=Kernel.d.ts.map