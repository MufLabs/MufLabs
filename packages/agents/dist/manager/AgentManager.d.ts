import { AgentContext } from "../core";
import { AgentRequest } from "../types";
import { AgentRegistry } from "../registry";
import { RuntimeResult } from "../runtime";
import { IAgentManager } from "./IAgentManager";
import { ManagerOptions } from "./ManagerOptions";
import { ManagerState } from "./ManagerState";
export declare class AgentManager implements IAgentManager {
    private readonly options;
    private readonly loader;
    private readonly registry;
    private readonly runtime;
    private state;
    constructor(options?: ManagerOptions);
    initialize(): Promise<void>;
    execute(context: AgentContext, request: AgentRequest): Promise<RuntimeResult>;
    getState(): ManagerState;
    getRegistry(): AgentRegistry;
}
//# sourceMappingURL=AgentManager.d.ts.map