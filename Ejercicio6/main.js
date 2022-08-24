// Muestre todos los números divisores de un número que mete en prompt

// var num1 = 5;
var num1 = prompt("Escribe un numero");

for (let i = 0; i <= num1; i++) {
    if(num1 % i === 0){
        // console.log(i);
        document.write(`<br>` + i);
    }
}