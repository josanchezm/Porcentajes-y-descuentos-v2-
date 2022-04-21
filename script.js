const cupones = [
    {nombre: "Bronce", descuento: 15},
    {nombre: "Plata", descuento: 25},
    {nombre: "Oro", descuento: 30}
];

function calculoDescuento(precioInicial,descuento,moneda) {
    const precioFinal = (precioInicial*(100-descuento))/100;
    console.log(`el precio a pagar es de: ${precioFinal} ${moneda}`);

    var resultado = `
    precio inicial: ${precioInicial} ${moneda}
    descuento: ${descuento}%
    precio final: ${precioFinal} ${moneda}
    `; 
    return resultado;
}

function calculoPrecioFinal() {
    const precioInput = document.getElementById("Precio");
    const precioValue = precioInput.value;

    const cuponInput = document.getElementById("Cupon");
    const cuponValue = cuponInput.value;
    
    const monedaInput = document.getElementById("Moneda");
    const monedaValue = monedaInput.value;

    const validacionCupon = function(cupon) {
        return cupon.nombre === cuponValue;
    }

    const recuperarCupon = cupones.find(validacionCupon); 

    if(!recuperarCupon) {
        alert(`el cupon que ingresaste (${cuponValue}) es invalido`);
    } else {
        const descuento = recuperarCupon.descuento;

        const calculoPrecio = calculoDescuento(precioValue,descuento,monedaValue);

        const resultado = document.getElementById("resultadoPrecio");
        resultado.innerText = calculoPrecio;
    }
}

