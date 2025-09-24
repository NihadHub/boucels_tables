const prompt = require("prompt-sync")();
let n = parseInt(prompt("Entrez un nombre entier: "));
for (let i = 2; i <= n; i++) {
    let Premier = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            Premier = false;
            break;
        }
    }
    if (Premier) {
        console.log("le nombre " + i + " est premier");
    }
}