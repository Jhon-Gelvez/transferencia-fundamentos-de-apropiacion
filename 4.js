// Solicitar la cantidad de kilómetros recorridos al usuario y guardarla en la variable 'kilometrosRecorridos'
let kilometrosRecorridos = parseFloat(prompt("Por favor, ingrese la cantidad de kilómetros recorridos:"));

// Solicitar el consumo por kilómetro al usuario y guardarlo en la variable 'consumoPorKilometro'
let consumoPorKilometro = parseFloat(prompt("Por favor, ingrese el consumo por kilómetro (litros/km):"));

// Calcular los litros totales consumidos multiplicando los kilómetros recorridos por el consumo por kilómetro
let litrosTotales = kilometrosRecorridos * consumoPorKilometro;

// Mostrar el resultado del consumo total en la consola
console.log("El consumo total de gasolina es: " + litrosTotales + " litros.");