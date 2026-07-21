import { ProviderException } from "../../common";
export declare class AnthropicErrorMapper {
    static map(error: unknown, provider?: string): ProviderException;
    static fromHttpStatus(status: number, message: string, provider?: string): ProviderException;
}
//# sourceMappingURL=AnthropicErrorMapper.d.ts.map