import { AgentFactory } from "../core";
import { MarkdownAgentLoader } from "../loaders";
import { AgentRegistry } from "../registry";
import { AgentRuntime } from "../runtime";
import { ManagerState } from "./ManagerState";
export class AgentManager {
    options;
    loader = new MarkdownAgentLoader();
    registry = new AgentRegistry();
    runtime;
    state = ManagerState.Idle;
    constructor(options = {}) {
        this.options = options;
        this.runtime = new AgentRuntime(this.registry, this.options.runtime);
    }
    async initialize() {
        if (this.state !== ManagerState.Idle) {
            return;
        }
        this.state = ManagerState.Initializing;
        const definitions = await this.loader.load();
        const agents = AgentFactory.createMany(definitions);
        this.registry.registerMany(agents);
        this.state = ManagerState.Ready;
    }
    async execute(context, request) {
        if (this.state === ManagerState.Idle) {
            await this.initialize();
        }
        this.state = ManagerState.Running;
        try {
            return await this.runtime.execute(context, request);
        }
        finally {
            this.state = ManagerState.Ready;
        }
    }
    getState() {
        return this.state;
    }
    getRegistry() {
        return this.registry;
    }
}
//# sourceMappingURL=AgentManager.js.map