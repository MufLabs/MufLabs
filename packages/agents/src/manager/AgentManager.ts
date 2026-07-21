import { AgentContext } from "../core";
import { AgentFactory } from "../core";
import { AgentRequest } from "../types";

import { MarkdownAgentLoader } from "../loaders";
import { AgentRegistry } from "../registry";
import { AgentRuntime } from "../runtime";
import { RuntimeResult } from "../runtime";

import { IAgentManager } from "./IAgentManager";
import { ManagerOptions } from "./ManagerOptions";
import { ManagerState } from "./ManagerState";

export class AgentManager implements IAgentManager {

    private readonly loader = new MarkdownAgentLoader();

    private readonly registry = new AgentRegistry();

    private readonly runtime: AgentRuntime;

    private state = ManagerState.Idle;

    constructor(
        private readonly options: ManagerOptions = {}
    ) {

        this.runtime = new AgentRuntime(
            this.registry,
            this.options.runtime
        );

    }

    public async initialize(): Promise<void> {

        if (this.state !== ManagerState.Idle) {
            return;
        }

        this.state = ManagerState.Initializing;

        const definitions = await this.loader.load();

        const agents = AgentFactory.createMany(definitions);

        this.registry.registerMany(agents);

        this.state = ManagerState.Ready;

    }

    public async execute(
        context: AgentContext,
        request: AgentRequest
    ): Promise<RuntimeResult> {

        if (this.state === ManagerState.Idle) {
            await this.initialize();
        }

        this.state = ManagerState.Running;

        try {

            return await this.runtime.execute(
                context,
                request
            );

        } finally {

            this.state = ManagerState.Ready;

        }

    }

    public getState(): ManagerState {

        return this.state;

    }

    public getRegistry(): AgentRegistry {

        return this.registry;

    }

}