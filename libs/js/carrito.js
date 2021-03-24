var carritoModulo = (function(){//funcion que se autoejecuta
    let carrito = []
    const IVA = 1.21
    
    function calcularIva(precio){
        return precio * IVA
    }

    function calcularTotalCompra(){ //FUNCION = METODO - calcula el total de la compre
        let total = 0 //creo variable total
        carrito.forEach(function(producto){ //forEeach al carrito
            total += producto.precioConIva //total += los productos del precio con ivas
        })

        return total //devuelvo total de la compra
    }

    function mostrarProductos(){
        var tbody = document.querySelector("#tbody")
        tbody.innerHTML = ''
        var fila = ''
        carrito.forEach(function(producto){
            fila +=
            `<tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>$${producto.precioConIva}</td>
            `
        })

        

        if(carrito.length > 0){
            fila += `
            <tr>
                <td><strong>TOTAL:</strong></td>
                <td></td>
                <td>$${calcularTotalCompra()}</td>
            </tr>
            `
        }

        tbody.innerHTML=fila
    } 
   // var saludo = "Que te pasa?"

function persistirCarrito(){ //con esto almaceno los datos en el LocalStoratge
    const carritoString = JSON.stringify(carrito) //localStorage.setItem ya es definido apenas entrasmos, pero solo acepta string, entonces todo lo que ponemos lo convertimos a string con JSON.strungify (interesante, si no sen entiende mirar ultima clase hora 2)
    localStorage.setItem("carrito",carritoString) //setItem ya existe de manera predeterminada
}

//SOLO VAMOS A TENER ACCESO A LO QUE VA A IR ADENTRO DE RETURN, LO DEMAS NO.

    return {//retorna el objeto
        //saludo: "Hola",
        addItem: function(item){//llamo a addItem e inicia la magia, el item que ingresa...
            item.precioConIva = calcularIva(item.precio)  // ...le LE CREO! LA PROPIEDAD! item."precioConIva", QUE ES IGUAL AL RESULTADO DE... a la funcion CalcularIva al cual le pongo item.precio. Aca ya el produecto va a salir con otra propiedad
            carrito.push(item) //pongo el item en carrito
            mostrarProductos() //llamo a mostrart producto
            persistirCarrito() //que guarde en el localStorage

        },
        carritoPublico: carrito, //por si lo quiero ver accediendo a el... no es necesario(?)
        cargarCarritoPersistido: function(){ //para cargar la info desde el carrito que tengo en el localStoragte
            var carritoLocal = localStorage.getItem('carrito') || '' //si no existe aun localStorage.getItem('carrito') que sea una cadena vacia
            if (carritoLocal != ''){ //si carrito local tiene algo...
                carrito = JSON.parse(carritoLocal) //pongo todo lo del localStorage.getItem('carrito') en carrito, acordarse que esta en string, asi que con parse lo paso nuevamente como objeto
            }
            mostrarProductos()
        },
        limpiarCarrito: function(){
            localStorage.clear()
            // mostrarProductos() //Esto no me funciona, no sabemos porq.. entonces
            carrito = []
            document.querySelector("#tbody").innerHTML = ''
        }
        /* devolverSaludo: function(){ 
            var self = this
            return {
                valor: 'soy un valor',
                otroSaludo: function(){
                    console.log(`El valor del atributo saludo es ${self.saludo}`) //este es mi problema, self hace fererencia a toodo el objeto del 1er returen asi puedo agarrar cualquier variable, o de ultima la declaro en este objeto.
                }
            }
        } */ 
    }
})()



document.querySelector("#btn_aceptar").addEventListener('click',function(){ //capturo el boton y le pongo el evento click
    var txt_nombre = document.getElementById('producto') //agarro el producto
    var txt_precio = document.getElementById('precio') //agarro el precio

    if(txt_nombre.value.trim() === '' || txt_precio.value.trim() === '' || txt_precio.value < 1){ //una minima validacion de onda. Acordarse que el trim es par sacar los espacios
        return false
    }

    const producto = { //creo el objeto que es el que voy a mandar...
        nombre: txt_nombre.value,
        precio: txt_precio.value
    }

    carritoModulo.addItem(producto) //le mando a carrito.Modulo.addItem(elObjetoProductoQueCree)

    txt_nombre.value = '' //dejo esto vacio     
    txt_precio.value = '' //dejo esto vacio
})



document.addEventListener('DOMContentLoaded', function(){ //apenas carga el HTML va a cargar cargarCarritoPersistido, y si tiene algo, me lo va a mostrar.
    carritoModulo.cargarCarritoPersistido()
})

document.querySelector('#btn_limpiar').addEventListener('click',function(){
    carritoModulo.limpiarCarrito()
})


//console.log(carritoModulo.comprar)

/*
    var producto = {
        nombre: 'pan',
        precio: 100
    }
    producto.precioConIva = producto.precio * 1.21
    carritoModulo.addItem(producto)
*/


/*
public String saludame(){
    return "Hola que tal";
}
*/

//var variable = 32423 => window.variable
//let variable =324
//const variable = 2345234