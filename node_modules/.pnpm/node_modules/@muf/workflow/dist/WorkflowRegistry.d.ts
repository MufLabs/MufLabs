import { WorkflowCommand } from "./types/WorkflowTypes";
import { IWorkflow } from "./interfaces/IWorkflow";
export declare class WorkflowRegistry {
    private readonly registry;
    register(command: WorkflowCommand, workflow: IWorkflow): void;
    resolve(command: WorkflowCommand): IWorkflow | undefined;
}
//# sourceMappingURL=WorkflowRegistry.d.ts.map