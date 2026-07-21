export const LMStudioProviderInfo = {
    id: "lmstudio",
    name: "LM Studio",
    vendor: "LM Studio",
    version: "1.0.0",
    baseUrl: "http://localhost:1234/v1",
    models: [],
    capabilities: {
        chat: true,
        vision: false,
        audio: false,
        embeddings: true,
        tools: true,
        streaming: true,
        jsonMode: true,
        functionCalling: true,
        maxContextWindow: 131072
    },
    requiresAuthentication: false,
    defaultModel: "local-model"
};
//# sourceMappingURL=LMStudioProviderInfo.js.map