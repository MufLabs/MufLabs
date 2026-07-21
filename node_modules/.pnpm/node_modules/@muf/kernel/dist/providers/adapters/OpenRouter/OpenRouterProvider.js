import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { OpenRouterProviderInfo } from "./OpenRouterProviderInfo";
export class OpenRouterProvider extends OpenAICompatibleProvider {
    id = OpenRouterProviderInfo.id;
    name = OpenRouterProviderInfo.name;
    constructor(configuration) {
        super(configuration);
    }
    buildInfo() {
        return OpenRouterProviderInfo;
    }
    async initialize() {
        await super.initialize();
        this.info.models = [
            ...this.info.models
        ];
    }
    async execute(request) {
        return super.execute(request);
    }
}
//# sourceMappingURL=OpenRouterProvider.js.map