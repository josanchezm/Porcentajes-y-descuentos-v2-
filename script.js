const cupones = [
    {nombre: "Bronce", descuento: 15},
    {nombre: "Bronce", descuento: 15},
    {nombre: "Bronce", descuento: 15},
    {nombre: "Plata", descuento: 25},
    {nombre: "Plata", descuento: 25},
    {nombre: "Oro", descuento: 30},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
    {nombre: "Blanco", descuento: 0},
];

const productos = [
    {articulo: "reloj", precio: 1250},
    {articulo: "collar", precio: 5000},
    {articulo: "boligrafo", precio: 750.7}
];

function azar(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let numero = Math.floor(Math.random()*(1+max-min)+min);
    console.log(numero);

    return numero;
};

function calculoDescuento(precio,descuento) {
    const precioFinal = (precio*(100-descuento))/100;
    console.log(`el precio a pagar es de: ${precioFinal} USD`);
    
    if(descuento === 0) {
      alert('No obtuvo un cupon de descuento, vuelva a intentarlo!')
      return '';  
    }
    else {
        var resultado = `
            precio inicial: ${precio} USD
            descuento: ${descuento}%
            precio final: ${precioFinal} USD
        `; 
        return resultado;
    }
};

let cuponValue;

function cuponObtenido() {   
    const resultado_cupon = document.getElementById("resultadoCupon");
    const numero_cupon = azar(1,16);

    if(numero_cupon === 1 || numero_cupon === 2 || numero_cupon === 3) {
        cuponValue = "Bronce";
        resultado_cupon.innerText = `Felicidades, obtuvo el cupon de ${cuponValue}!
        Puede aplicarlo en el producto que desee`;
        return cuponValue;
    }
    else if(numero_cupon === 4 || numero_cupon === 5) {
        cuponValue = "Plata";
        resultado_cupon.innerText = `Felicidades, obtuvo el cupon de ${cuponValue}!
        Puede aplicarlo en el producto que desee`;
        return cuponValue;
    }
    else if(numero_cupon === 6) {
        cuponValue = "Oro";
        resultado_cupon.innerText = `Felicidades, obtuvo el cupon de ${cuponValue}!
        Puede aplicarlo en el producto que desee`;
        return cuponValue; 
    }
    else {
        cuponValue = "Blanco";
        resultado_cupon.innerText = `Vuelva a intentarlo!`;
        return cuponValue;
    }   
};

function calculoPrecioReloj() {
    const productoValue = "reloj";

    const validacionCupon = function(cupon) {
        return cupon.nombre === cuponValue;
    };

    const recuperarCupon = cupones.find(validacionCupon); 
    const descuento = recuperarCupon.descuento;

    const validacionProducto = function(producto) {
        return producto.articulo === productoValue;
    };

    const recuperarProducto = productos.find(validacionProducto); 
    const precio = recuperarProducto.precio;

    const calculoPrecio = calculoDescuento(precio,descuento);

    if (descuento != 0) {
        const descuentoAplicado = document.getElementById("descuento");
        descuentoAplicado.innerText = `-${descuento}%`;
        descuentoAplicado.style.opacity = "100%";
    }

    const resultado = document.getElementById("resultadoPrecioReloj");
    resultado.innerText = calculoPrecio;
};

function calculoPrecioCollar() {
    const productoValue = "collar";

    const validacionCupon = function(cupon) {
        return cupon.nombre === cuponValue;
    };

    const recuperarCupon = cupones.find(validacionCupon); 
    const descuento = recuperarCupon.descuento;

    const validacionProducto = function(producto) {
        return producto.articulo === productoValue;
    };

    const recuperarProducto = productos.find(validacionProducto); 
    const precio = recuperarProducto.precio;

    const calculoPrecio = calculoDescuento(precio,descuento);

    if (descuento != 0) {
        const descuentoAplicado = document.getElementById("descuento_2");
        descuentoAplicado.innerText = `-${descuento}%`;
        descuentoAplicado.style.opacity = "100%";
    }

    const resultado = document.getElementById("resultadoPrecioCollar");
    resultado.innerText = calculoPrecio;
};

function calculoPrecioBoligrafo() {
    const productoValue = "boligrafo";

    const validacionCupon = function(cupon) {
        return cupon.nombre === cuponValue;
    };

    const recuperarCupon = cupones.find(validacionCupon); 
    const descuento = recuperarCupon.descuento;

    const validacionProducto = function(producto) {
        return producto.articulo === productoValue;
    };

    const recuperarProducto = productos.find(validacionProducto); 
    const precio = recuperarProducto.precio;

    const calculoPrecio = calculoDescuento(precio,descuento);

    if (descuento != 0) {
        const descuentoAplicado = document.getElementById("descuento_3");
        descuentoAplicado.innerText = `-${descuento}%`;
        descuentoAplicado.style.opacity = "100%";
    }

    const resultado = document.getElementById("resultadoPrecioBoligrafo");
    resultado.innerText = calculoPrecio;
};