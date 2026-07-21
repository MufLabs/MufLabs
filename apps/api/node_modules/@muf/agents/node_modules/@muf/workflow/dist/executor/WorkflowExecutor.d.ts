import { KernelContext } from "@muf/kernel";
import { WorkflowRequest, WorkflowResult } from "../types/WorkflowTypes";
import { WorkflowRegistry } from "../registry/WorkflowRegistry";
export declare class WorkflowExecutor {
    private readonly registry;
    constructor(registry: WorkflowRegistry);
    execute(context: KernelContext, request: WorkflowRequest): Promise<WorkflowResult>;
}
//# sourceMappingURL=WorkflowExecutor.d.ts.map