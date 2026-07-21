import { IProvider } from "./IProvider";
import { IProviderManager } from "./IProviderManager";
import { ProviderRequest } from "./ProviderRequest";
import { ProviderResponse } from "./ProviderResponse";
import { ProviderRegistry } from "../registry";
export declare class ProviderManager implements IProviderManager {
    private readonly registry;
    private readonly selector;
    constructor(registry: ProviderRegistry);
    register(provider: IProvider): void;
    unregister(providerId: string): boolean;
    hasProvider(providerId: string): boolean;
    getProvider(providerId: string): IProvider | undefined;
    getProviders(): readonly IProvider[];
    execute(request: ProviderRequest): Promise<ProviderResponse>;
}
//# sourceMappingURL=ProviderManager.d.ts.map