//--------------- objeto
class Producto {
    constructor(id, nombre, precio) {
      this.id  = parseInt(id);                                                                                                                           
      this.nombre  = nombre.toLowerCase();
      this.precio = parseFloat(precio);
      
    }
    
}


const productos = [];
productos.push(new Producto("12345","Alfajor","75"));
productos.push(new Producto("12346","Coca-Cola", "300"));
productos.push(new Producto("12347","Fernet", "1000"));
productos.push(new Producto("12348","Yerba", "500"));
productos.push(new Producto("12349","Chocolate", "200"));


//--------------------------------------funciones
function admin(){
let operacion = [];
while (operacion != 6){
    operacion = parseInt(prompt(`Ingrese la operacion que desea realizar
    1 - Mostrar lista de productos
    2 - Agregar producto
    3 - Modificar nombre de producto
    4 - Modificar precio de producto   
    5 - Eliminar producto
    6 - Salir`));
    let listaDeProductos = [];
    let item = 0;
    let idProductoIngresado = 0;
    switch (operacion){
        case 1:
            for (const elemento of productos){listaDeProductos.push(`${elemento.id} - ${elemento.nombre} - $${elemento.precio}\n`);}
            alert(
                `id - nombre producto - precio
${listaDeProductos.join("")}`);
            break;
        
        case 2:
            let idNuevo = parseInt(prompt("Ingrese id del producto nuevo(5 digitos)"));
            let nombreNuevo = prompt(`Ingrese nombre de producto a agregar`).toLowerCase();
            let precioNuevo = prompt(`Ingrese el precio de ${nombreNuevo}`);
            productos.push(new Producto(idNuevo,nombreNuevo,precioNuevo));
            break;
         
        case 3:
            function ingresoId(){return parseInt(prompt(`Ingresar id del producto a modificar`))};
            idProductoIngresado = ingresoId();
            item = productos.find(item => item.id === idProductoIngresado);
            let modificarNombre = prompt("Ingrese el nuevo nombre del producto");
                    for (let i = 0; i < productos.length;i++){if(productos[i]===item){productos[i].nombre = modificarNombre}}
                    alert("Producto modificado");
            break;

        case 4:
            idProductoIngresado = ingresoId();
            item = productos.find(item => item.id === idProductoIngresado);
            let modificarPrecio = prompt("Ingrese el nuevo precio del producto");
            for (let i = 0; i < productos.length;i++){if(productos[i]===item){productos[i].precio = modificarPrecio}}                    
            alert("Precio modificado");
            break;
        
        case 5:
            idProductoIngresado = ingresoId();
            let eliminar = productos.find(eliminar => eliminar.id === idProductoIngresado);
            productos.splice(productos.indexOf(eliminar),1);
            alert("Producto eliminado");
            break;
             

                
    };
};
};
//---------------------algoritmo
admin();