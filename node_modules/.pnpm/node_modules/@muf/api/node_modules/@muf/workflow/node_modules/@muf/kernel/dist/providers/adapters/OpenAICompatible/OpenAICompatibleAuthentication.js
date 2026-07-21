export class OpenAICompatibleAuthentication {
    static create(configuration) {
        return {
            bearerToken: configuration.apiKey,
            organization: configuration.organization,
            project: configuration.project,
            additionalHeaders: configuration.defaultHeaders
        };
    }
}
//# sourceMappingURL=OpenAICompatibleAuthentication.js.map