export class EventBus {
    handlers = new Map();
    /**
     * Registers an event handler.
     */
    on(event, handler) {
        let handlers = this.handlers.get(event);
        if (!handlers) {
            handlers = new Set();
            this.handlers.set(event, handlers);
        }
        handlers.add(handler);
    }
    /**
     * Registers a handler that will be executed only once.
     */
    once(event, handler) {
        const wrapper = (payload) => {
            this.off(event, wrapper);
            handler(payload);
        };
        this.on(event, wrapper);
    }
    /**
     * Removes an event handler.
     */
    off(event, handler) {
        const handlers = this.handlers.get(event);
        if (!handlers) {
            return;
        }
        handlers.delete(handler);
        if (handlers.size === 0) {
            this.handlers.delete(event);
        }
    }
    /**
     * Emits an event.
     */
    emit(event, payload) {
        const handlers = this.handlers.get(event);
        if (!handlers) {
            return;
        }
        // Copy to avoid modifications while iterating.
        for (const handler of [...handlers]) {
            try {
                handler(payload);
            }
            catch {
                // Individual handlers must never stop the event pipeline.
            }
        }
    }
    /**
     * Removes every registered handler.
     */
    clear() {
        this.handlers.clear();
    }
    /**
     * Returns whether an event has subscribers.
     */
    has(event) {
        return this.handlers.has(event);
    }
    /**
     * Returns the registered event names.
     */
    events() {
        return [...this.handlers.keys()];
    }
}
//# sourceMappingURL=EventBus.js.map