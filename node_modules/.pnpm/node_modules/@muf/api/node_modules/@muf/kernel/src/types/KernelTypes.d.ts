export type WorkflowCommand = "Analyze" | "Implement" | "Document";
export interface ConversationMessage {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
    timestamp: Date;
}
export interface WorkflowState {
    active: WorkflowCommand | null;
    startedAt?: Date;
}
export interface KernelState {
    sessionId: string;
    project?: string;
    activeAgent?: string;
    conversation: ConversationMessage[];
    workflow: WorkflowState;
    memory: Map<string, unknown>;
}
//# sourceMappingURL=KernelTypes.d.ts.map