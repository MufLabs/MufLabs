export class BaseProvider {
    /**
    * Caché interno de la información.
    */
    _info;
    /**
    * Información del proveedor.
    */
    get info() {
        if (!this._info) {
            this._info = this.buildInfo();
        }
        return this._info;
    }
    /**
     * Comprueba si el proveedor está disponible.
     */
    async isAvailable() {
        return true;
    }
    /**
     * Devuelve la información del proveedor.
     */
    getInfo() {
        return this.info;
    }
    /**
     * Comprueba si soporta una capacidad determinada.
     */
    supports(capability) {
        return Boolean(this.info.capabilities[capability]);
    }
}
//# sourceMappingURL=BaseProvider.js.map