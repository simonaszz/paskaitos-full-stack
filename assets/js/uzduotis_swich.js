
// Užduotis 2.1

// Sukuriame kintamuosius trims skaičiams
let sk1 = 2;
let sk2 = 4;
let sk3 = 5;

// Tikriname pirmą skaičių naudojant switch
switch (sk1) {
    case 1:
        console.log("Sk1 yra 1. Visų trijų skaičių suma:", sk1 + sk2 + sk3);
        break;
    case 2:
        console.log("Sk1 yra 2. Antro ir trečio skaičių sandauga:", sk2 * sk3);
        break;
    case 3:
        console.log("Sk1 yra 3. Pirmo skaičiaus kvadratas:", sk1 ** 2);
        break;
    default:
        console.log("Klaida: pirmas skaičius neatitinka nė vieno nurodyto varianto.");
        break;
}

// Užduotis 2.2

// Sukuriame kintamąjį klaidos kodui
let klaidosKodas = 404;

// Tikriname klaidos kodą naudojant switch
switch (klaidosKodas) {
    case 400:
        console.log("Klaida 400: Bloga užklausa. Bus bandoma iš naujo.");
        break;
    case 404:
        console.log("Klaida 404: Puslapis nerastas. Bus nukreipta į pagrindinį puslapį.");
        break;
    case 500:
        console.log("Klaida 500: Serverio klaida. Bus informuotas administratorius.");
        break;
    default:
        console.log("Nežinoma klaida. Bandykite dar kartą vėliau.");
        break;
}
