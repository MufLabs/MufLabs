import { KernelContext } from "./context/KernelContext";
export class Kernel {
    /**
     * Main kernel context.
     */
    context = new KernelContext();
    booted = false;
    /**
     * Starts the Kernel.
     */
    boot() {
        if (this.booted) {
            return;
        }
        this.booted = true;
        // Ensure required services are available.
        this.context.services.has("AgentManager");
        this.context.events.emit("kernel.started", {
            session: this.context.sessionId,
            timestamp: new Date()
        });
    }
    /**
     * Stops the Kernel.
     */
    shutdown() {
        if (!this.booted) {
            return;
        }
        this.booted = false;
        this.context.events.emit("kernel.stopped", {
            session: this.context.sessionId,
            timestamp: new Date()
        });
    }
    /**
     * Indicates whether the Kernel is running.
     */
    isRunning() {
        return this.booted;
    }
}
//# sourceMappingURL=Kernel.js.map