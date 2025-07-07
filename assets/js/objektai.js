// Užduotys (2/6)

// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
// sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
// biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
// panaudoti new Date(Date.now()).getFullYear() funkciją).




let filmas = {
    pavadinimas: 'Pavasaris',
    rezisierius: 'Velyvis',
    biudzetas: 10000,
    kiekUzdiboPoIsleidimo: 100000,
    zanras: 'Komedija',
    trukme: 160,
    isleidimoMetai: 2017,
    aktoriuSarasas: ['Rudokas', 'Jampolskis', 'Balsyte']
};
// Išvedame visą informaciją apie filma
console.log('Informacija apie filma:');
console.log('Pavadinimas:', filmas.pavadinimas);
console.log('Rezisierius:', filmas.rezisierius);
console.log('Biudzetas:', filmas.biudzetas, 'USD');
console.log('Uzdarbis:', filmas.kiekUzdiboPoIsleidimo, 'USD');
console.log('Zanras:', filmas.zanras);
console.log('Trukme:', filmas.trukme, 'min.');
console.log('Isleidimo metai:', filmas.isleidimoMetai);
console.log('Aktoriai:', filmas.aktoriuSarasas.join(', '));

// Papildoma informacija:
console.log('Pelnas:', filmas.kiekUzdiboPoIsleidimo - filmas.biudzetas, 'USD');
console.log('Aktoriu kiekis:', filmas.aktoriuSarasas.length);
console.log('Filmo amzius:', new Date(Date.now()).getFullYear() - filmas.isleidimoMetai, 'metai');




console.log('------------------------------------------------');
// Užduotys (3/6)

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename

// objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
// išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
// kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?



const knyga1 = {
    pavadinimas: 'Paslapčių miškas',
    autorius: 'Jonas Petraitis',
    zanras: 'Fantastika',
    kaina: 12.99,
    puslapiuKiekis: 320,
    skyriai: ['Įžanga', 'Kelionė', 'Miško paslaptys', 'Atranka', 'Pabaiga'],
    isleidimoMetai: 2020,
    galimaRastiKnygyne: true
};

const knyga2 = {
    pavadinimas: 'Tikroji istorija',
    autorius: 'Agnė Vaitkutė',
    zanras: 'Biografija',
    kaina: 18.50,
    puslapiuKiekis: 280,
    skyriai: ['Pradžia', 'Vaikystė', 'Paauglystė', 'Karjera', 'Šiandiena', 'Pamokos'],
    isleidimoMetai: 2022,
    galimaRastiKnygyne: false
};


// Išvedame informaciją apie abi knygas
console.log('Knyga 1:', knyga1);
console.log('Knyga 2:', knyga2);

// Nustatome kuri knyga plonesnė
if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
    console.log(`Plonesnė knyga: "${knyga1.pavadinimas}" (${knyga1.puslapiuKiekis} puslapiai)`);
} else if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
    console.log(`Plonesnė knyga: "${knyga2.pavadinimas}" (${knyga2.puslapiuKiekis} puslapiai)`);
} else {
    console.log("Abi knygos turi tiek pat puslapių.");
}


// Patikriname ar padvigubinus pigesnės knygos kainą, ji būtų brangesnė už kitą
let pigesne, brangesne;
if (knyga1.kaina < knyga2.kaina) {
    pigesne = knyga1;
    brangesne = knyga2;
} else {
    pigesne = knyga2;
    brangesne = knyga1;
}

const padvigubintaKaina = pigesne.kaina * 2;
if (padvigubintaKaina > brangesne.kaina) {
    console.log(`Padvigubinus knygos '${pigesne.pavadinimas}' kainą (${padvigubintaKaina.toFixed(2)} €), ji būtų brangesnė už "${brangesne.pavadinimas}".`);
} else {
    console.log(`Net padvigubinus knygos '${pigesne.pavadinimas}' kainą (${padvigubintaKaina.toFixed(2)} €), ji vis tiek nebūtų brangesnė už "${brangesne.pavadinimas}".`);
}

console.log('------------------------------------------------');
// Užduotys (4/6)

// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte

// sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
// turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
// visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).

// Sukuriame 3 objektus su visomis savybėmis
const preke1 = {
    pavadinimas: 'Televizorius',
    kaina: 850,
    savikaina: 600,
    kodas: 'TV100',
    kiekis: 5,
    dezesMatmenys: { x: 100, y: 60, z: 15 }
};

