import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { LMStudioProviderInfo } from "./LMStudioProviderInfo";
export class LMStudioProvider extends OpenAICompatibleProvider {
    id = LMStudioProviderInfo.id;
    constructor(configuration) {
        super(configuration);
    }
    buildInfo() {
        return LMStudioProviderInfo;
    }
}
//# sourceMappingURL=LMStudioProvider.js.map