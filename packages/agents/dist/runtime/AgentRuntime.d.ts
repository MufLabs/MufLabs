import { AgentContext } from "../core/AgentContext";
import { AgentDefinition } from "../core/AgentDefinition";
import { AgentResult } from "../core/AgentResult";
import { IAgent } from "../core/IAgent";
import { AgentRegistry } from "../registry/AgentRegistry";
import { AgentRequest } from "../types";
import { RuntimeOptions } from "./RuntimeOptions";
import { RuntimeResult } from "./RuntimeResults";
/**
 * Central execution runtime.
 *
 * Executes already-instantiated runtime agents.
 */
export declare class AgentRuntime {
    private readonly registry;
    private readonly options;
    private readonly selector;
    constructor(registry: AgentRegistry, options?: RuntimeOptions);
    /**
     * Executes a workflow request.
     */
    execute(context: AgentContext, request: AgentRequest): Promise<RuntimeResult>;
    /**
     * Executes a PromptAgent.
     *
     * This method is invoked by PromptAgent created
     * through AgentFactory.
     */
    executeDefinition(definition: AgentDefinition, context: AgentContext, input: string): Promise<AgentResult>;
    /**
     * Registers runtime agents.
     */
    register(agent: IAgent): void;
    /**
     * Registers multiple runtime agents.
     */
    registerMany(agents: readonly IAgent[]): void;
    /**
     * Returns every registered runtime agent.
     */
    getAgents(): IAgent[];
}
//# sourceMappingURL=AgentRuntime.d.ts.map