export class Conversation {
    history = [];
    add(message) {
        this.history.push(message);
    }
    all() {
        return [...this.history];
    }
    clear() {
        this.history.length = 0;
    }
}
//# sourceMappingURL=Conversation.js.map