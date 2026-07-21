import { IAgent } from "../core/IAgent";
import { IAgentRegistry } from "./IAgentRegistry";
/**
 * Central runtime registry.
 *
 * Stores executable agents, not markdown definitions.
 */
export declare class AgentRegistry implements IAgentRegistry {
    private readonly agents;
    /**
     * Registers an executable agent.
     */
    register(agent: IAgent): void;
    /**
     * Registers multiple agents.
     */
    registerMany(agents: readonly IAgent[]): void;
    /**
     * Removes an agent.
     */
    unregister(id: string): boolean;
    /**
     * Returns an agent by id.
     */
    get(id: string): IAgent | undefined;
    /**
     * Returns every registered agent.
     */
    getAll(): IAgent[];
    /**
     * Indicates whether an agent exists.
     */
    exists(id: string): boolean;
    /**
     * Finds an agent by name.
     */
    findByName(name: string): IAgent | undefined;
    /**
     * Returns all agents supporting a capability.
     */
    findByCapability(capability: string): IAgent[];
    /**
     * Removes every registered agent.
     */
    clear(): void;
    /**
     * Number of registered agents.
     */
    get size(): number;
}
//# sourceMappingURL=AgentRegistry.d.ts.map