export declare class ServiceContainer {
    private readonly services;
    register<T>(name: string, service: T): void;
    resolve<T>(name: string): T;
    has(name: string): boolean;
}
//# sourceMappingURL=ServiceContainer.d.ts.map