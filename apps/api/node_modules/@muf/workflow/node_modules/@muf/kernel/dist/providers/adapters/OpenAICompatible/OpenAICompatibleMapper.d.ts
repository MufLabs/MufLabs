import { ProviderRequest } from "../../ProviderRequest";
export declare class OpenAICompatibleMapper {
    static toChatCompletionsRequest(request: ProviderRequest, model: string): Record<string, unknown>;
    static toEmbeddingsRequest(input: string | string[], model: string): Record<string, unknown>;
    static toModerationRequest(input: string, model?: string): Record<string, unknown>;
    static toImageGenerationRequest(prompt: string, model: string, size?: string, quality?: string, style?: string, count?: number): Record<string, unknown>;
    static toSpeechRequest(input: string, model: string, voice: string, format?: string): Record<string, unknown>;
    static toTranscriptionRequest(model: string, file: Blob, language?: string, prompt?: string, temperature?: number): FormData;
}
//# sourceMappingURL=OpenAICompatibleMapper.d.ts.map