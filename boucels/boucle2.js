const prompt = require("prompt-sync")();
let n = parseInt(prompt("Entrez un nombre entier: "));
let premier = 1; 
for(let i = 1 ; i <= n ; i++ ){
    if(n % i == 0){
        if(i !== 1 && i !== n){
            premier = false
            break
        }
    }else{
        premier = true
    }
}

if(premier){
    console.log("Premier");
}else{
    console.log("Non Premier");
}

