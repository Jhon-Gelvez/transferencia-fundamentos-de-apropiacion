// 2. Salario semanal
// inicio

// declaramos las variables
let horas, valorHora, salario;

// datos de ingreso
horas = parseFloat(prompt("Ingrese el número de horas trabajadas"));
valorHora = parseFloat(prompt("Ingrese el valor por hora"));

// operaciones
salario = horas * valorHora;

// datos de salida
alert("El salario semanal es: " + salario);

// fin