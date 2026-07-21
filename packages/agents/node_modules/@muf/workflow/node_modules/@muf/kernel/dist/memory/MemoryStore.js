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
        return this.memory.delete(key);
    }
    keys() {
        return [...this.memory.keys()];
    }
    size() {
        return this.memory.size;
    }
    clear() {
        this.memory.clear();
    }
}
//# sourceMappingURL=MemoryStore.js.map