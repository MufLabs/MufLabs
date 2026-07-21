import { BaseProvider } from "../../BaseProvider";
import { OpenAICompatibleClient } from "./OpenAICompatibleClient";
import { OpenAICompatibleErrorMapper } from "./OpenAICompatibleErrorMapper";
import { OpenAICompatibleMapper } from "./OpenAICompatibleMapper";
import { OpenAICompatibleModels } from "./OpenAICompatibleModels";
import { OpenAICompatibleProviderInfo } from "./OpenAICompatibleProviderInfo";
export class OpenAICompatibleProvider extends BaseProvider {
    configuration;
    id = OpenAICompatibleProviderInfo.id;
    name = OpenAICompatibleProviderInfo.name;
    client;
    constructor(configuration) {
        super();
        this.configuration = configuration;
        this.client =
            new OpenAICompatibleClient(configuration);
    }
    buildInfo() {
        return OpenAICompatibleProviderInfo;
    }
    async initialize() {
        if (this.info.models.length > 0) {
            return;
        }
        this.info.models =
            await OpenAICompatibleModels.discover(this.configuration);
    }
    async execute(request) {
        try {
            const model = this.resolveModel(request);
            const payload = OpenAICompatibleMapper
                .toChatCompletionsRequest(request, model);
            const response = await this.client.chatCompletions(payload);
            const data = response.data;
            const choice = data.choices?.[0];
            const usage = data.usage;
            return {
                success: true,
                provider: this.id,
                providerId: this.id,
                model,
                content: choice?.message?.content ??
                    "",
                finishReason: choice?.finish_reason,
                usage: usage
                    ? {
                        promptTokens: usage.prompt_tokens,
                        completionTokens: usage.completion_tokens,
                        totalTokens: usage.total_tokens
                    }
                    : undefined,
                promptTokens: usage?.prompt_tokens,
                completionTokens: usage?.completion_tokens,
                totalTokens: usage?.total_tokens,
                toolCalls: choice?.message?.tool_calls,
                metadata: data
            };
        }
        catch (error) {
            throw OpenAICompatibleErrorMapper.map(error, this.name);
        }
    }
    async embeddings(input, model) {
        const payload = OpenAICompatibleMapper
            .toEmbeddingsRequest(input, model ??
            this.configuration
                .defaultModel);
        return this.client.embeddings(payload);
    }
    async moderations(input, model) {
        const payload = OpenAICompatibleMapper
            .toModerationRequest(input, model);
        return this.client.moderations(payload);
    }
    async images(prompt, model, size, quality, style, count = 1) {
        const payload = OpenAICompatibleMapper
            .toImageGenerationRequest(prompt, model ??
            this.configuration
                .defaultModel, size, quality, style, count);
        return this.client
            .imageGenerations(payload);
    }
    async speech(input, voice, model, format = "mp3") {
        const payload = OpenAICompatibleMapper
            .toSpeechRequest(input, model ??
            this.configuration
                .defaultModel, voice, format);
        return this.client.speech(payload);
    }
    async availableModels() {
        return this.client.getModels();
    }
    resolveModel(request) {
        if (request.model &&
            request.model.length > 0) {
            return request.model;
        }
        return this.configuration
            .defaultModel;
    }
}
//# sourceMappingURL=OpenAICompatibleProvider.js.map