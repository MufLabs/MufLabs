import { IAgent } from "../core/IAgent";
import { AgentRegistry } from "./AgentRegistry";
/**
 * Responsible for selecting the most appropriate runtime agent.
 *
 * This class never loads agents.
 * It only queries the AgentRegistry.
 */
export declare class AgentSelector {
    private readonly registry;
    constructor(registry: AgentRegistry);
    /**
     * Returns an agent by its identifier.
     */
    byId(id: string): IAgent | undefined;
    /**
     * Returns the first agent matching the supplied name.
     */
    byName(name: string): IAgent | undefined;
    /**
     * Returns every agent supporting the requested capability.
     */
    byCapability(capability: string): IAgent[];
    /**
     * Selects the highest priority agent supporting
     * the requested capability.
     */
    select(capability: string): IAgent | undefined;
    /**
     * Returns all registered agents.
     */
    all(): IAgent[];
}
//# sourceMappingURL=AgentSelector.d.ts.map