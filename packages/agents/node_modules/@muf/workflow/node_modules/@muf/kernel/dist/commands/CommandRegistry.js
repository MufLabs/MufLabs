export class CommandRegistry {
    commands = new Set([
        "Analyze",
        "Implement",
        "Document"
    ]);
    register(command) {
        this.commands.add(command);
    }
    unregister(command) {
        return this.commands.delete(command);
    }
    exists(command) {
        return this.commands.has(command);
    }
    all() {
        return [...this.commands];
    }
}
//# sourceMappingURL=CommandRegistry.js.map