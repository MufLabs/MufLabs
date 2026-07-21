export const AnthropicProviderInfo = {
    id: "anthropic",
    name: "Anthropic",
    vendor: "Anthropic",
    version: "1.0.0",
    baseUrl: "https://api.anthropic.com",
    models: [],
    capabilities: {
        chat: true,
        vision: true,
        audio: false,
        embeddings: false,
        tools: true,
        streaming: true,
        jsonMode: true,
        functionCalling: true,
        maxContextWindow: 200000
    },
    requiresAuthentication: true,
    defaultModel: "claude-sonnet-4"
};
//# sourceMappingURL=AnthropicProviderInfo.js.map