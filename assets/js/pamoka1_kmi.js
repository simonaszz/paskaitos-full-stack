// Pamoka 1 – KMI skaičiavimas

const markoSvoris = 78;
const markoUgis = 1.69;
const dzonoSvoris = 92;
const dzonoUgis = 1.95;

const markoKMI = markoSvoris / (markoUgis ** 2);
const dzonoKMI = dzonoSvoris / (dzonoUgis ** 2);

const markoDidesnis = markoKMI > dzonoKMI;

console.log("Marko KMI:", markoKMI.toFixed(2));
console.log("Džono KMI:", dzonoKMI.toFixed(2));
console.log("Ar Marko KMI didesnis?", markoDidesnis);
