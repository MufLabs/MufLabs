import { ProviderException } from "./ProviderException";
export class HttpClient {
    async send(request) {
        const response = await fetch(request.url, {
            method: request.method,
            headers: request.headers,
            body: request.body !== undefined
                ? JSON.stringify(request.body)
                : undefined,
            signal: request.signal
        });
        const headers = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        if (!response.ok) {
            throw new ProviderException(response.statusText, undefined, response.status);
        }
        const data = await response.json();
        return {
            status: response.status,
            statusText: response.statusText,
            headers,
            data
        };
    }
}
//# sourceMappingURL=HttpClient.js.map