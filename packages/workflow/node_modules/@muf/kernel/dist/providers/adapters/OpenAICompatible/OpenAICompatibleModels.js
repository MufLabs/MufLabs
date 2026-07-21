import { HttpClient } from "../../common";
export class OpenAICompatibleModels {
    static async discover(configuration) {
        const http = new HttpClient();
        const response = await http.send({
            method: "GET",
            url: `${configuration.baseUrl}/models`,
            headers: {
                Authorization: `Bearer ${configuration.apiKey}`,
                ...(configuration.organization
                    ? {
                        "OpenAI-Organization": configuration.organization
                    }
                    : {}),
                ...(configuration.project
                    ? {
                        "OpenAI-Project": configuration.project
                    }
                    : {}),
                ...(configuration.defaultHeaders ?? {})
            },
            timeout: configuration.timeout
        });
        return this.map(response.data.data);
    }
    static map(models) {
        return models.map(model => ({
            id: model.id,
            name: model.id,
            contextWindow: 0,
            capabilities: {
                chat: true,
                vision: false,
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
//# sourceMappingURL=OpenAICompatibleModels.js.map