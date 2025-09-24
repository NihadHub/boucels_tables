const prompt = require('prompt-sync')();
let tableau = [];
for (i=0; i<3; i++){
    tableau[i]= prompt("enter une chaine de caractéres: " );
}
let rechercher = prompt("Entrez une chaîne à rechercher: ");
if(!(tableau.includes(rechercher))){
    console.log("la chaine est introuvée !");
}else{
    console.log("la chaine",`${rechercher}`," a été trouver à la position " +(tableau.indexOf(rechercher)+1));
}