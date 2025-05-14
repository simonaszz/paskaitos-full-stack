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





// Užduotys (1/5)

// 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite

// visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

// 18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
// Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
// atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

// 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
// duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
// gautą vidurkį.

const zodziai = ['medis', 'namas', 'tvora', 'lietus'];

for (let i = 0; i < zodziai.length; i++) {
    console.log(i + ' - ' + zodziai[i]);
}


let pirkiniai = ['Pienas', 'Duona', 'Sviestas', 'Morkos', 'Kava', 'Obuoliai'];

console.log('Pirkiniiu skaicius:', pirkiniai.length);
pirkiniai.forEach(pirkiniai => {
    console.log('-' + pirkiniai);
});



let pazymiai = [8, 6, 5, 4, 9, 10];

let sum = 0;

for (let i = 0; i < pazymiai.length; i++) {
    sum += pazymiai[i];
}
let vidurkis = suma / pazymiai.length;

console.log("Pažymiai:");
for (let i = 0; i < pazymiai.length; i++) {
    console.log(pazymiai[i]);
}
console.log("Vidurkis: " + vidurkis.toFixed(2));




// Užduotys (2/5)

// 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir

// užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
// reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
// per dieną kilometrus, kurie yra didesni nei 150.

// 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
// Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
// galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt
// arba .json tipo.


let kilometrai = [120, 145, 90, 160, 200, 130, 155];

console.log("Nuvažiuoti daugiau nei 150 km per dieną:");

for (let i = 0; i < kilometrai.length; i++) {
    if (kilometrai[i] > 150) {
        console.log(kilometrai[i] + " km");
    }
}






let failai = ["duomenys.txt", "nuotrauka.jpg", "rezultatai.json", "dokumentas.pdf", "nustatymai.json", "sarasas.txt"];

console.log("Failai, su kuriais galima dirbti (.txt ir .json):");

for (let i = 0; i < failai.length; i++) {
    if (failai[i].endsWith(".txt") || failai[i].endsWith(".json")) {
        console.log(failai[i]);
    }
}


// Užduotys (3/5)

// 22.Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį

// duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant
// kiek raidžių sudaro jo pavadinimą.

// 23.Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą
// duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui,
// taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas
// "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu
// kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

let klaiduKodai = ["ui87", "sys12", "db01", "net05"];

// Apibrėžiame, ką reiškia kiekvienas kodas:
let klaiduAprasai = {
    ui87: "Grafinės sąsajos klaida navigacijoje",
    sys12: "Trūksta operatyviosios atminties sistemoje",
    db01: "Duomenų bazės klaida prisijungimo metu",
    net05: "Tinklo ryšio klaida – nepasiekiamas serveris"
};

console.log("Klaidų pranešimai administratoriui:");

for (let i = 0; i < klaiduKodai.length; i++) {
    let kodas = klaiduKodai[i];
    let aprasas = klaiduAprasai[kodas] || "Nežinoma klaida su kodu " + kodas;
    console.log(kodas + " → " + aprasas);
}



// Užduotys (4/5)

// 24.Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve
// yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus
// išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus
// atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu
// yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės
// užteks maždaug 11 dienų ir t.t.

// 25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai
// sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas
// gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų
// pažymių kiekį.


let likuciai = [74, 54, 32, 18];
let pardavimaiPerDiena = 5;

for (let i = 0; i < likuciai.length; i++) {
    let dienos = Math.floor(likuciai[i] / pardavimaiPerDiena);
    console.log(`${likuciai[i]} vnt. prekės užteks maždaug ${dienos} dienų`);
}



// Generuojame atsitiktinius pažymius (nuo 1 iki 10)
let pazymiai = [];
for (let i = 0; i < 10; i++) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
}

let suma = 0;
let neigiamuKiekis = 0;

console.log("Teigiami pažymiai:");

for (let i = 0; i < pazymiai.length; i++) {
    let pazymys = pazymiai[i];
    suma += pazymys;

    if (pazymys >= 5) {
        console.log(pazymys);
    } else {
        neigiamuKiekis++;
    }
}

let vidurkis = suma / pazymiai.length;

console.log("Vidurkis:", vidurkis.toFixed(2));
console.log("Neigiamų pažymių kiekis:", neigiamuKiekis);





// Užduotys (5/5)

// 26.Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento

// pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno
// studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir
// nurodykite kuris studentas turi didesnį vidurkį.

// 27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą

// duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro
// mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.


let studentas1 = [8, 6, 7, 9, 5];
let studentas2 = [4, 7, 6, 10, 8];

let suma1 = 0, suma2 = 0;

for (let i = 0; i < studentas1.length; i++) {
    suma1 += studentas1[i];
}
for (let i = 0; i < studentas2.length; i++) {
    suma2 += studentas2[i];
}

let vidurkis1 = suma1 / studentas1.length;
let vidurkis2 = suma2 / studentas2.length;

console.log("Studento 1 pažymiai:", studentas1.join(", "));
console.log("Studento 2 pažymiai:", studentas2.join(", "));
console.log("Studento 1 vidurkis:", vidurkis1.toFixed(2));
console.log("Studento 2 vidurkis:", vidurkis2.toFixed(2));

if (vidurkis1 > vidurkis2) {
    console.log("Studentas 1 turi didesnį vidurkį.");
} else if (vidurkis2 > vidurkis1) {
    console.log("Studentas 2 turi didesnį vidurkį.");
} else {
    console.log("Abu studentai turi vienodą vidurkį.");
}
