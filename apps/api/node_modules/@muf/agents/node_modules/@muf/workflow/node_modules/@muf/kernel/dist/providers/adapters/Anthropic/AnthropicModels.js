import { HttpClient } from "../../common";
import { AnthropicAuthentication } from "./AnthropicAuthentication";
export class AnthropicModels {
    static async discover(configuration) {
        const authentication = AnthropicAuthentication.create(configuration);
        const headers = {
            "x-api-key": authentication.bearerToken ?? "",
            "Content-Type": "application/json"
        };
        Object.assign(headers, authentication.additionalHeaders ?? {});
        const http = new HttpClient();
        const response = await http.send({
            method: "GET",
            url: `${configuration.baseUrl}/v1/models`,
            headers,
            timeout: configuration.timeout
        });
        return this.map(response.data.data);
    }
    static map(models) {
        return models.map(model => ({
            id: model.id,
            name: model.display_name ??
                model.id,
            contextWindow: 0,
            capabilities: {
                chat: true,
                vision: true,
                audio: false,
                embeddings: false,
                tools: true,
                streaming: true,
                jsonMode: true,
                functionCalling: true,
                maxContextWindow: 0
            }
        }));
    }
}
//# sourceMappingURL=AnthropicModels.js.map