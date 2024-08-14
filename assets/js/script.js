
//1. Diagrama de Flujo, se realiza a través de los comentarios


//2. Realizar operaciones con dos números.
//Se crea la variable num1 y se solicita al usuario que ingrese un valor numérico
alert("Ejercicio n°2, operaciones con dos números")
var num1 = prompt("Ingrese un número mayor a cero");

//Se crea una segunda variable num2 y se solicita al usuario que ingrese otro valor numérico
var num2 = prompt("Ingrese otro número mayor a cero");

//Se suman ambas variables y el resultado se almacena en una nueva variable con nombre representativo de la operación aritmética
var suma = parseInt(num1) + parseInt(num2);
document.write(`Ej n°2 ----------------------------------------<br>`)
document.write(`La suma de los números ingresados (${num1} y ${num2}) es ${suma} <br>`);


//Se restan ambas variables y el resultado se almacena en una nueva variable con nombre representativo de la operación aritmética
var resta = parseInt(num1) - parseInt(num2);
document.write(`La resta de los números ingresados (${num1} y ${num2}) es ${resta} <br>`);

//Se dividen ambas variables y el resultado se almacena en una nueva variable con nombre representativo de la operación aritmética
var division = parseInt(num1) / parseInt(num2);
document.write(`La division de los números ingresados (${num1} y ${num2}) es ${division} <br>`);


//Se multiplican ambas variables y el resultado se almacena en una nueva variable con nombre representativo de la operación aritmética
var multiplicacion = parseInt(num1) * parseInt(num2);
document.write(`La multiplicación de los números ingresados (${num1} y ${num2}) es ${multiplicacion} <br>`);

//Se obtiene el módulo de ambas variables y el resultado se almacena en una nueva variable con nombre representativo de la operación aritmética
var modulo = parseInt(num1) % parseInt(num2);
document.write(`El módulo de los números ingresados (${num1} y ${num2}) es ${modulo} <br>`);



//Se crea la variable tempCelsius y se solicita al usuario que ingrese la temperatura actual
alert("Ejercicio n°3, conversión temperaturas")
var tempCelsius = prompt("Ingrese la temperatura actual en grados Celcius");

//Se transforma ese valor a grados Kelvin y se almacena en una variable
document.write(`Ej n°3 ----------------------------------------<br>`)
var tempKelvin = parseFloat(tempCelsius) + parseFloat(273.15);
document.write(`${tempCelsius} grados celsius corresponen a ${tempKelvin} °K <br>`);

//Se transforma ese valor a grados Kelvin y se almacena en una variable
var tempFahrenheit = (parseFloat(tempCelsius) * (9 / 5)) + parseInt(32);
document.write(`${tempCelsius} grados celsius corresponen a ${tempFahrenheit} °F <br>`);



//Se solicita al usuario ingresar una cantidad de días y se almacena en una variable
alert("Ejercicio n°4, Numero de días expresado en años, semanas y días")
var numDias = prompt("Ingrese una cantidad de días");

//Este número se divide por 365 y su parte entera se guarda como año en una variable
document.write(`Ej n°4 ----------------------------------------<br>`)
var numAnios = Math.floor(parseInt(numDias) / 365);
document.write(`La cantidad de ${numDias} días corresponden a: <br> ${numAnios} año(s) <br>`)

//Lo que queda de la división anterior, el "resto" o módulo se divide en 7 para obtener el número de semanas y se almacena en una variable
var numSemanas = Math.floor((parseInt(numDias) % 365) / 7);
document.write(`${numSemanas} semana(s) <br>`)

//Finalmente el módulo de todo lo anterior, es decir el residuo del número descontados los años y semanas, se expresa en días y se almacena en una variable
var numDiasResto = Math.floor((parseInt(numDias) % 365) % 7);
document.write(`${numDiasResto} día(s) <br>`)


alert("Ejercicio n°5, ingresar 5 números")
//Solicitar al usuario 5 números, partiendo por el primero, que se almacena en una variable
var numero1 = prompt("Ingrese 5 números, comenzando ahora por el primer número:");

//luego se pide ingresar el segundo número, que se almacena en una variable
var numero2 = prompt("Ingrese el segundo número");

//luego se pide ingresar el tercer número, que se almacena en una variable
var numero3 = prompt("Ingrese el tercer número");

//luego se pide ingresar el cuarto número, que se almacena en una variable
var numero4 = prompt("Ingrese el cuarto número");

//luego se pide ingresar el quinto número, que se almacena en una variable
var numero5 = prompt("Ingrese el quinto número");

//Se muestra el resultado de la suma de los 5 números ingresados
document.write(`Ej n°5 ----------------------------------------<br>`)
var sumAll = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
document.write(`La suma de los números ingresados (${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}) es ${sumAll} <br>`)

//Se muestra el promedio de los 5 números ingresados
var avgAll = parseFloat(sumAll / 5)
document.write(`El promedio de los números ingresados (${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}) es ${avgAll} <br>`)
