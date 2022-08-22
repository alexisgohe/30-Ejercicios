var num1,
    num2;

function numero(num1, num2){
    if(num1 == num2){
        console.log('Tu número es igual');
    } else if(num1 > num2){
        console.log('Tu número es mayor');
    } else{
        console.log('Tu número es menor');
    }
}

numero(5,5);