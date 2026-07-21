export class CommandRegistry {
    commands = new Set([
        "Analyze",
        "Implement",
        "Document"
    ]);
    exists(command) {
        return this.commands.has(command);
    }
    all() {
        return [...this.commands];
    }
}
//# sourceMappingURL=CommandRegistry.js.map