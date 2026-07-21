export class OpenAICompatibleMapper {
    static toChatCompletionsRequest(request, model) {
        let messages = request.messages;
        if ((!messages || messages.length === 0) && request.prompt) {
            messages = [];
            if (request.systemPrompt || request.system) {
                messages.push({
                    role: "system",
                    content: request.systemPrompt ??
                        request.system ??
                        ""
                });
            }
            messages.push({
                role: "user",
                content: request.prompt
            });
        }
        const payload = {
            model,
            messages
        };
        if (request.temperature !== undefined) {
            payload.temperature = request.temperature;
        }
        if (request.topP !== undefined) {
            payload.top_p = request.topP;
        }
        if (request.maxTokens !== undefined) {
            payload.max_tokens = request.maxTokens;
        }
        if (request.stop !== undefined) {
            payload.stop = request.stop;
        }
        if (request.stream !== undefined) {
            payload.stream = request.stream;
        }
        if (request.tools) {
            payload.tools = request.tools;
        }
        if (request.toolChoice !== undefined) {
            payload.tool_choice = request.toolChoice;
        }
        if (request.responseFormat !== undefined) {
            payload.response_format = request.responseFormat;
        }
        if (request.user) {
            payload.user = request.user;
        }
        if (request.metadata) {
            Object.assign(payload, request.metadata);
        }
        return payload;
    }
    static toEmbeddingsRequest(input, model) {
        return {
            model,
            input
        };
    }
    static toModerationRequest(input, model) {
        const payload = {
            input
        };
        if (model) {
            payload.model = model;
        }
        return payload;
    }
    static toImageGenerationRequest(prompt, model, size, quality, style, count = 1) {
        const payload = {
            model,
            prompt,
            n: count
        };
        if (size) {
            payload.size = size;
        }
        if (quality) {
            payload.quality = quality;
        }
        if (style) {
            payload.style = style;
        }
        return payload;
    }
    static toSpeechRequest(input, model, voice, format = "mp3") {
        return {
            model,
            input,
            voice,
            response_format: format
        };
    }
    static toTranscriptionRequest(model, file, language, prompt, temperature) {
        const form = new FormData();
        form.append("model", model);
        form.append("file", file);
        if (language) {
            form.append("language", language);
        }
        if (prompt) {
            form.append("prompt", prompt);
        }
        if (temperature !== undefined) {
            form.append("temperature", temperature.toString());
        }
        return form;
    }
}
//# sourceMappingURL=OpenAICompatibleMapper.js.map