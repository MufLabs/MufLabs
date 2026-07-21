import { Kernel } from "@muf/kernel";
import { WorkflowEngine } from "@muf/workflow";
import { AgentManager } from "@muf/agents";

async function bootstrap() {

    const kernel = new Kernel();

    const workflow = new WorkflowEngine();

    const agents = new AgentManager();

    kernel.context.services.register(

        "AgentManager",

        agents

    );

    kernel.context.services.register(

        "WorkflowEngine",

        workflow

    );

    kernel.boot();

    await agents.initialize();

    const result =

        await workflow.execute(

            kernel.context,

            {

                command: "Analyze",

                prompt: "AIOS bootstrap test."

            }

        );

    console.log();

    console.log("========== AIOS ==========");

    console.log(result.output);

    console.log("==========================");

}

bootstrap().catch(console.error);