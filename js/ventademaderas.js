// Variables
let muebles = [];


class Mueble{
    constructor(id, tipo, medida, precio){
        this.id = id;
        this.tipo = tipo;
        this.medida = medida;
        this.precio = precio;
    }
    calcularPrecio(){
        return this.medida * this.precio;
    }
}

function calcularTotal(){
    let precioTotalChanguito = 0;
    for(const mueble of muebles){
        precioTotalChanguito += mueble.calcularPrecio()
    }
    return precioTotalChanguito;
}


function agregarMueble(){
    let medida = parseInt(prompt("Cuantos metros vas a llevar?"));
    let mueble = new Mueble(muebles.length, tipo, medida, valorMadera);
    alert("Agregaste " + mueble.medida +" de " + mueble.tipo + " serian " + mueble.calcularPrecio() + " al changuito");
    muebles.push(mueble);
}

function comprar(){

    while(true){
        let madera = 0;
        madera = parseInt(prompt("Tenemos 3 opciones de madera para guitarras: \n1.Ebano, \n2.Aliso \n3.Nogal \n4.Ir a changuito \n5.Salir"));
        
        if(madera == 1){
            tipo = "Ebano";
            valorMadera = 100;
            alert(tipo + " perfecto para una Les Paul al mejor estilo Jimmy Page!");
            agregarMueble();

        } else if(madera == 2){
            tipo = "Aliso";
            valorMadera = 120;
            alert(tipo + " es la madera para la legendaria Stratocaster, la de Jimi Hendrix!");
            agregarMueble();

        } else if(madera == 3){
            tipo = "Nogal";
            valorMadera = 90;
            alert("Con el " + tipo +  " podriamos hacer una Telecaster al estilo George Harrison que te parece?");
            agregarMueble();

        }else if(madera == 4 && madera != true){
            let opcion = prompt("Deseas eliminar algun producto? Y o N");
         
                if(opcion == "Y"){
                    muebles.forEach(elm => {
                        console.log(`ID: ${elm.id }\n Tipo: ${elm.tipo} \n Medida: ${elm.medida} \n Precio: ${elm.precio} \n`);
                    })
                    let id = prompt("Ingrese el id al eliminar")
                    elimiarDelCarrito(id)
                    break;
                } else if(opcion == "N"){
                    let changuito = muebles.map((Mueble) => (Mueble.tipo + " " + Mueble.medida + "m "  + "$" + Mueble.calcularPrecio() + "\n"));
                    alert("Tu compra de:" + "\n\n" + changuito.join("") + "\n" + "Es un total de: $" + calcularTotal() );
                    pagoCuotas();
                    break;
                }
        }else if(madera == 5){
            alert("Gracias vualva prontos");
            break;
        }
        else{
            alert("No es posible realizar la operacion");
        }
        
    }
}


function elimiarDelCarrito(id){
    let item  = muebles.find(elm => elm.id == id)
    if(item){
        let index = muebles.indexOf(item);
        muebles.splice(index, 1);
        comprar()
    }else{
        alert("No existe el producto")
        comprar()
    }
}

function pagoCuotas(){
    while(true){
        let pregunta = prompt("Desea realizar su pago en cuotas? Y o N" );
        let precioTotal = calcularTotal();
        if(pregunta == "Y"){
            let cuotas = parseInt(prompt("Puedes realizar el pago en \n3 \n6 \n12"));
            let totalCuotas = (precioTotal / cuotas) * 1.10;
            totalCuotas = totalCuotas.toFixed(2);
            alert("Perfecto te quedarian en " + cuotas +" cuotas de " + totalCuotas + " nos contactaremos en cuanto tengamos tu pedido listo para retirar");
            break;
        }else if(pregunta == "N") {
            alert("Perfecto el total es de: $" + precioTotal + " puedes pagarlo en efectivo en nuestro local fisico en Av Laprida 222 o realizar tu pago mediante tarjeta de credito/debito o mercadopago");
            break;
        }else{
            alert("Elija una de las opciones disponibles")
        }

    }
}

let boton = document.querySelector("#Comprar")
boton.addEventListener("click", comprar)