const CarritoCompra = require("../index");

describe("clase CarritoCompra", ()=> {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    describe("sobre el constructor de la clase carrito compra",  () => {
        it("carritoCompra deberia ser una instancia de la clase CarritoCompra", () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });

        it("Deberia guardar productos en una lista", () => {
            expect(carritoCompra.carrito).toEqual([]);
        });
    });

    describe("metodos de la clase CarritoCompra", ()=> {
        const product1 = {
            nombre: 'manzana',
            precio: 100,
            cantidad: 3 
        }

        const product2 = {
            nombre: 'peras',
            precio: 150,
            cantidad: 1 
        }

        it('deberia tener un metodo llamado agregarProducto', ()=> {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        });

        it("deberia tener un metodo llamado calcularTotal", () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        });
        
        it("deberia tener un metodo llamado aplicarDescuento", () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function');
        });

        it("El metodo agregarProducto debe agregar", ()=> {
            carritoCompra.agregarProducto(product1);
            expect(carritoCompra.carrito).toContain(product1);
        });

        it("El metodo calcularTotal debe sumar todos los productos", ()=> {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const totalExpect = (product1.precio * product1.cantidad) + (product2.precio * product2.cantidad);

            const total = carritoCompra.calcularTotal();

            expect(total).toBe(totalExpect);
        })

        it("El metodo aplicarDescuento debe descontar del total", ()=> {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);
        
            const subtotal = (product1.precio * product1.cantidad) + (product2.precio * product2.cantidad);
            
            const porcentajeDescuento = 15;
        
            const totalExpect = subtotal - (subtotal * (porcentajeDescuento/100));
        
            carritoCompra.aplicarDescuento(porcentajeDescuento);
        
            expect(carritoCompra.total).toBe(totalExpect);
        })        
    })

})