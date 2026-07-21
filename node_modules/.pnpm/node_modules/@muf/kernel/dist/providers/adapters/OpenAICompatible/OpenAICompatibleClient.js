import { HttpClient } from "../../common";
import { OpenAICompatibleAuthentication } from "./OpenAICompatibleAuthentication";
export class OpenAICompatibleClient {
    configuration;
    httpClient;
    constructor(configuration) {
        this.configuration = configuration;
        this.httpClient = new HttpClient();
    }
    async getModels() {
        return this.get("/models");
    }
    async chatCompletions(request) {
        return this.post("/chat/completions", request);
    }
    async responses(request) {
        return this.post("/responses", request);
    }
    async embeddings(request) {
        return this.post("/embeddings", request);
    }
    async moderations(request) {
        return this.post("/moderations", request);
    }
    async imageGenerations(request) {
        return this.post("/images/generations", request);
    }
    async speech(request) {
        return this.post("/audio/speech", request);
    }
    async transcriptions(request) {
        return this.post("/audio/transcriptions", request, false);
    }
    async translations(request) {
        return this.post("/audio/translations", request, false);
    }
    async get(endpoint) {
        const request = {
            method: "GET",
            url: this.buildUrl(endpoint),
            headers: this.buildHeaders(),
            timeout: this.configuration.timeout
        };
        return this.httpClient.send(request);
    }
    async post(endpoint, body, serializeJson = true) {
        const headers = this.buildHeaders();
        if (serializeJson) {
            headers["Content-Type"] =
                "application/json";
        }
        const request = {
            method: "POST",
            url: this.buildUrl(endpoint),
            headers,
            body,
            timeout: this.configuration.timeout
        };
        return this.httpClient.send(request);
    }
    buildHeaders() {
        const authentication = OpenAICompatibleAuthentication.create(this.configuration);
        const headers = {};
        if (authentication.bearerToken) {
            headers.Authorization =
                `Bearer ${authentication.bearerToken}`;
        }
        if (authentication.organization) {
            headers["OpenAI-Organization"] =
                authentication.organization;
        }
        if (authentication.project) {
            headers["OpenAI-Project"] =
                authentication.project;
        }
        Object.assign(headers, authentication.additionalHeaders ?? {});
        return headers;
    }
    buildUrl(endpoint) {
        const baseUrl = this.configuration.baseUrl.endsWith("/")
            ? this.configuration.baseUrl.slice(0, -1)
            : this.configuration.baseUrl;
        const path = endpoint.startsWith("/")
            ? endpoint
            : `/${endpoint}`;
        return `${baseUrl}${path}`;
    }
}
//# sourceMappingURL=OpenAICompatibleClient.js.map