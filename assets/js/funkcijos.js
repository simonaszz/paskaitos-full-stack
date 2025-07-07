// Užduotys (1/3)

// 1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote

// programavimą. Iškvieskite šią funkciją tris kartus.

function as() {

    info = 'Mano vardas yra Simonas <br>';
    info += 'Pasirinkau programavima,nes man patinka kurti naujas programas <br><br>';


    document.getElementById('as').innerHTML += info;

}
for (let i = 0; i < 3; i++) {
    as();
}

// 2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5

// kartus.


function eilerastis() {
    let tekstas = '';
    tekstas += "Pirmoji saulė teka rytuos,<br>";
    tekstas += "Antroji mintis šviesia dainuos,<br>";
    tekstas += "Trečioji gėlė žydi lyg sniegas,<br>";
    tekstas += "Ketvirta diena – pilna vilties,<br>";
    tekstas += "Penktoji šypsena – širdies!<br><br>";

    document.getElementById('eilerastis').innerHTML += tekstas;

}

for (let i = 0; i < 5; i++) {
    eilerastis();
}

// 3. Create three functions, each outputting different text. Call each function once.

// Call all three functions one time.


function text1() {
    let text = 'First text<br>';
    if (document.getElementById('text1')) {
        document.getElementById('text1').innerHTML += text;
    }
}

function text2() {
    let text = 'Second text<br>';
    if (document.getElementById('text2')) {
        document.getElementById('text2').innerHTML += text;
    }
}

function text3() {
    let text = 'Third text<br>';
    if (document.getElementById('text3')) {
        document.getElementById('text3').innerHTML += text;
    }
}

let functionsArr = [text1, text2, text3];

// Call the functions
for (let i = 0; i < functionsArr.length; i++) {
    functionsArr[i]();
}


// Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita.
// Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią
// trečiąją funkciją už visų funkcijų ribų.



// // Funkcija 1
// function tekstas1() {
//     document.getElementById("rezultatas").innerHTML += "Tai yra pirmoji teksto eilutė.<br>";
// }

// // Funkcija 2
// function tekstas2() {
//     document.getElementById("rezultatas").innerHTML += "Tai yra antroji teksto eilutė.<br>";
// }

// // Funkcija 3 – kviečia pirmą ir antrą
// function abiTekstai() {
//     tekstas1();
//     tekstas2();
// }

// // Funkcijos kvietimas už visų funkcijų ribų
// abiTekstai();



// Užduotys(1 / 2)

// 9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus

// perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite
// kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso
// gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir
// įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.


function pasisveikinti(vardas) {
    document.getElementById("pasisveikinimas").innerHTML += "Labas, " + vardas + "!<br>";
}


function atsisveikinti(vardas) {
    document.getElementById("pasisveikinimas").innerHTML += "Viso gero, " + vardas + "!<br>";
}

// Kintamasis vardui
let manoVardas = "Simonas";

// Funkcijų kvietimas su argumentu
pasisveikinti(manoVardas);
atsisveikinti(manoVardas);




// 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
// kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
// tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų,
// duodant skirtingus skaičius.

function palygintiSkaicius(a, b) {
    if (a > b) {
        document.getElementById("rezultatas").innerHTML += a + " yra didesnis už " + b + "<br>";
    } else if (a < b) {
        document.getElementById("rezultatas").innerHTML += b + " yra didesnis už " + a + "<br>";
    } else {
        document.getElementById("rezultatas").innerHTML += "Skaičiai " + a + " ir " + b + " yra lygūs<br>";
    }
}

// Funkcijos kvietimai su skirtingais skaičiais
palygintiSkaicius(5, 3);
palygintiSkaicius(7, 12);
palygintiSkaicius(8, 8);



//     Užduotys (2/2)

// 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,

// modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
// kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant
// skirtingus duomenis jai.

function automobilioInfo(auto) {
    let info = `<b>Markė:</b> ${auto.marke}<br>`;
    info += `<b>Modelis:</b> ${auto.modelis}<br>`;
    info += `<b>Gamybos metai:</b> ${auto.gamybosMetai}<br>`;
    info += `<b>Darbinis tūris:</b> ${auto.darbinisTuris} L<br><br>`;

    document.getElementById("automobiliai").innerHTML += info;
}

let auto1 = {
    marke: 'Audi',
    modelis: 'A4',
    gamybosMetai: 2020,
    darbinisTuris: 2.0
}
let auto2 = {
    marke: 'BMW',
    modelis: 'X5',
    gamybosMetai: 2018,
    darbinisTuris: 3.0
}

