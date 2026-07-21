export class WorkflowExecutor {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    async execute(context, request) {
        const workflow = this.registry.resolve(request.command);
        if (!workflow)
            throw new Error(`Workflow ${request.command} not found`);
        return workflow.execute(context, request);
    }
}
//# sourceMappingURL=WorkflowExecutor.js.map