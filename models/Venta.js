class Venta {

    constructor() {
        this.ventas = [];
        this.nextId = 1;
    }

    getAllVentas = () => {

        return this.ventas;
    };

    addVenta = (venta) => {

        const nuevaVenta = { ...venta, id: this.nextId++, fecha: new Date() };
        this.ventas.push(nuevaVenta);
        return nuevaVenta;
    };
}

export default new Venta();
