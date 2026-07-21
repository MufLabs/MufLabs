export class GeminiConfiguration {
    apiKey = "";
    baseUrl = "https://generativelanguage.googleapis.com/v1beta/openai";
    defaultModel = "gemini-2.5-pro";
    organization;
    project;
    timeout = 60000;
    retries = 3;
    verifyTls = true;
    defaultHeaders;
    constructor(init) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
//# sourceMappingURL=GeminiConfiguration.js.map