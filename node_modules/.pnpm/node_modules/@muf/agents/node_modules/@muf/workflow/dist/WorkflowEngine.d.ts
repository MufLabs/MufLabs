import { KernelContext } from "@muf/kernel";
import { WorkflowRequest, WorkflowResult } from "./types/WorkflowTypes";
export declare class WorkflowEngine {
    /**
     * Ejecuta un workflow.
     */
    execute(context: KernelContext, request: WorkflowRequest): Promise<WorkflowResult>;
}
//# sourceMappingURL=WorkflowEngine.d.ts.map