import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { GeminiProviderInfo } from "./GeminiProviderInfo";
export class GeminiProvider extends OpenAICompatibleProvider {
    id = GeminiProviderInfo.id;
    name = GeminiProviderInfo.name;
    constructor(configuration) {
        super(configuration);
    }
    buildInfo() {
        return GeminiProviderInfo;
    }
}
//# sourceMappingURL=GeminiProvider.js.map