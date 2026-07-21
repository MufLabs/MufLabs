import { EventBus } from "../events/EventBus";
import { MemoryStore } from "../memory/MemoryStore";
import { Conversation } from "../session/Conversation";
import { WorkflowState } from "../workflow/WorkflowState";
import { CommandRegistry } from "../commands/CommandRegistry";
import { ServiceContainer } from "../services/ServiceContainer";
export declare class KernelContext {
    /**
     * Unique session identifier.
     */
    readonly sessionId: `${string}-${string}-${string}-${string}-${string}`;
    /**
     * Internal event bus.
     */
    readonly events: EventBus;
    /**
     * Runtime memory.
     */
    readonly memory: MemoryStore;
    /**
     * Conversation history.
     */
    readonly conversation: Conversation;
    /**
     * Current workflow state.
     */
    readonly workflow: WorkflowState;
    /**
     * Registered commands.
     */
    readonly commands: CommandRegistry;
    /**
     * Dependency injection container.
     */
    readonly services: ServiceContainer;
    /**
     * Shared runtime variables.
     */
    readonly variables: Map<string, unknown>;
    /**
     * Arbitrary runtime metadata.
     */
    readonly metadata: Map<string, unknown>;
    /**
     * Active agent.
     */
    private currentAgent?;
    /**
     * Active project.
     */
    private currentProject?;
    /**
     * Sets the active agent.
     */
    setActiveAgent(name: string): void;
    /**
     * Gets the active agent.
     */
    getActiveAgent(): string | undefined;
    /**
     * Sets the active project.
     */
    setProject(name: string): void;
    /**
     * Gets the active project.
     */
    getProject(): string | undefined;
    /**
     * Stores a runtime variable.
     */
    setVariable(key: string, value: unknown): void;
    /**
     * Reads a runtime variable.
     */
    getVariable<T = unknown>(key: string): T | undefined;
    /**
     * Stores runtime metadata.
     */
    setMetadata(key: string, value: unknown): void;
    /**
     * Reads runtime metadata.
     */
    getMetadata<T = unknown>(key: string): T | undefined;
    /**
     * Clears transient runtime state.
     */
    clear(): void;
}
//# sourceMappingURL=KernelContext.d.ts.map