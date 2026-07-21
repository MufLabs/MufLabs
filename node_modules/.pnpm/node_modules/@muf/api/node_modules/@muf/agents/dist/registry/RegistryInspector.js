export class RegistryInspector {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    inspect() {
        const agents = this.registry.getAll();
        return {
            totalAgents: agents.length,
            capabilities: [
                ...new Set(agents.flatMap(agent => agent.definition.capabilities.map((capability) => capability.name)))
            ],
            agentIds: agents.map(agent => agent.id),
            agents: agents.map(agent => agent.definition)
        };
    }
}
//# sourceMappingURL=RegistryInspector.js.map