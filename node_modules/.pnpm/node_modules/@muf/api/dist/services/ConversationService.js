import { Kernel } from "@muf/kernel";
import { WorkflowEngine } from "@muf/workflow";
import { AgentManager } from "@muf/agents";
export class ConversationService {
    kernel = new Kernel();
    workflow = new WorkflowEngine();
    manager = new AgentManager();
    constructor() {
        this.kernel.context.services.register("AgentManager", this.manager);
    }
    async execute(prompt) {
        this.kernel.boot();
        await this.manager.initialize();
        return this.workflow.execute(this.kernel.context, {
            command: "Analyze",
            prompt
        });
    }
}
//# sourceMappingURL=ConversationService.js.map