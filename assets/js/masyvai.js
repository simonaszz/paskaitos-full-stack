//1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą
// ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame

// masyve yra narių.

let masyvas = [10, 12, 11, 15, 28, 3, 8, 2015, 12, 11];

let pirmas = masyvas[0];

let paskutinis = masyvas[masyvas.length - 1];

let vidurio1 = masyvas[Math.floor(masyvas.length / 2) - 1];

let vidurio2 = masyvas[Math.floor(masyvas.length / 2)];

let kiekis = masyvas.length;

console.log(
    'pirmas:', pirmas + '\n' +
    'paskutinis:' + paskutinis + '\n' +
    'vidurio 1:' + vidurio1 + '\n' +
    'vidurio 2 :' + vidurio2 + '\n' +
    'kiekis nariu:' + kiekis
);

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo
// informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite
// pakeisto masyvo informaciją.

console.log('pradinis masyvas:' + masyvas);

masyvas[1] = 'skaičius';
masyvas[5] = 'uoga';
masyvas[10] = 'vaisius';

// console.log('Pakeistas masyvas:', masyvas);
// for(let i = 0; i < masyvas.length; i++) {
//     console.log(masyvas[i]);
// }

// 3.Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis
// naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.

let masyvas1 = [];

masyvas1.push('vaisius');
masyvas1.push('daržovė');
masyvas1.push('bulvė');
masyvas1.push('obuolys');
masyvas1.push('maistas');

console.log('Užpildytas masyvas:' + masyvas1);
console.log('Pakeistas masyvas:' + masyvas);

// for(let i = 0; i < masyvas1.length; i++) {

//     console.log( masyvas1[i]);
// }

// Užduotys (2/2)

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais

// skaičiais. Išveskite šio masyvo informaciją.

// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5

// pažymius kiekvienam studentui (iškart kuriant masyvus arba per push
// funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio
// studento vidurkis didesnis ir išveskite atsakymą.

//4.
let mas = [];
let i = 1;

while (i <= 5) {
    let random = Math.floor(Math.random() * 100) + 1;
    mas.push(random);
    i++;

}
console.log('Užpildytas masyvas:', mas);

//5.

let student1 = [8, 9, 7, 10, 6, 5];
let student2 = [5, 6, 7, 10, 6, 4];

let suma = 0;
for (let i = 0; i < student1.length; i++) {
    suma += student1[i];
}

vidurkis1 = suma / student1.length;

let suma2 = 0;
for (let i = 0; i < student2.length; i++) {
    suma2 += student2[i];
}
vidurkis2 = suma2 / student2.length;

console.log(
    'Studento 1 vidurkis:' + vidurkis1 + '\n',
    'Studento 2 vidurkis:' + vidurkis2 + '\n'
);

if (vidurkis1 > vidurkis2) {
    console.log('1 studentas turi aukstesni vidurki');
}
else if (vidurkis2 > vidurkis1) {
    console.log('Studentas 2 turi didesni vidurki');

}
else {
    console.log('Abieju vidurkiai vienodi');
}

// Užduotys (1/4)

// 39

// 6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį
// masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.

// 7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis.

// Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada
// nurodant šalį iš masyvo.

// 8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite
// šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš
// kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).

let studijuProgramos = [
    'Informatika',
    'Statyba',
    'Matematika',
    'Verslo vadyba',
    'Inžinerija'
];

studijuProgramos.forEach(programa => {
    console.log('Studijų programa:', programa);
});

let salys = ['Lietuva', 'Latvija', 'Estija', 'Lenkija'];

salys.forEach(salis => {
    console.log('Šalis: ' + salis);
});

// 1. Sukuriame masyvą įgyvendintų projektų pavadinimams
let projektai = ["Elektroninė parduotuvė", "Mobilioji aplikacija", "Duomenų analizės sistema", "CRM sistema", "Portfolio svetainė"];

// 2. Išvedame kiekvieną projektą su eilės numeriu (nuo 1)

for (let i = 0; i < projektai.length; i++) {
    console.log((i + 1) + '-as projektas:' + projektai[i]);

}

// Užduotys (1/2)

// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą
// ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame

// masyve yra narių.

// let masyvas = ['Marius', 'Antanas', 'Povilas', 'Ignas', 'Saulius', 'Jokubas'];
// let pirmasPaskutinis = [`Pirmas - ${masyvas.at(0)}, Paskutinis - ${masyvas.at(-1)}`];

// //Išveda pirmą ir paskutinį masyvo elementą
// console.log(`${pirmasPaskutinis}`);

// const vidurys = Math.floor(masyvas.length / 2);
// const duViduriniai = masyvas.slice(vidurys - 1, vidurys + 1);

// console.log(`
// Du viduriniai masyvo irašai: ${duViduriniai}
// Narų skaičius masyve: ${masyvas.length}`);
