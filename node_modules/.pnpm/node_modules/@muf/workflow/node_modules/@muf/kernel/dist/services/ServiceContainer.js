export class ServiceContainer {
    services = new Map();
    /**
     * Registers a service.
     */
    register(name, service) {
        this.services.set(name, service);
    }
    /**
     * Resolves a registered service.
     */
    resolve(name) {
        const service = this.services.get(name);
        if (service === undefined) {
            throw new Error(`Service '${name}' is not registered.`);
        }
        return service;
    }
    /**
     * Returns whether a service exists.
     */
    has(name) {
        return this.services.has(name);
    }
    /**
     * Removes a registered service.
     */
    unregister(name) {
        return this.services.delete(name);
    }
    /**
     * Removes all services.
     */
    clear() {
        this.services.clear();
    }
    /**
     * Returns all registered service names.
     */
    names() {
        return [...this.services.keys()];
    }
}
//# sourceMappingURL=ServiceContainer.js.map