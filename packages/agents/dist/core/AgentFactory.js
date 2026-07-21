import { Agent } from "./Agent";
/**
 * Default runtime implementation used for agents loaded
 * from Markdown (.agent.md) definitions.
 *
 * The runtime injects the actual LLM execution pipeline.
 */
class PromptAgent extends Agent {
    constructor(definition) {
        super(definition);
    }
    async execute(context, input) {
        const runtime = context.runtime;
        if (!runtime) {
            throw new Error(`No runtime available for agent '${this.name}'.`);
        }
        return runtime.execute(this.definition, context, input);
    }
}
/**
 * Factory responsible for converting an AgentDefinition
 * into an executable runtime agent.
 */
export class AgentFactory {
    /**
     * Creates a runtime agent from a definition.
     */
    static create(definition) {
        return new PromptAgent(definition);
    }
    /**
     * Creates multiple runtime agents.
     */
    static createMany(definitions) {
        return definitions.map(definition => AgentFactory.create(definition));
    }
}
//# sourceMappingURL=AgentFactory.js.map