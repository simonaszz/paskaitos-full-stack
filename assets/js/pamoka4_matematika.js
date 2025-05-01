// let skaicius = 2025; 

// let pirmas = skaicius % 10;;
// let antras = Math.floor((skaicius % 100) / 10);
// let trecias =  Math.floor((skaicius % 1000) / 100);
// let ketvirtas = Math.floor(skaicius  / 1000);



// let suma = pirmas + antras + trecias + ketvirtas;

// console.log(`Skaičius: ${skaicius}
// Pirmas skaitmuo: ${pirmas}
// Antras skaitmuo: ${antras}
// Trečias skaitmuo: ${trecias}
// Ketvitas skaitmuo: ${ketvirtas}

// Skaitmenų suma: ${suma}`);





let skaicius = 202525250811;
let masyvas = skaicius.toString().split('').map(Number);

let suma = 0;

for(let i =0; i <masyvas.length; i++) {
    suma += masyvas[i];
}


console.log(`Skaičius: ${skaicius}`);

console.log("Skaitmenys:", masyvas);
console.log("Skaitmenų suma:", suma);