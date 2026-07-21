import { FrontMatterParser } from "./FrontMatterParser";
import { PromptExtractor } from "./PromptExtractor";
export class MarkdownAgentParser {
    frontMatter = new FrontMatterParser();
    promptExtractor = new PromptExtractor();
    async parse(content) {
        const metadata = this.frontMatter.parse(content);
        const prompt = this.promptExtractor.extract(content);
        const errors = [];
        const id = String(metadata.id ?? "").trim();
        const name = String(metadata.name ?? "").trim();
        const description = String(metadata.description ?? "").trim();
        if (!id) {
            errors.push("Missing required field 'id'.");
        }
        if (!name) {
            errors.push("Missing required field 'name'.");
        }
        if (!prompt) {
            errors.push("Prompt section is empty.");
        }
        const capabilities = (Array.isArray(metadata.capabilities)
            ? metadata.capabilities
            : []).map(capability => ({
            name: String(capability)
        }));
        const definition = {
            id,
            name,
            description,
            version: metadata.version?.toString(),
            author: metadata.author?.toString(),
            prompt,
            capabilities,
            tools: Array.isArray(metadata.tools)
                ? [...metadata.tools]
                : [],
            workflow: Array.isArray(metadata.workflow)
                ? [...metadata.workflow]
                : [],
            rules: Array.isArray(metadata.rules)
                ? [...metadata.rules]
                : [],
            examples: Array.isArray(metadata.examples)
                ? [...metadata.examples]
                : [],
            constraints: Array.isArray(metadata.constraints)
                ? [...metadata.constraints]
                : [],
            tags: Array.isArray(metadata.tags)
                ? [...metadata.tags]
                : [],
            priority: Number(metadata.priority ?? 100),
            enabled: Boolean(metadata.enabled ?? true),
            model: metadata.model?.toString(),
            provider: metadata.provider?.toString(),
            timeout: metadata.timeout !== undefined
                ? Number(metadata.timeout)
                : undefined,
            maxRetries: metadata.maxRetries !== undefined
                ? Number(metadata.maxRetries)
                : undefined,
            metadata
        };
        return {
            success: errors.length === 0,
            value: errors.length === 0
                ? definition
                : undefined,
            errors
        };
    }
}
//# sourceMappingURL=MarkdownAgentParser.js.map