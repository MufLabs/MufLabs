export class EventBus {
    handlers = new Map();
    on(event, handler) {
        const list = this.handlers.get(event) ?? [];
        list.push(handler);
        this.handlers.set(event, list);
    }
    emit(event, payload) {
        const list = this.handlers.get(event);
        if (!list)
            return;
        for (const handler of list)
            handler(payload);
    }
}
//# sourceMappingURL=EventBus.js.map