import { randomUUID } from "crypto";
import { EventBus } from "../events/EventBus";
import { MemoryStore } from "../memory/MemoryStore";
import { Conversation } from "../session/Conversation";
import { Workflow } from "../workflow/WorkflowState";
import { CommandRegistry } from "../commands/CommandRegistry";
import { ServiceContainer } from "../services/ServiceContainer";
export class KernelContext {
    /**
     * Identificador único de la sesión.
     */
    sessionId = randomUUID();
    /**
     * Bus interno de eventos.
     */
    events = new EventBus();
    /**
     * Memoria temporal del Kernel.
     */
    memory = new MemoryStore();
    /**
     * Historial de conversación.
     */
    conversation = new Conversation();
    /**
     * Estado actual del workflow.
     */
    workflow = new Workflow();
    /**
     * Registro de comandos soportados.
     */
    commands = new CommandRegistry();
    services = new ServiceContainer();
    /**
     * Agente actualmente activo.
     */
    currentAgent;
    /**
     * Nombre del proyecto cargado.
     */
    currentProject;
    /**
     * Activa un agente.
     */
    setActiveAgent(name) {
        this.currentAgent = name;
    }
    /**
     * Obtiene el agente activo.
     */
    getActiveAgent() {
        return this.currentAgent;
    }
    /**
     * Asigna el proyecto activo.
     */
    setProject(name) {
        this.currentProject = name;
    }
    /**
     * Obtiene el proyecto activo.
     */
    getProject() {
        return this.currentProject;
    }
}
//# sourceMappingURL=KernelContext.js.map