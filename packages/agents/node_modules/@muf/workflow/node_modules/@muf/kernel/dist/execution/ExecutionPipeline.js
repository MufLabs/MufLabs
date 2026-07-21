export class ExecutionPipeline {
    providerManager;
    constructor(providerManager) {
        this.providerManager = providerManager;
    }
    async execute(context) {
        const providerResponse = await this.providerManager.execute({
            prompt: context.request.prompt,
            systemPrompt: context.request.systemPrompt,
            model: context.request.model,
            temperature: context.request.temperature,
            maxTokens: context.request.maxTokens
        });
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