import { randomUUID } from "crypto";
import { EventBus } from "../events/EventBus";
import { MemoryStore } from "../memory/MemoryStore";
import { Conversation } from "../session/Conversation";
import { CommandRegistry } from "../commands/CommandRegistry";
import { ServiceContainer } from "../services/ServiceContainer";
export class KernelContext {
    /**
     * Unique session identifier.
     */
    sessionId = randomUUID();
    /**
     * Internal event bus.
     */
    events = new EventBus();
    /**
     * Runtime memory.
     */
    memory = new MemoryStore();
    /**
     * Conversation history.
     */
    conversation = new Conversation();
    /**
     * Current workflow state.
     */
    workflow = {
        active: null
    };
    /**
     * Registered commands.
     */
    commands = new CommandRegistry();
    /**
     * Dependency injection container.
     */
    services = new ServiceContainer();
    /**
     * Shared runtime variables.
     */
    variables = new Map();
    /**
     * Arbitrary runtime metadata.
     */
    metadata = new Map();
    /**
     * Active agent.
     */
    currentAgent;
    /**
     * Active project.
     */
    currentProject;
    /**
     * Sets the active agent.
     */
    setActiveAgent(name) {
        this.currentAgent = name;
    }
    /**
     * Gets the active agent.
     */
    getActiveAgent() {
        return this.currentAgent;
    }
    /**
     * Sets the active project.
     */
    setProject(name) {
        this.currentProject = name;
    }
    /**
     * Gets the active project.
     */
    getProject() {
        return this.currentProject;
    }
    /**
     * Stores a runtime variable.
     */
    setVariable(key, value) {
        this.variables.set(key, value);
    }
    /**
     * Reads a runtime variable.
     */
    getVariable(key) {
        return this.variables.get(key);
    }
    /**
     * Stores runtime metadata.
     */
    setMetadata(key, value) {
        this.metadata.set(key, value);
    }
    /**
     * Reads runtime metadata.
     */
    getMetadata(key) {
        return this.metadata.get(key);
    }
    /**
     * Clears transient runtime state.
     */
    clear() {
        this.variables.clear();
        this.metadata.clear();
        this.workflow.active = null;
        delete this.workflow.startedAt;
        delete this.workflow.completedAt;
    }
}
//# sourceMappingURL=KernelContext.js.map