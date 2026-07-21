import { BaseProvider } from "../../BaseProvider";
import { AnthropicClient } from "./AnthropicClient";
import { AnthropicErrorMapper } from "./AnthropicErrorMapper";
import { AnthropicMapper } from "./AnthropicMapper";
import { AnthropicModels } from "./AnthropicModels";
import { AnthropicProviderInfo } from "./AnthropicProviderInfo";
export class AnthropicProvider extends BaseProvider {
    configuration;
    id = AnthropicProviderInfo.id;
    name = AnthropicProviderInfo.name;
    client;
    constructor(configuration) {
        super();
        this.configuration = configuration;
        this.client =
            new AnthropicClient(configuration);
    }
    buildInfo() {
        return AnthropicProviderInfo;
    }
    async initialize() {
        if (this.info.models.length > 0) {
            return;
        }
        this.info.models =
            await AnthropicModels.discover(this.configuration);
    }
    async execute(request) {
        try {
            const model = this.resolveModel(request);
            const payload = AnthropicMapper.toMessagesRequest(request, model);
            const response = await this.client.messages(payload);
            // El HttpResponse del kernel expone data como {},
            // por lo que realizamos un cast local.
            const data = response.data;
            const promptTokens = data.usage?.input_tokens;
            const completionTokens = data.usage?.output_tokens;
            const totalTokens = (promptTokens ?? 0) +
                (completionTokens ?? 0);
            const content = data.content
                ?.map(item => item.text ?? "")
                .join("") ?? "";
            return {
                success: true,
                content,
                provider: this.id,
                providerId: this.id,
                model,
                finishReason: data.stop_reason,
                usage: {
                    promptTokens,
                    completionTokens,
                    totalTokens
                },
                promptTokens,
                completionTokens,
                totalTokens,
                metadata: {
                    rawResponse: data
                }
            };
        }
        catch (error) {
            throw AnthropicErrorMapper.map(error, this.name);
        }
    }
    async availableModels() {
        return this.client.getModels();
    }
    resolveModel(request) {
        const candidate = request.model;
        if (typeof candidate === "string" &&
            candidate.length > 0) {
            return candidate;
        }
        return this.configuration.defaultModel;
    }
}
//# sourceMappingURL=AnthropicProvider.js.map