import { AgentDefinition } from "../core/AgentDefinition";
import { AgentFileLocator } from "./AgentFileLocator";
import { IAgentLoader } from "./IAgentLoader";
export declare class MarkdownAgentLoader implements IAgentLoader {
    private readonly locator;
    private readonly parser;
    constructor(locator?: AgentFileLocator);
    load(): Promise<AgentDefinition[]>;
}
//# sourceMappingURL=MarkdownAgentLoader.d.ts.map