import { OpenAICompatibleProvider } from "../OpenAICompatible";
import { NvidiaProviderInfo } from "./NvidiaProviderInfo";
export class NvidiaProvider extends OpenAICompatibleProvider {
    id = NvidiaProviderInfo.id;
    name = NvidiaProviderInfo.name;
    constructor(configuration) {
        super(configuration);
    }
    buildInfo() {
        return NvidiaProviderInfo;
    }
}
//# sourceMappingURL=NvidiaProvider.js.map