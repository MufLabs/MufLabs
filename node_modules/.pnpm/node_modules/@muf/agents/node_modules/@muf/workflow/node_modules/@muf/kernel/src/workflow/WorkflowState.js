export class Workflow {
    active = null;
    start(command) {
        this.active = command;
    }
    stop() {
        this.active = null;
    }
    current() {
        return this.active;
    }
}
//# sourceMappingURL=WorkflowState.js.map