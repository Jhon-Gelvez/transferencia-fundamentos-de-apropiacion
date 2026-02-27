// Conversión de minutos a horas y minutos
// inicio

// declaramos las variables
let minutos, horas;
// datos de ingreso
minutos = parseInt(prompt("ingrese un numero de minutos"));
// operaciones
horas = Math.floor(minutos / 60);
minutosRestantes = minutos % 60;
// datos de salida
alert(horas + " horas y " + minutosRestantes + " minutos.");
// fin
