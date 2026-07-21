export class ModelSelector {
    select(providers, criteria) {
        const models = [];
        for (const provider of providers) {
            if (!provider.provider.info.models?.length) {
                continue;
            }
            models.push(...provider.provider.info.models);
        }
        if (models.length === 0) {
            return undefined;
        }
        if (criteria?.model) {
            const explicit = models.find(model => model.id === criteria.model ||
                model.name === criteria.model);
            if (explicit) {
                return explicit;
            }
        }
        const ranked = [...models].sort((a, b) => this.calculateScore(b, criteria) -
            this.calculateScore(a, criteria));
        return ranked[0];
    }
    calculateScore(model, criteria) {
        let score = 0;
        if (criteria?.preferQuality) {
            score += (model.qualityScore ?? 0) * 40;
        }
        if (criteria?.preferSpeed) {
            score += (model.speedScore ?? 0) * 25;
        }
        if (criteria?.preferLowestCost) {
            score -= (model.inputCost ?? 0);
            score -= (model.outputCost ?? 0);
        }
        if (criteria?.minimumContextWindow) {
            if (model.contextWindow >=
                criteria.minimumContextWindow) {
                score += 10;
            }
        }
        return score;
    }
}
//# sourceMappingURL=ModelSelector.js.map