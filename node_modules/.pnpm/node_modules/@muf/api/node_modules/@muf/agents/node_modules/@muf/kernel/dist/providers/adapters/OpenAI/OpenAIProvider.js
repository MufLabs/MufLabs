import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { OpenAIProviderInfo } from "./OpenAIProviderInfo";
export class OpenAIProvider extends OpenAICompatibleProvider {
    id = OpenAIProviderInfo.id;
    name = OpenAIProviderInfo.name;
    constructor(configuration) {
        super(configuration);
    }
    buildInfo() {
        return OpenAIProviderInfo;
    }
    async initialize() {
        await super.initialize();
        this.info.models = [
            ...this.info.models
        ];
    }
}
//# sourceMappingURL=OpenAIProvider.js.map