export class AbortManager {
    create(timeout) {
        const controller = new AbortController();
        if (timeout !== undefined &&
            timeout > 0) {
            setTimeout(() => controller.abort(), timeout);
        }
        return controller;
    }
}
//# sourceMappingURL=AbortManager.js.map