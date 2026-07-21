import { WorkflowCommand } from "../workflow/WorkflowCommand";
export declare class CommandRegistry {
    private readonly commands;
    register(command: WorkflowCommand): void;
    unregister(command: WorkflowCommand): boolean;
    exists(command: WorkflowCommand): boolean;
    all(): WorkflowCommand[];
}
//# sourceMappingURL=CommandRegistry.d.ts.map