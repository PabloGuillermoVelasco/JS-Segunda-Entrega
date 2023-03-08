
class Producto {
    constructor (id,nombre, sabor, cantidad, precio, stock ){
        this.id = id;
        this.nombre = nombre;
        this.sabor = sabor;
        this.cantidad = cantidad;
        this.precio = precio;
        this.stock = stock;
    }
}

class ProductoControlador {
    constructor(){
        this.listaProductos = [];
    }
    agregar(producto){
        this.listaProductos.push(producto);
    }

    existe(id){
        return this.listaProductos.some(producto => producto.id === id);
    }

    buscar(id){
        return this.listaProductos.find(producto => producto.id === id);
    }

    catalogo(){
        let catalogo = ""
        this.listaProductos.forEach( (el)=> {
            catalogo += "Id: "+el.id+" | Producto: "+el.nombre+" | Sabor: "+el.sabor+" | Precio: "+el.precio+"\n"
        } )
        return catalogo
    }
}

class Carrito {
    constructor(){
        this.carrito = [];
    }

    agregar(producto){
        this.carrito.push(producto)
    }

    calcularTotal(){
        let total = 0
        this.carrito.forEach(el => {
            total += el.precio * el.cantidad
            
        });
        return total*1.21;
    }

    sumarIva(){

        let total = 0
        this.carrito.forEach(el => {
            total += el.precio * el.cantidad
            
        });
        return total*1.21
    }
}

const carritoCompra = new Carrito();
const controlador = new ProductoControlador();

controlador.agregar(new Producto(1,"Barra de cereal","Miel",0,130,50));
controlador.agregar(new Producto(2,"Barra de cereal","Coco",0,150,50));
controlador.agregar(new Producto(3,"Barra de cereal","Chocolate",0,200,50));
controlador.agregar(new Producto(4,"Barra de cereal","Nueces",0,200,50));
controlador.agregar(new Producto(5,"Pasta de mani x 500g","Original",0,500,50));
controlador.agregar(new Producto(6,"Pasta de mani x 500g","Salada",0,500,20));
controlador.agregar(new Producto(7,"Pasta de mani x 500g","Crunchy",0,500,30));
controlador.agregar(new Producto(8,"Pasta de mani x 500g","Chocolate",0,600,30));


alert(controlador.catalogo()+"\nTodos los precios declarados son sin IVA")

do {
    let id = Number(prompt("Ingrese el número de Id del producto deseado por favor."))
    if(!isNaN(id)){
        if(controlador.existe(id)){

                let cantidad = Number(prompt("¿Cuantas unidades desea comprar?"))

                if (!isNaN(cantidad)&&cantidad <= producto.stock && cantidad >= 1){
                    
                const productoFinal = controlador.buscar(id);               
                productoFinal.cantidad = cantidad;
                carritoCompra.agregar (productoFinal)
                
            }    else{
                console.log("La cantidad solicitada excede a nuestro stock de: "+producto.stock)
            }
        }
    }else{
        console.log("No existe el Id ingresado, intentelo nuevamente por favor.")
    }
    rta = prompt("Si desea seguir comprando presione enter o para finalizar su compra 'fin'").toLowerCase()
} while (rta != "fin");


alert ("El total de su compra con IVA incluido es: $"+carritoCompra.calcularTotal())




























/*
let listadoProductos = [];
let nombreProducto = 0;
let rta = 0;

do { 
    nombreProducto = prompt ("Ingrese el nombre del producto o fin para terminar la carga.").toLowerCase()
    if (nombreProducto === "fin"){
        console.log("Gracias.")
    }else{
        let cargaNombre = nombreProducto;
        let cargaSabor = prompt("Ingrese el sabor");
        let cargaTamanio = prompt("Ingrese el tamaño");
        let cargaPrecio = Number (prompt("Ingrese el precio"));
        listadoProductos.push (new Producto(cargaNombre, cargaSabor, cargaTamanio, cargaPrecio));
    }
    console.log(listadoProductos);
    rta = prompt("Si desea ingresar mas productos presione enter, de lo contrario escriba 'fin'").toLowerCase()    
} while (rta !="fin")
*/