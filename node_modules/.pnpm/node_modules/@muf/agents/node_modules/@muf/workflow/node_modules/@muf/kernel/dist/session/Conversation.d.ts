import { ConversationMessage } from "./ConversationMessage";
export declare class Conversation {
    private readonly history;
    add(message: ConversationMessage): void;
    all(): ConversationMessage[];
    last(): ConversationMessage | undefined;
    size(): number;
    clear(): void;
}
//# sourceMappingURL=Conversation.d.ts.map