import { PromptBuilder } from "./PromptBuilder";
export class ExecutionPipeline {
    providerManager;
    promptBuilder = new PromptBuilder();
    constructor(providerManager) {
        this.providerManager = providerManager;
    }
    async execute(context) {
        const providerRequest = this.promptBuilder.build(context.request);
        const providerResponse = await this.providerManager.execute(providerRequest);
        return {
            response: {
                success: providerResponse.success,
                content: providerResponse.content,
                provider: providerResponse.provider,
                model: providerResponse.model,
                promptTokens: providerResponse.promptTokens,
                completionTokens: providerResponse.completionTokens,
                totalTokens: providerResponse.totalTokens,
                durationMs: providerResponse.durationMs,
                metadata: providerResponse.metadata
            }
        };
    }
}
//# sourceMappingURL=ExecutionPipeline.js.map