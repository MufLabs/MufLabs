import { KernelContext } from "@muf/kernel";
import { IWorkflow } from "../interfaces/IWorkflow";
import { WorkflowRequest, WorkflowResult } from "../types/WorkflowTypes";
export declare class DocumentWorkflow implements IWorkflow {
    execute(context: KernelContext, request: WorkflowRequest): Promise<WorkflowResult>;
}
//# sourceMappingURL=DocumentWorkflow.d.ts.map