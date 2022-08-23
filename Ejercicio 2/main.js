var num1 = "13",
num2 = 1;

var regex = /[0-9]+/;

if(num1 <= 0 || num2 <= 0){
    console.log("Escribir un numero mayor a 0");
} else if(!regex.test(num1) || !regex.test(num2)){
    console.log("Escribir un numero y no una cadena de texto");
} else{
    numero(num1, num2);
}

function numero(num1, num2){
    if(num1 == num2){
        console.log('Tus números son iguales');
    } else if(num1 > num2){
        console.log(`El numero ${num1} es mayor al ${num2}`);
    } else{
        console.log(`El numero ${num1} es menor que el ${num2}`);
    }
}