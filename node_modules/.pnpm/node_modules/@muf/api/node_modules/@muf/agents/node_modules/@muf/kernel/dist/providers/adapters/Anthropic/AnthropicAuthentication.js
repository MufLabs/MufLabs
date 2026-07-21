export class AnthropicAuthentication {
    static create(configuration) {
        const additionalHeaders = {
            "anthropic-version": configuration.apiVersion ?? "2023-06-01"
        };
        if (configuration.beta) {
            additionalHeaders["anthropic-beta"] =
                configuration.beta;
        }
        Object.assign(additionalHeaders, configuration.defaultHeaders ?? {});
        return {
            bearerToken: configuration.apiKey,
            additionalHeaders
        };
    }
}
//# sourceMappingURL=AnthropicAuthentication.js.map