const preke2 = {
    pavadinimas: 'Skalbimo mašina',
    kaina: 1200,
    savikaina: 900,
    kodas: 'SKM200',
    kiekis: 3,
    dezesMatmenys: { x: 70, y: 85, z: 60 }
};

const preke3 = {
    pavadinimas: 'Virdulys',
    kaina: 45,
    savikaina: 25,
    kodas: 'VRD300',
    kiekis: 30,
    dezesMatmenys: { x: 25, y: 20, z: 15 }
};

// Išvedame visą informaciją apie prekes
console.log('Prekė 1:', preke1);
console.log('Prekė 2:', preke2);
console.log('Prekė 3:', preke3);

// Visų prekių kainos vienoje eilutėje
console.log(
    'Pirma prekė kainuoja - ' + preke1.kaina + ' €, antra prekė kainuoja - ' + preke2.kaina + ' €, trečia prekė kainuoja - ' + preke3.kaina + ' €'
);

// Randame brangiausią prekę
let brangiausiaPreke = preke1;

if (preke2.kaina > brangiausiaPreke.kaina) {
    brangiausiaPreke = preke2;
}
if (preke3.kaina > brangiausiaPreke.kaina) {
    brangiausiaPreke = preke3;
}

console.log('Brangiausia prekė yra: ' + brangiausiaPreke.pavadinimas + ', kaina: ' + brangiausiaPreke.kaina + ' €');

// Kiekvienos dėžės tūris: x * y * z
let turis1 = preke1.dezesMatmenys.x * preke1.dezesMatmenys.y * preke1.dezesMatmenys.z;
let turis2 = preke2.dezesMatmenys.x * preke2.dezesMatmenys.y * preke2.dezesMatmenys.z;
let turis3 = preke3.dezesMatmenys.x * preke3.dezesMatmenys.y * preke3.dezesMatmenys.z;

console.log('Prekės 1 dėžės tūris: ' + turis1 + ' cm³');
console.log('Prekės 2 dėžės tūris: ' + turis2 + ' cm³');
console.log('Prekės 3 dėžės tūris: ' + turis3 + ' cm³');

// Pelningumas: (kaina - savikaina) * kiekis
let pelnas1 = (preke1.kaina - preke1.savikaina) * preke1.kiekis;
let pelnas2 = (preke2.kaina - preke2.savikaina) * preke2.kiekis;
let pelnas3 = (preke3.kaina - preke3.savikaina) * preke3.kiekis;

console.log('Prekės 1 pelningumas: ' + pelnas1.toFixed(2) + ' €');
console.log('Prekės 2 pelningumas: ' + pelnas2.toFixed(2) + ' €');
console.log('Prekės 3 pelningumas: ' + pelnas3.toFixed(2) + ' €');



console.log('------------------------------------------------');

// Užduotys (5/6)

// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
// reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
// spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
// informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
// įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
// vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
// kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).



// 1. Sukuriame tuščią objektą
let automobilis = {};

// 2. Į objektą po vieną priskiriame savybes su reikšmėmis
automobilis.marke = 'Toyota';
automobilis.modelis = 'Corolla';
automobilis.rida = 135000; // kilometrai
automobilis.gamybosMetai = 2015;
automobilis.spalva = 'Pilka';
automobilis.darbinisTuris = 1.6; // litrai
automobilis.dauzta = false;
automobilis.parduodama = true;



// 3. Išvedame visą automobilio informaciją
console.log('Automobilio duomenys:');
console.log('Markė: ' + automobilis.marke);
console.log('Modelis: ' + automobilis.modelis);
console.log('Rida: ' + automobilis.rida + ' km');
console.log('Gamybos metai: ' + automobilis.gamybosMetai);
console.log('Spalva: ' + automobilis.spalva);
console.log('Darbinis tūris: ' + automobilis.darbinisTuris + ' l');
console.log('Ar daužta: ' + (automobilis.dauzta ? 'Taip' : 'Ne'));
console.log('Ar parduodama: ' + (automobilis.parduodama ? 'Taip' : 'Ne'));

//  4. Apskaičiuojame automobilio amžių
let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let automobilioAmzius = dabartiniaiMetai - automobilis.gamybosMetai;

console.log('Automobiliui yra: ' + automobilioAmzius + ' metų');


