
class Producto {
    constructor(id, nombre, sabor, cantidad, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.sabor = sabor;
        this.cantidad = cantidad;
        this.precio = precio;
        this.stock = stock;
    }
}

class ProductoControlador {
    constructor() {
        this.listaProductos = [];
    }
    agregar(producto) {
        this.listaProductos.push(producto);
    }

    existe(id) {
        return this.listaProductos.some(producto => producto.id === id);
    }

    buscar(id) {
        return this.listaProductos.find(producto => producto.id === id);
    }

    catalogo() {
        let catalogo = ""
        this.listaProductos.forEach((el) => {
            catalogo += "Id: " + el.id + " | Producto: " + el.nombre + " | Sabor: " + el.sabor + " | Precio: " + el.precio + "\n"
        })
        return catalogo
    }
}

class Carrito {
    constructor() {
        this.carrito = [];
    }

    agregar(producto) {
        this.carrito.push(producto)
    }

    calcularTotal() {
        let total = 0
        this.carrito.forEach(el => {
            total += el.producto.precio * el.cantidad

        });
        return total * 1.21;
    }
}

const carritoCompra = new Carrito();
const controlador = new ProductoControlador();

controlador.agregar(new Producto(1, "Barra de cereal", "Miel", 0, 130, 50));
controlador.agregar(new Producto(2, "Barra de cereal", "Coco", 0, 150, 50));
controlador.agregar(new Producto(3, "Barra de cereal", "Chocolate", 0, 200, 50));
controlador.agregar(new Producto(4, "Barra de cereal", "Nueces", 0, 200, 50));
controlador.agregar(new Producto(5, "Pasta de mani x 500g", "Original", 0, 500, 50));
controlador.agregar(new Producto(6, "Pasta de mani x 500g", "Salada", 0, 500, 20));
controlador.agregar(new Producto(7, "Pasta de mani x 500g", "Crunchy", 0, 500, 30));


alert(controlador.catalogo() + "\nTodos los precios declarados son sin IVA")


do {
    let id = Number(prompt("Ingrese el número de Id del producto deseado por favor."))
    if (!isNaN(id) && (controlador.existe(id))) {
        let cantidad = Number(prompt("¿Cuantas unidades desea comprar?"))
        const producto = controlador.buscar(id);
        if (!isNaN(cantidad) && cantidad <= producto.stock && cantidad >= 1) {
            producto.stock -= cantidad
            carritoCompra.agregar({ producto, cantidad: cantidad })
        } else {
            console.log("La cantidad solicitada excede a nuestro stock de: " + producto.stock + ". Por favor vuelva a ingresar su compra.")
        }
    } else {
        alert("No existe el Id ingresado, intentelo nuevamente por favor.")
    }
    rta = prompt("Si desea seguir comprando presione enter o para finalizar su compra 'fin'").toLowerCase()
} while (rta != "fin");


alert("El total de su compra con IVA incluido es: $" + carritoCompra.calcularTotal()+". Muchas gracias!")
