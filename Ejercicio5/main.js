// Mostrar todos los números impares que hay entre dos números introducidos por el usuario

var num1 = 5;
var num2 = 17;

for (let i = num1; i <=num2; i++) {
    if(i % 2 != 0){
        console.log(i)
    }
}