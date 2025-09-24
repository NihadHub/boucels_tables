const prompt = require("prompt-sync")();
let nombre = parseInt(prompt("Entrer un nombre entier: "));
let inverse = String(nombre).split('').reverse().join('')

console.log("l'inverse de nombre est: ",inverse);