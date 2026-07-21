type Handler<T = unknown> = (payload: T) => void;
export declare class EventBus {
    private readonly handlers;
    /**
     * Registers an event handler.
     */
    on<T>(event: string, handler: Handler<T>): void;
    /**
     * Registers a handler that will be executed only once.
     */
    once<T>(event: string, handler: Handler<T>): void;
    /**
     * Removes an event handler.
     */
    off<T>(event: string, handler: Handler<T>): void;
    /**
     * Emits an event.
     */
    emit<T>(event: string, payload: T): void;
    /**
     * Removes every registered handler.
     */
    clear(): void;
    /**
     * Returns whether an event has subscribers.
     */
    has(event: string): boolean;
    /**
     * Returns the registered event names.
     */
    events(): string[];
}
export {};
//# sourceMappingURL=EventBus.d.ts.map