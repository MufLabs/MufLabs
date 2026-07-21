import { EventBus } from "../events/EventBus";
import { MemoryStore } from "../memory/MemoryStore";
import { Conversation } from "../session/Conversation";
import { Workflow } from "../workflow/WorkflowState";
import { CommandRegistry } from "../commands/CommandRegistry";
import { ServiceContainer } from "../services/ServiceContainer";
export declare class KernelContext {
    /**
     * Identificador único de la sesión.
     */
    readonly sessionId: `${string}-${string}-${string}-${string}-${string}`;
    /**
     * Bus interno de eventos.
     */
    readonly events: EventBus;
    /**
     * Memoria temporal del Kernel.
     */
    readonly memory: MemoryStore;
    /**
     * Historial de conversación.
     */
    readonly conversation: Conversation;
    /**
     * Estado actual del workflow.
     */
    readonly workflow: Workflow;
    /**
     * Registro de comandos soportados.
     */
    readonly commands: CommandRegistry;
    readonly services: ServiceContainer;
    /**
     * Agente actualmente activo.
     */
    private currentAgent?;
    /**
     * Nombre del proyecto cargado.
     */
    private currentProject?;
    /**
     * Activa un agente.
     */
    setActiveAgent(name: string): void;
    /**
     * Obtiene el agente activo.
     */
    getActiveAgent(): string | undefined;
    /**
     * Asigna el proyecto activo.
     */
    setProject(name: string): void;
    /**
     * Obtiene el proyecto activo.
     */
    getProject(): string | undefined;
}
//# sourceMappingURL=KernelContext.d.ts.map