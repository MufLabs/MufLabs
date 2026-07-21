export class ImplementWorkflow {
    async execute(context, request) {
        context.workflow.active =
            "Implement";
        context.workflow.startedAt =
            new Date();
        delete context.workflow.completedAt;
        context.events.emit("workflow.implement.started", request);
        return {
            success: true,
            output: request.prompt
        };
    }
}
//# sourceMappingURL=ImplementWorkflow.js.map