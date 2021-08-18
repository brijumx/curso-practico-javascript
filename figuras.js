

// cuadrado

function calcularAreaCuadrado() {
    const input = document.getElementById("lcuadrado");
    const value = input.value;

    const areaCuadrado = calculoAreaCuadrado(value);

    alert("El área del cuadrado es: " + areaCuadrado);

}

function calculoAreaCuadrado(lado) {
    return lado * lado;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("lcuadrado");
    const value = input.value;

    const perimetroCuadrado = calculoPerimetroCuadrado(value);

    alert("El perímetro del cuadrado es: " + perimetroCuadrado);

}

function calculoPerimetroCuadrado(lado) {
    return lado * 4;
}




// triangulo

function calcularAreaTriangulo() {
    const input1 = document.getElementById("lado1");
    const value1 = input1.value;
    const input2 = document.getElementById("lado2");
    const value2 = input2.value;
    const inputbase = document.getElementById("ladobase");
    const valuebase = inputbase.value;
    const inputaltura = document.getElementById("altura");
    const valuealtura = inputaltura.value;

    const areaTriangulo = calculoAreaTriangulo(valuebase, valuealtura);

    alert("El área del cuadrado es: " + areaTriangulo);

}

function calculoAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("lado2");
    const value2 = parseInt(input2.value);
    const inputbase = document.getElementById("ladobase");
    const valuebase = parseInt(inputbase.value);

    const perimetroTriangulo = calculoPerimetroTriangulo(value1, value2, valuebase);

    alert("El perímetro del triangulo es: " + perimetroTriangulo);

}

function calculoPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}



// circulo

function calcularAreaCirculo() {
    const input1 = document.getElementById("radio");
    const value1 = parseInt(input1.value);

    const pi = Math.PI;

    const areaCirculo = calculoAreaCirculo(value1, pi);

    alert("El área del círculo es: " + areaCirculo);

}

function calculoAreaCirculo(radio, pi) {
    return (radio * radio) * pi;
}

function calcularPerimetroCirculo() {
    const input1 = document.getElementById("radio");
    const value1 = parseInt(input1.value);

    const pi = Math.PI;

    const perimetroCirculo = calculoPerimetroCirculo(value1, pi);

    alert("El perímetro del círculo es: " + perimetroCirculo)

}

function calculoPerimetroCirculo(radio, pi) {
    return (2 * radio) * pi;
}

// pi    const PI = 3.1415;      const PI = Math.PI;



// const modal = document.querySelector('.modal')
// const closeIcon = document.querySelector('.modal-content__close')

// const button1 = document.querySelector('#button1')
// const button2 = document.querySelector('#button2')
// const button3 = document.querySelector('#button3')

// button1.addEventListener('click', () => {
//     modal.classList.remove('hidden')
//     modal.classList.add('visible')
// })

// closeIcon.addEventListener('click', () => {
//     modal.classList.remove('visible')
//     modal.classList.add('hidden')
// })