automobilioInfo(auto1);
automobilioInfo(auto2);

// 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du

// skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
// pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
// funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
// perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą
// kartų.

function sudetis(a, b) {
    document.getElementById("sudetis").innerHTML += `${a} + ${b} = ${a + b}<br>`;
}

function atimciais(a, b) {
    document.getElementById("atimtis").innerHTML += `${a} - ${b} = ${a - b}<br>`;
}

function daugyba(a, b) {
    document.getElementById("daugyba").innerHTML += `${a} * ${b} = ${a * b}<br>`;
}
function dalyba(a, b) {
    if (b !== 0) {
        document.getElementById("dalyba").innerHTML += `${a} / ${b} = ${a / b}<br>`;
    } else {
        document.getElementById("dalyba").innerHTML += "Dalyba iš nulio negalima!<br>";
    }
}
function sugeneruotiIrPaskaiciuoti() {
    let sk1 = Math.floor(Math.random() * 100) + 1; // Atsitiktinis skaičius nuo 1 iki 100
    let sk2 = Math.floor(Math.random() * 100) + 1; // Atsitiktinis skaičius nuo 1 iki 100

    sudetis(sk1, sk2);
    atimciais(sk1, sk2);
    daugyba(sk1, sk2);
    dalyba(sk1, sk2);
}
// Funkcijos kvietimas

for (let i = 0; i < 4; i++) {
    sugeneruotiIrPaskaiciuoti();
}



// Užduotys (1/3)

// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje

// išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
// (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
// duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.



function zoddziuIlgiai(zodziai) {
    let rezultatas ='';
    for (let i = 0; i< zodziai.length; i++) {
        rezultatas += `Žodis: ${zodziai[i]}, ilgis: ${zodziai[i].length} simbolių<br>`;
    }
    document.getElementById('zodziuIlgiai').innerHTML = rezultatas;
}
// Užpildytas žodžių masyvas
let zodziuMasyvas = ['programavimas', 'JavaScript', 'funkcijos', 'masyvai', 'HTML', 'CSS'];
// Funkcijos kvietimas
zoddziuIlgiai(zodziuMasyvas);


// 14.Sukurkite funkciją, kuri per argumentus gautų skaičių masyvą. Funkcijoje
// išveskite visus masyvo skaičius atskirose eilutėse, nurodant skaičiaus   
// indeksą ir vertę. Už funkcijos ribų susikurkite skaičių masyvą ir užpildykite
// jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.

function skaiciuMasyvas(skaiciai) {
    let rezultatas = '';
    for (let i = 0; i < skaiciai.length; i++) {
        rezultatas += `Indeksas: ${i}, Skaičius: ${skaiciai[i]}<br>`;
    }
    document.getElementById('skaiciuMasyvas').innerHTML = rezultatas;
}
// Užpildytas skaičių masyvas
let skaiciuMasyvas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Funkcijos kvietimas
skaiciuMasyvas(skaiciuMasyvas1);


// 15.Sukurkite funkciją, kuri per argumentus gautų skaičių masyvą. Funkcijoje
// išveskite visus masyvo skaičius atskirose eilutėse, nurodant skaičiaus
// indeksą, vertę ir ar skaičius yra lyginis ar nelyginis. Už funkcijos ribų
// susikurkite skaičių masyvą ir užpildykite jį duomenimis. Iškvieskite
// sukurtą funkciją perduodant turimą masyvą.


function skaiciuMasyvas2(skaiciai) {
    let rezultatas = '';
    for (let i = 0; i < skaiciai.length; i++) {
        let lyginis = (skaiciai[i] % 2 === 0) ? 'lyginis' : 'nelyginis';
        rezultatas += `Indeksas: ${i}, Skaičius: ${skaiciai[i]}, ${lyginis}<br>`;
    }
    document.getElementById('skaiciuMasyvas2').innerHTML = rezultatas;
}
// Užpildytas skaičių masyvas
let skaiciuMasyvas3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Funkcijos kvietimas
skaiciuMasyvas2(skaiciuMasyvas3);








