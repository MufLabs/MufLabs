import { KernelContext } from "./context/KernelContext";
export declare class Kernel {
    /**
     * Main kernel context.
     */
    readonly context: KernelContext;
    private booted;
    /**
     * Starts the Kernel.
     */
    boot(): void;
    /**
     * Stops the Kernel.
     */
    shutdown(): void;
    /**
     * Indicates whether the Kernel is running.
     */
    isRunning(): boolean;
}
//# sourceMappingURL=Kernel.d.ts.map