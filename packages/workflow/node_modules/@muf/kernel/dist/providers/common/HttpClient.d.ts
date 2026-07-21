import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";
export declare class HttpClient {
    send<T = unknown>(request: HttpRequest): Promise<HttpResponse<T>>;
}
//# sourceMappingURL=HttpClient.d.ts.map