// Tabla de multiplicar de un numero introducido por pantalla

var num1 = prompt("Ingresa un numero");

for (let i = 1; i <= 10; i++) {
    multi = num1 * i;
    document.write('<br>' + i + ' x ' + num1 + ' = ' + multi);
}