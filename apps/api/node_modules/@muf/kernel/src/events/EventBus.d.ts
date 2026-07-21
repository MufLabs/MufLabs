type Handler<T> = (payload: T) => void;
export declare class EventBus {
    private handlers;
    on<T>(event: string, handler: Handler<T>): void;
    emit<T>(event: string, payload: T): void;
}
export {};
//# sourceMappingURL=EventBus.d.ts.map