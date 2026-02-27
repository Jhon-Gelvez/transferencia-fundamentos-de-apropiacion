// Solicitar la distancia del recorrido al usuario y guardarla en la variable 'distancia'
let distancia = parseFloat(prompt("Por favor, ingrese la distancia del recorrido en kilómetros (km):"));

// Solicitar la velocidad promedio al usuario y guardarla en la variable 'velocidadPromedio'
let velocidadPromedio = parseFloat(prompt("Por favor, ingrese la velocidad promedio en kilómetros por hora (km/h):"));

// Calcular el tiempo estimado del viaje dividiendo la distancia entre la velocidad promedio
let tiempoEstimado = distancia / velocidadPromedio;

// Mostrar el resultado del tiempo estimado en la consola
console.log("El tiempo estimado del viaje es: " + tiempoEstimado + " horas.");