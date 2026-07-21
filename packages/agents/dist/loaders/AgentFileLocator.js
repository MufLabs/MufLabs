import { resolve } from "node:path";
export class AgentFileLocator {
    root;
    constructor(root = process.cwd()) {
        this.root = root;
    }
    getAgentsDirectory() {
        return resolve(this.root, ".github", "agents");
    }
}
//# sourceMappingURL=AgentFileLocator.js.map