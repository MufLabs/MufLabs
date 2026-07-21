export class RoutingPolicy {
    apply(providers, criteria) {
        const ranked = providers.map(provider => ({
            ...provider,
            score: this.calculateScore(provider, criteria)
        }));
        ranked.sort((a, b) => (b.score ?? 0) -
            (a.score ?? 0));
        return ranked;
    }
    calculateScore(provider, criteria) {
        let score = 0;
        const models = provider.provider.info.models;
        if (!models.length) {
            return score;
        }
        const bestModel = models.reduce((best, current) => {
            const bestScore = this.modelScore(best, criteria);
            const currentScore = this.modelScore(current, criteria);
            return currentScore > bestScore
                ? current
                : best;
        });
        score += this.modelScore(bestModel, criteria);
        return score;
    }
    modelScore(model, criteria) {
        let score = 0;
        if (criteria?.preferQuality) {
            score += model.qualityScore ?? 0;
        }
        if (criteria?.preferSpeed) {
            score += model.speedScore ?? 0;
        }
        if (criteria?.preferLowestCost) {
            score -= model.inputCost ?? 0;
            score -= model.outputCost ?? 0;
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
//# sourceMappingURL=RoutingPolicy.js.map