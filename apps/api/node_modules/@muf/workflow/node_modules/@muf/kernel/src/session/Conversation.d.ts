import { ConversationMessage } from "../types/KernelTypes";
export declare class Conversation {
    private readonly history;
    add(message: ConversationMessage): void;
    all(): ConversationMessage[];
    clear(): void;
}
//# sourceMappingURL=Conversation.d.ts.map