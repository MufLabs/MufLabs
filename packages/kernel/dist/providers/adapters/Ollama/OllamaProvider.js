import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { OllamaProviderInfo } from "./OllamaProviderInfo";
export class OllamaProvider extends OpenAICompatibleProvider {
    id = OllamaProviderInfo.id;
    name = OllamaProviderInfo.name;
    constructor(configuration) {
        super(configuration);
    }
    buildInfo() {
        return OllamaProviderInfo;
    }
}
//# sourceMappingURL=OllamaProvider.js.map