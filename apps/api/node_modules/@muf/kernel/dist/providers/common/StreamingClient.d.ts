export interface StreamingChunk {
    id?: string;
    event?: string;
    data: string;
}
export interface StreamingClient {
    stream(response: Response): AsyncIterable<StreamingChunk>;
}
//# sourceMappingURL=StreamingClient.d.ts.map