export const NvidiaProviderInfo = {
    id: "nvidia",
    name: "NVIDIA NIM",
    vendor: "NVIDIA",
    version: "1.0.0",
    baseUrl: "https://integrate.api.nvidia.com/v1",
    models: [],
    capabilities: {
        chat: true,
        vision: true,
        audio: true,
        embeddings: true,
        tools: true,
        streaming: true,
        jsonMode: true,
        functionCalling: true,
        maxContextWindow: 1000000
    },
    requiresAuthentication: true,
    defaultModel: "openai/gpt-oss-120b"
};
//# sourceMappingURL=NvidiaProviderInfo.js.map