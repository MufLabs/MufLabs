export declare class ServiceContainer {
    private readonly services;
    /**
     * Registers a service.
     */
    register<T>(name: string, service: T): void;
    /**
     * Resolves a registered service.
     */
    resolve<T>(name: string): T;
    /**
     * Returns whether a service exists.
     */
    has(name: string): boolean;
    /**
     * Removes a registered service.
     */
    unregister(name: string): boolean;
    /**
     * Removes all services.
     */
    clear(): void;
    /**
     * Returns all registered service names.
     */
    names(): string[];
}
//# sourceMappingURL=ServiceContainer.d.ts.map