// 16.Sukurkite funkciją, kuri per argumentus gautų skaičių masyvą. Funkcijoje
// išveskite visus masyvo skaičius atskirose eilutėse, nurodant skaičiaus
// indeksą, vertę ir ar skaičius yra lyginis ar nelyginis. Už funkcijos ribų
// susikurkite skaičių masyvą ir užpildykite jį duomenimis. Iškvieskite
// sukurtą funkciją perduodant turimą masyvą.
function skaiciuMasyvas3(skaiciai) {
    let rezultatas = '';
    for (let i = 0; i < skaiciai.length; i++) {
        let lyginis = (skaiciai[i] % 2 === 0) ? 'lyginis' : 'nelyginis';
        rezultatas += `Indeksas: ${i}, Skaičius: ${skaiciai[i]}, ${lyginis}<br>`;
    }
    document.getElementById('skaiciuMasyvas3').innerHTML = rezultatas;
}
// Užpildytas skaičių masyvas
let skaiciuMasyvas4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Funkcijos kvietimas
skaiciuMasyvas3(skaiciuMasyvas4);





// 17.Sukurkite funkciją, kuri per argumentus gautų skaičių masyvą. Funkcijoje
// išveskite visus masyvo skaičius atskirose eilutėse, nurodant skaičiaus
// indeksą, vertę ir ar skaičius yra lyginis ar nelyginis. Už funkcijos ribų
// susikurkite skaičių masyvą ir užpildykite jį duomenimis. Iškvieskite
// sukurtą funkciją perduodant turimą masyvą.



function skaiciuMasyvas4(skaiciai) {
    let rezultatas = '';
    for (let i = 0; i < skaiciai.length; i++) {
        let lyginis = (skaiciai[i] % 2 === 0) ? 'lyginis' : 'nelyginis';
        rezultatas += `Indeksas: ${i}, Skaičius: ${skaiciai[i]}, ${lyginis}<br>`;
    }
    document.getElementById('skaiciuMasyvas4').innerHTML = rezultatas;
}
// Užpildytas skaičių masyvas
let skaiciuMasyvas5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// // Funkcijos kvietimas
// skaiciuMasyvas4(skaiciuMasyvas5);


// 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite

// šią funkciją ir išspausdinkite gautus rezultatus.

// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.

// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
// norite būdu.

// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
// 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
// perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.





  // 17. Funkcija, grąžinanti sakinį
        function grazintiSakini() {
            return "Sveiki atvykę į JavaScript pasaulį!";
        }

        document.getElementById('sakinys').innerHTML = grazintiSakini();

        // 18. Funkcija, grąžinanti atsitiktinį skaičių
        function atsitiktinisSkaicius() {
            return Math.floor(Math.random() * 100); // nuo 0 iki 99
        }

        let rezultatai = '';
        for (let i = 0; i < 5; i++) {
            rezultatai += atsitiktinisSkaicius() + '<br>';
        }
        document.getElementById('skaiciai').innerHTML = rezultatai;

        // 19. Funkcija su studentais
        function studentoVidurkis(vardas, vidurkis) {
            return `Studentas ${vardas} turi vidurkį ${vidurkis}.`;
        }

        let studentas1 = studentoVidurkis('Simonas', 8.5);
        let studentas2 = studentoVidurkis('Tomas', 9.0);    
        document.getElementById('studentai').innerHTML += studentas1 + '<br>';
        document.getElementById('studentai').innerHTML += studentas2 + '<br>';


//         20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
// duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
// iškvieskite šią funkciją, perduodant ciklo kintamąjį.

// 21.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti
// ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis).
// Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje
// išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10
// false, 11 true, ...).

function maziausiasDaliklis(skaicius) {
    for (let i = 2; i <= Math.sqrt(skaicius); i++) {
        if (skaicius % i === 0) {
            return i;
        }
    }
    return skaicius; // Jei nėra daliklių, grąžiname patį skaičių
}       
// Ciklas nuo 10 iki 30
let dalikliai = '';
for (let i = 10; i <= 30; i++) {
    dalikliai += `Skaičius: ${i}, Mažiausias daliklis: ${maziausiasDaliklis(i)}<br>`;
}
document.getElementById('maziausiasDaliklis').innerHTML = dalikliai;
// 21. Funkcija, tikrinanti ar skaičius pirminis
function arPirminis(skaicius) {
    if (skaicius < 2) return false;
    for (let i = 2; i <= Math.sqrt(skaicius); i++) {
        if (skaicius % i === 0) {
            return false;
        }
    }
    return true;
}
// Ciklas nuo 2 iki 15
let pirminiai = '';
for (let i = 2; i <= 15; i++) {
    pirminiai += `Skaičius: ${i}, Pirminis: ${arPirminis(i)}<br>`;
}
document.getElementById('pirminiai').innerHTML = pirminiai;
