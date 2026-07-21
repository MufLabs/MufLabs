export class AnalyzeWorkflow {
    async execute(context, request) {
        context.workflow.active =
            "Analyze";
        context.workflow.startedAt =
            new Date();
        delete context.workflow.completedAt;
        context.events.emit("workflow.analyze.started", request);
        return {
            success: true,
            output: request.prompt
        };
    }
}
//# sourceMappingURL=AnalyzeWorkflow.js.map