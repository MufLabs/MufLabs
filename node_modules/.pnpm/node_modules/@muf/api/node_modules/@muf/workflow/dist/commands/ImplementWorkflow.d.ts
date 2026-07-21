import { KernelContext } from "@muf/kernel";
import { IWorkflow } from "../interfaces/IWorkflow";
import { WorkflowRequest, WorkflowResult } from "../types/WorkflowTypes";
export declare class ImplementWorkflow implements IWorkflow {
    execute(context: KernelContext, request: WorkflowRequest): Promise<WorkflowResult>;
}
//# sourceMappingURL=ImplementWorkflow.d.ts.map