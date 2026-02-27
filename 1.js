// 1. Factura de compra simple
// inicio

// declaramos las variables
let producto, precio, cantidad, total;

// datos de ingreso
producto = prompt("Ingrese el nombre del producto");
precio = parseFloat(prompt("Ingrese el precio del producto"));
cantidad = parseInt(prompt("Ingrese la cantidad comprada"));

// operaciones
total = precio * cantidad;

// datos de salida
alert("El total a pagar por " + cantidad + " " + producto + " es: " + total);

// fin