// 5. Apskaičiuojame vidutinę ridą per metus
let vidutiniskaiPerMetus = automobilis.rida / automobilioAmzius;

console.log('Vidutinė rida per metus: ' + vidutiniskaiPerMetus.toFixed(2) + ' km');





// Užduotys (6/6)

// 6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes

// su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
// Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai
// padarykite.


console.log('------------------------------------------------');

// Sukuriame tuščią objektą
let filmass = {};

// Priskiriame savybes atskirai
filmas.pavadinimas = 'Tarp žvaigždžių';
filmas.rezisierius = 'Christopher Nolan';
filmas.isleidimoMetai = 2014;
filmas.trukmeMinutemis = 169;
filmas.imdbReitingas = 8.6;
filmas.zanrai = ['Mokslinė fantastika', 'Nuotykiai', 'Drama'];
filmas.matytasKarta = 3;

// Išvedame informaciją
console.log('Filmo informacija:');
console.log('Pavadinimas: ' + filmas.pavadinimas);
console.log('Režisierius: ' + filmas.rezisierius);
console.log('Išleidimo metai: ' + filmas.isleidimoMetai);
console.log('Trukmė: ' + filmas.trukmeMinutemis + ' min');
console.log('IMDb reitingas: ' + filmas.imdbReitingas);
console.log('Žanrai: ' + filmas.zanrai.join(', '));
console.log('Peržiūrėtas kartų: ' + filmas.matytasKarta);

// Papildomi veiksmai:

// 1. Apskaičiuojame kiek metų nuo išleidimo
let dabartiniaiMetaii = new Date().getFullYear();
let praejoMetu = dabartiniaiMetai - filmas.isleidimoMetai;
console.log('Nuo filmo išleidimo praėjo: ' + praejoMetu + ' metų');

// 2. Apskaičiuojame bendrą laiką, kiek laiko žmogus jau praleido žiūrėdamas šį filmą
let visoPraleistaMinuciu = filmas.trukmeMinutemis * filmas.matytasKarta;
console.log('Iš viso filmą žiūrėta: ' + visoPraleistaMinuciu + ' minučių');

// 3. Apskaičiuojame ar reitingas viršija 8 balus
if (filmas.imdbReitingas >= 8) {
    console.log('Filmas laikomas aukštai įvertintu!');
} else {
    console.log('Filmas vidutinio įvertinimo.');
}

console.log('------------------------------------------------');


// Užduotys (7/6)
// 7. Sukurkite vieną arba kelis objektus asmens duomenims saugoti.

// Kiekviename objekte sudėkite bent 6 savybes su reikšmėmis:
// Pvz.: vardas, pavardė, amžius, miestas, ūgis, svoris, ar sportuoja.

// Išveskite visą informaciją apie asmenį.

// Apskaičiuokite ir išveskite:

// Kiek metų asmeniui liko iki 100 metų.

// Kokia yra asmens kūno masės indekso (KMI) reikšmė (svoris / (ūgis/100)^2).

// Ar žmogus laikomas aktyviu, jei jis sportuoja ir KMI < 25.

// Sukuriame tuščią objektą
const asmuo = {};

// Priskiriame savybes atskirai
asmuo.vardas = 'Simonas';
asmuo.pavarde = 'Simonaitis';
asmuo.amzius = 38;
asmuo.miestas = 'Kaunas';
asmuo.ugis = 172; // cm
asmuo.svoris = 80; // kg
asmuo.arSportuoja = false;

// Išvedame informaciją apie asmenį
console.log('Asmens duomenys:');
for (const raktas in asmuo) {
    let reiksme = asmuo[raktas];
    console.log(raktas + ': ' + reiksme);
}

// 1. Metų iki 100
let likoMetu = 100 - asmuo.amzius;
console.log('Metų iki 100: ' + likoMetu);

// 2. KMI skaičiavimas: svoris / (ūgis/100)^2
let ugisMetrais = asmuo.ugis / 100;
let kmi = asmuo.svoris / (ugisMetrais * ugisMetrais);
console.log('Kūno masės indeksas (KMI): ' + kmi.toFixed(2));

// 3. Ar žmogus aktyvus? (jei sportuoja ir KMI < 25)
let arAktyvus = asmuo.arSportuoja && kmi < 25;
console.log('Ar žmogus laikomas aktyviu? ' + (arAktyvus ? 'Taip' : 'Ne'));


console.log('------------------------------------------------');





