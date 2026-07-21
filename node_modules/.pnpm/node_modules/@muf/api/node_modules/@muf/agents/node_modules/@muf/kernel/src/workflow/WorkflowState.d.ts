import { WorkflowCommand } from "../types/KernelTypes";
export declare class Workflow {
    private active;
    start(command: WorkflowCommand): void;
    stop(): void;
    current(): WorkflowCommand | null;
}
//# sourceMappingURL=WorkflowState.d.ts.map