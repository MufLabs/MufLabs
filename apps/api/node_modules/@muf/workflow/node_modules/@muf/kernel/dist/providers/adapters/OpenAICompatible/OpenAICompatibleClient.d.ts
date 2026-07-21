import { HttpResponse } from "../../common";
import { OpenAICompatibleConfiguration } from "./OpenAICompatibleConfiguration";
export declare class OpenAICompatibleClient {
    private readonly configuration;
    private readonly httpClient;
    constructor(configuration: OpenAICompatibleConfiguration);
    getModels(): Promise<HttpResponse>;
    chatCompletions(request: unknown): Promise<HttpResponse>;
    responses(request: unknown): Promise<HttpResponse>;
    embeddings(request: unknown): Promise<HttpResponse>;
    moderations(request: unknown): Promise<HttpResponse>;
    imageGenerations(request: unknown): Promise<HttpResponse>;
    speech(request: unknown): Promise<HttpResponse>;
    transcriptions(request: FormData): Promise<HttpResponse>;
    translations(request: FormData): Promise<HttpResponse>;
    protected get(endpoint: string): Promise<HttpResponse>;
    protected post(endpoint: string, body: unknown, serializeJson?: boolean): Promise<HttpResponse>;
    private buildHeaders;
    private buildUrl;
}
//# sourceMappingURL=OpenAICompatibleClient.d.ts.map