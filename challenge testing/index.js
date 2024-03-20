class CarritoCompra {
    constructor() {
        this.carrito = [];
    };

    agregarProducto(product) { 
        this.carrito.push(product);
    };

    calcularTotal() {
        let total = 0;
        for (const item of carrito) {
            total += item.precio * item.cantidad
        };

        return total;
    };

    aplicarDescuento(porcentaje) {

        const subtotal = this.calcularTotal();
        const descuento = this.calcularTotal() * (porcentaje/ 100)

        const total = subtotal - descuento;

        return total;
   };
};

module.exports = CarritoCompra;
