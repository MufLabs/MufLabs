export class Conversation {
    history = [];
    add(message) {
        this.history.push(message);
    }
    all() {
        return [...this.history];
    }
    last() {
        return this.history.at(-1);
    }
    size() {
        return this.history.length;
    }
    clear() {
        this.history.length = 0;
    }
}
//# sourceMappingURL=Conversation.js.map