const prompt = require("prompt-sync")();
let a = parseInt(prompt(" Entrez un nombre : "));
for (let i = 1; i<=10; i++){
    console.log(`${a} * ${i} = ${a*i}`);
}
