// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    console.log(valuePrice);

    const inputDiscount = document.getElementById("InputDiscount");
    const valueDiscount = inputDiscount.value;

    console.log(valueDiscount);

    const precioConDescuentos = calcularPrecioConDescuento(valuePrice, valueDiscount);

    console.log(precioConDescuentos);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son: $" + precioConDescuentos;



}








// console.log("El precio original es" + precioOriginal);

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });