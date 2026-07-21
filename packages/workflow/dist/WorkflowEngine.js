export class WorkflowEngine {
    /**
     * Ejecuta un workflow.
     */
    async execute(context, request) {
        /**
         * Obtiene el AgentManager
         * desde el contenedor del Kernel.
         */
        const agentManager = context.services.resolve("AgentManager");
        /**
         * Busca el agente
         * capaz de ejecutar
         * el comando solicitado.
         */
        const agent = agentManager.resolveByCommand(request.command);
        if (!agent) {
            throw new Error(`No agent found for command '${request.command}'.`);
        }
        /**
         * Actualiza el estado
         * del Kernel.
         */
        context.workflow.active =
            request.command;
        context.workflow.startedAt =
            new Date();
        delete context.workflow.completedAt;
        context.setActiveAgent(agent.name);
        /**
         * Evento de inicio.
         */
        context.events.emit("workflow.started", request);
        /**
         * Ejecuta el agente.
         */
        const result = await agent.execute({
            kernel: context
        }, {
            command: request.command,
            prompt: request.prompt
        });
        /**
         * Finaliza el workflow.
         */
        context.workflow.completedAt =
            new Date();
        context.workflow.active =
            null;
        /**
         * Evento de finalización.
         */
        context.events.emit("workflow.finished", result);
        return {
            success: result.success,
            output: result.output
        };
    }
}
//# sourceMappingURL=WorkflowEngine.js.map