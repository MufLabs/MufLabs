import { KernelContext } from "./context/KernelContext";

export class Kernel {

    /**
     * Main kernel context.
     */
    public readonly context = new KernelContext();

    private booted = false;

    /**
     * Starts the Kernel.
     */
    public boot(): void {

        if (this.booted) {
            return;
        }

        this.booted = true;

        // Ensure required services are available.
        this.context.services.has("AgentManager");

        this.context.events.emit(
            "kernel.started",
            {
                session: this.context.sessionId,
                timestamp: new Date()
            }
        );

    }

    /**
     * Stops the Kernel.
     */
    public shutdown(): void {

        if (!this.booted) {
            return;
        }

        this.booted = false;

        this.context.events.emit(
            "kernel.stopped",
            {
                session: this.context.sessionId,
                timestamp: new Date()
            }
        );

    }

    /**
     * Indicates whether the Kernel is running.
     */
    public isRunning(): boolean {

        return this.booted;

    }

}