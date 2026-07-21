/**
 * Responsible for selecting the most appropriate runtime agent.
 *
 * This class never loads agents.
 * It only queries the AgentRegistry.
 */
export class AgentSelector {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    /**
     * Returns an agent by its identifier.
     */
    byId(id) {
        return this.registry.get(id);
    }
    /**
     * Returns the first agent matching the supplied name.
     */
    byName(name) {
        return this.registry.findByName(name);
    }
    /**
     * Returns every agent supporting the requested capability.
     */
    byCapability(capability) {
        return this.registry.findByCapability(capability);
    }
    /**
     * Selects the highest priority agent supporting
     * the requested capability.
     */
    select(capability) {
        const agents = this.byCapability(capability);
        if (agents.length === 0) {
            return undefined;
        }
        return agents.sort((a, b) => b.definition.priority - a.definition.priority)[0];
    }
    /**
     * Returns all registered agents.
     */
    all() {
        return this.registry.getAll();
    }
}
//# sourceMappingURL=AgentSelector.js.map