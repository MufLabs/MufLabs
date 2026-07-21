import { AgentDefinition } from "./AgentDefinition";
import { IAgent } from "./IAgent";
/**
 * Factory responsible for converting an AgentDefinition
 * into an executable runtime agent.
 */
export declare class AgentFactory {
    /**
     * Creates a runtime agent from a definition.
     */
    static create(definition: AgentDefinition): IAgent;
    /**
     * Creates multiple runtime agents.
     */
    static createMany(definitions: readonly AgentDefinition[]): IAgent[];
}
//# sourceMappingURL=AgentFactory.d.ts.map