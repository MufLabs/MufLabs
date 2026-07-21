export declare class MemoryStore {
    private readonly memory;
    set(key: string, value: unknown): void;
    get<T>(key: string): T | undefined;
    has(key: string): boolean;
    remove(key: string): void;
    clear(): void;
}
//# sourceMappingURL=MemoryStore.d.ts.map