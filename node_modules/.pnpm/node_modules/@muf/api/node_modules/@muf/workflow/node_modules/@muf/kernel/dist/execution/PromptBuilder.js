export class PromptBuilder {
    /**
     * Construye una ProviderRequest a partir de una KernelRequest.
     */
    build(request) {
        return {
            prompt: request.prompt,
            systemPrompt: request.systemPrompt,
            model: request.model,
            temperature: request.temperature,
            maxTokens: request.maxTokens
        };
    }
}
//# sourceMappingURL=PromptBuilder.js.map