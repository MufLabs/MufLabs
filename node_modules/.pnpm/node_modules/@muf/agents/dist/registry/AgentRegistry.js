/**
 * Central runtime registry.
 *
 * Stores executable agents, not markdown definitions.
 */
export class AgentRegistry {
    agents = new Map();
    /**
     * Registers an executable agent.
     */
    register(agent) {
        this.agents.set(agent.id, agent);
    }
    /**
     * Registers multiple agents.
     */
    registerMany(agents) {
        for (const agent of agents) {
            this.register(agent);
        }
    }
    /**
     * Removes an agent.
     */
    unregister(id) {
        return this.agents.delete(id);
    }
    /**
     * Returns an agent by id.
     */
    get(id) {
        return this.agents.get(id);
    }
    /**
     * Returns every registered agent.
     */
    getAll() {
        return [...this.agents.values()];
    }
    /**
     * Indicates whether an agent exists.
     */
    exists(id) {
        return this.agents.has(id);
    }
    /**
     * Finds an agent by name.
     */
    findByName(name) {
        const normalized = name.trim().toLowerCase();
        return this.getAll().find(agent => agent.name.toLowerCase() === normalized);
    }
    /**
     * Returns all agents supporting a capability.
     */
    findByCapability(capability) {
        return this.getAll().filter(agent => agent.supports(capability));
    }
    /**
     * Removes every registered agent.
     */
    clear() {
        this.agents.clear();
    }
    /**
     * Number of registered agents.
     */
    get size() {
        return this.agents.size;
    }
}
//# sourceMappingURL=AgentRegistry.js.map