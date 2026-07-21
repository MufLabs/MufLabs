import { KernelContext } from "@muf/kernel";
import { IWorkflow } from "../interfaces/IWorkflow";
import { WorkflowRequest, WorkflowResult } from "../types/WorkflowTypes";
export declare class AnalyzeWorkflow implements IWorkflow {
    execute(context: KernelContext, request: WorkflowRequest): Promise<WorkflowResult>;
}
//# sourceMappingURL=AnalyzeWorkflow.d.ts.map