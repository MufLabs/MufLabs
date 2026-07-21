export class PromptExtractor {
    extract(content) {
        const lines = content.split(/\r?\n/);
        let start = 0;
        if (lines[0]?.trim() === "---") {
            start = 1;
            while (start < lines.length &&
                lines[start].trim() !== "---") {
                start++;
            }
            start++;
        }
        return lines
            .slice(start)
            .join("\n")
            .trim();
    }
}
//# sourceMappingURL=PromptExtractor.js.map