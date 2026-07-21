import { AgentSelector } from "../registry/AgentSelector";
/**
 * Central execution runtime.
 *
 * Executes already-instantiated runtime agents.
 */
export class AgentRuntime {
    registry;
    options;
    selector;
    constructor(registry, options = {}) {
        this.registry = registry;
        this.options = options;
        this.selector = new AgentSelector(registry);
    }
    /**
     * Executes a workflow request.
     */
    async execute(context, request) {
        const capability = request.command;
        const agents = this.selector.byCapability(capability);
        const results = [];
        const errors = [];
        for (const agent of agents) {
            try {
                const result = await agent.execute(context, request.prompt);
                results.push(result);
            }
            catch (error) {
                errors.push(error instanceof Error
                    ? error
                    : new Error(String(error)));
            }
        }
        return {
            success: errors.length === 0,
            results,
            errors: errors.map(error => error.message)
        };
    }
    /**
     * Executes a PromptAgent.
     *
     * This method is invoked by PromptAgent created
     * through AgentFactory.
     */
    async executeDefinition(definition, context, input) {
        /**
         * Provider integration will be implemented in
         * the next Runtime block.
         */
        return {
            success: true,
            output: input,
            model: definition.model,
            provider: definition.provider,
            metadata: {
                agentId: definition.id,
                simulated: true
            }
        };
    }
    /**
     * Registers runtime agents.
     */
    register(agent) {
        this.registry.register(agent);
    }
    /**
     * Registers multiple runtime agents.
     */
    registerMany(agents) {
        this.registry.registerMany([...agents]);
    }
    /**
     * Returns every registered runtime agent.
     */
    getAgents() {
        return this.registry.getAll();
    }
}
//# sourceMappingURL=AgentRuntime.js.map