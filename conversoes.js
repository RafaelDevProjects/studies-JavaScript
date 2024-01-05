// conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);
console.log(numero + numeroString) // transformou o numero em string


// conversão explicita
const numero2 = 456;
const numeroString2 = "456";

console.log(numero2 === numeroString2);
console.log(numero2 + Number(numeroString2)) // transformou a string em numero


