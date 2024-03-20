const CarritoCompra = require("../index");

describe("clase CarritoCompra", ()=> {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    describe("sobre el constructor de la clase carrito compra",  () => {
        it("carrito compra deberia ser una clase", () => {
            expect(typeof CarritoCompra.oritityoe,constructor).toBe('function')
        });

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

        it("El metodo agregar producto debe agregar", ()=> {
            carrito.Compra.agregarProducto(product1);
            expect(carritoCompra.carrito).toContain(product1);
        });

        it("El metodo calcular total debe sumar todos los productos", ()=> {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const totalExpect = product1.precio * product1.cantidad + product2.precio * product2.cantidad;

            const total = carritoCompra.calcularTotal();

            expect(total).toBe(totalExpect);
        })

        it("El metodo aplicar descuento debe descontar del total", ()=> {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const subtotal = product1.precio * product1.cantidad + product2.precio * product2.cantidad;
            
            const porcentajeDescuento = 15;

            const totalExpect = subtotal - (subtotal * (porcentajeDescuento/100));

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento);

            expect(totalExpect).toBe(total);

        })
    })

})






// // Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

// // constructor(): Inicializa el carrito como un array vacío.

// describe("La clase carrito debe ser un array", () => {
//     it("Este test debe probar que el carrito este vacio", () => {
//         const carrito = new CarritoCompra();
//         expect(carrito.carrito).toEqual([]);
//     });
// });

// // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// describe("El metodo agregar producto debe agregar un objeto al array", () => {
//     it("Este test debe probar que al agregar productos el carrito no quede vacio", () => {
//         const producto = {
//             nombre: "Producto de prueba",
//             precio: 10
//         };
//         carrito.agregarProducto(producto);
//         expect(carrito.carrito).not.toHaveLength(0);
//     });
// });

// // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// describe("El metodo calcular total debe sumar todos los productos", () => {
//     it("Este test debe probar que se sumen correctamente los precios de los productos", () => {
//         const carrito = new CarritoCompra([
//             { nombre: "Producto de prueba1", precio: 10 },
//             { nombre: "Producto de prueba2", precio: 20 },
//             { nombre: "Producto de prueba3", precio: 30 }
//         ]);
//         expect(carrito.calcularTotal()).toBe(60);
//     });
// });

// // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

// describe("El metodo aplicar descuento debe descontar del total un % determinado", () => {
//     it("Este test debe probar que se descuente correctamente el valor", () => {
//         const carrito = new CarritoCompra([
//             { nombre: "Producto de prueba1", precio: 10 },
//             { nombre: "Producto de prueba2", precio: 20 },
//             { nombre: "Producto de prueba3", precio: 30 }
//         ]);
//         const porcentaje = 0.6; 
//         const descuentoEsperado = carrito.calcularTotal() * (1 - porcentaje); 
//         carrito.aplicarDescuento(porcentaje); 
//         expect(carrito.calcularTotal()).toBe(descuentoEsperado); 
//     });
// });

// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.