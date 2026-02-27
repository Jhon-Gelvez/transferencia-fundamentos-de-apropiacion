//** solñicitamos las edades de los usuarios */
let edad1 = parseInt(prompt("Por favor, ingrese la edad de la primera persona:"));
let edad2 = parseInt(prompt("Por favor, ingrese la edad de la segunda persona:"));
let edad3 = parseInt(prompt("Por favor, ingrese la edad de la tercera persona:"));
let edad4 = parseInt(prompt("Por favor, ingrese la edad de la cuarta persona:"));

//** calculamos el promedio de las edades */
let promedio = (edad1 + edad2 + edad3 + edad4) / 4;

//** mostramos el resultado en laconsola */
console.log("El promedio de edad del grupo es: " + promedio);