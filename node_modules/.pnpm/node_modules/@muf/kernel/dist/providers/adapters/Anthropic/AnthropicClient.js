import { HttpClient } from "../../common";
import { AnthropicAuthentication } from "./AnthropicAuthentication";
export class AnthropicClient {
    configuration;
    httpClient;
    constructor(configuration) {
        this.configuration = configuration;
        this.httpClient =
            new HttpClient();
    }
    async getModels() {
        return this.get("/v1/models");
    }
    async messages(request) {
        return this.post("/v1/messages", request);
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
        const authentication = AnthropicAuthentication.create(this.configuration);
        const headers = {};
        if (authentication.bearerToken) {
            headers["x-api-key"] =
                authentication.bearerToken;
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
//# sourceMappingURL=AnthropicClient.js.map