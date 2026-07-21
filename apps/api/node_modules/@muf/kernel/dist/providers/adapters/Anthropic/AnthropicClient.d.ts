import { HttpResponse } from "../../common";
import { AnthropicConfiguration } from "./AnthropicConfiguration";
export declare class AnthropicClient {
    private readonly configuration;
    private readonly httpClient;
    constructor(configuration: AnthropicConfiguration);
    getModels(): Promise<HttpResponse>;
    messages(request: unknown): Promise<HttpResponse>;
    protected get(endpoint: string): Promise<HttpResponse>;
    protected post(endpoint: string, body: unknown, serializeJson?: boolean): Promise<HttpResponse>;
    private buildHeaders;
    private buildUrl;
}
//# sourceMappingURL=AnthropicClient.d.ts.map