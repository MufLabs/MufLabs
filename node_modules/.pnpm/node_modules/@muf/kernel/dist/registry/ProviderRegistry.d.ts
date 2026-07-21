import { IProvider } from "../providers";
import { IProviderRegistry } from "./IProviderRegistry";
export declare class ProviderRegistry implements IProviderRegistry {
    private readonly providers;
    register(provider: IProvider): void;
    unregister(id: string): boolean;
    exists(id: string): boolean;
    get(id: string): IProvider | undefined;
    getAll(): readonly IProvider[];
    clear(): void;
    size(): number;
    ids(): string[];
}
//# sourceMappingURL=ProviderRegistry.d.ts.map