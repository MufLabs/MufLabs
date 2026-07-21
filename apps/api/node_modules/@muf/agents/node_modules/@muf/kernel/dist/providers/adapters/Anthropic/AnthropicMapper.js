export class AnthropicMapper {
    static toMessagesRequest(request, model) {
        return {
            model,
            system: request.system,
            messages: request.messages,
            temperature: request.temperature,
            top_p: request.topP,
            max_tokens: request.maxTokens,
            stop_sequences: request.stop,
            stream: request.stream,
            tools: request.tools,
            tool_choice: request.toolChoice,
            metadata: request.metadata
        };
    }
}
//# sourceMappingURL=AnthropicMapper.js.map