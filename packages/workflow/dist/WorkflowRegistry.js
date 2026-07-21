export class WorkflowRegistry {
    registry = new Map();
    register(command, workflow) {
        this.registry.set(command, workflow);
    }
    resolve(command) {
        return this.registry.get(command);
    }
}
//# sourceMappingURL=WorkflowRegistry.js.map