import { IProvider } from "./IProvider";
import { ProviderInfo } from "./ProviderInfo";
import { ProviderRequest } from "./ProviderRequest";
import { ProviderResponse } from "./ProviderResponse";
export declare abstract class BaseProvider implements IProvider {
    /**
     * Identificador único del proveedor.
     */
    abstract readonly id: string;
    /**
     * Nombre visible.
     */
    abstract readonly name: string;
    /**
    * Construye la información del proveedor.
    */
    protected abstract buildInfo(): ProviderInfo;
    /**
    * Caché interno de la información.
    */
    private _info?;
    /**
    * Información del proveedor.
    */
    get info(): ProviderInfo;
    /**
     * Comprueba si el proveedor está disponible.
     */
    isAvailable(): Promise<boolean>;
    /**
     * Ejecuta una solicitud.
     */
    abstract execute(request: ProviderRequest): Promise<ProviderResponse>;
    /**
     * Devuelve la información del proveedor.
     */
    getInfo(): ProviderInfo;
    /**
     * Comprueba si soporta una capacidad determinada.
     */
    supports(capability: keyof ProviderInfo["capabilities"]): boolean;
}
//# sourceMappingURL=BaseProvider.d.ts.map