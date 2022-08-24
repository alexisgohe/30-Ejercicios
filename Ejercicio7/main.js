// Programa que nos diga si un número es par o impar

// var num1 = 4;

// if(typeof num1 === "number"){
//     if(num1 % 2 === 0){
//         console.log("Tu numero es par");
//     } else if(num1 % 2 != 0) {
//         console.log("Tu numero es impar");
//     }
// } else{
//     console.log("No se pueden ingresar cadenas de texto")
// }


// ventana prompt

// var num2 = prompt("Escribe un numero");

// if(num2 % 2 === 0){
//     document.write("Tu numero es par");
// } else if(num2 % 2 != 0) {
//     document.write("Tu numero es impar");
// }


// Si no es válido que nos pida de nuevo el numero

var num2 = prompt("Escribe un número");

if(Number(num2) == num2){
    if(num2 % 2 === 0){
        document.write("Tu número es par");
    } else if(num2 % 2 != 0) {
        document.write("Tu número es impar");
    }
} else{
    alert("Digita un valor numerico");
}