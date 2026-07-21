export class DocumentWorkflow {
    async execute(context, request) {
        context.workflow.active =
            "Document";
        context.workflow.startedAt =
            new Date();
        delete context.workflow.completedAt;
        context.events.emit("workflow.document.started", request);
        return {
            success: true,
            output: request.prompt
        };
    }
}
//# sourceMappingURL=DocumentWorkflow.js.map