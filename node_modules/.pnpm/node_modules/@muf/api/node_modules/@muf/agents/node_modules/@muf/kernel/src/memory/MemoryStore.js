export class MemoryStore {
    memory = new Map();
    set(key, value) {
        this.memory.set(key, value);
    }
    get(key) {
        return this.memory.get(key);
    }
    has(key) {
        return this.memory.has(key);
    }
    remove(key) {
        this.memory.delete(key);
    }
    clear() {
        this.memory.clear();
    }
}
//# sourceMappingURL=MemoryStore.js.map