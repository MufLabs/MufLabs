import { ProviderException } from "../../common";
export declare class OpenAICompatibleErrorMapper {
    static map(error: unknown, provider?: string): ProviderException;
    static fromHttpStatus(status: number, message: string, provider?: string): ProviderException;
}
//# sourceMappingURL=OpenAICompatibleErrorMapper.d.ts.map