import {
    WorkflowRequest,
    WorkflowResult
} from "../types/WorkflowTypes";

import { KernelContext } from "@muf/kernel";

export interface IWorkflow {

    execute(
        context: KernelContext,
        request: WorkflowRequest
    ): Promise<WorkflowResult>;

}