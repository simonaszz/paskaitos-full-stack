
// let naujasKlasesPavadinimas = "mano gera klase";
// let papildomasBalas = 2;

// let studentas = {
//     vardas: 'Tomas',
//     pavarde: 'Tomauskas',
//     amzius: 20,
//     klasesPavadinimas: '',
//     pazymiai: [7, 8, 9, 10],
//     vidurkis: function(balas) {
//         let suma = 0;
//         for (const pazymys of this.pazymiai) {
//             suma += pazymys;
//         }
//         return suma / this.pazymiai.length + balas;
//     },
//     pasveikinti: function() {
//         console.log('Labas, ' + this.vardas + ' iš ' + this.klasesPavadinimas);
//     }
// };

// console.log(studentas.vidurkis(papildomasBalas));
// studentas.klasesPavadinimas = naujasKlasesPavadinimas;
// studentas.pasveikinti();
// darbuotojas.keitiEtata('puse etato');


// 1. Susikurkite darbuotojo objektą, kuriame turėtumėte šias savybes: vardas,

// pavardė, dabartinis atlyginimas, etatas. Šiame objekte sukurkite funkciją, kuri
// per argumentus priimtų procentus ir paskaičiuotų koks būtų darbuotojo
// atlyginimas, jei jo atlyginimas būtų pakeltas per nurodytą kiekį procentų. Taip
// pat, susikurkite funkciją, kuri per argumentus priimtų atnaujintą etato skaičių,
// ji turėtų paskaičiuoti kiek pasikeistų darbuotojo atlyginimas, jei jis pradėtų
// dirbti nurodytu etatu (tarkim jei dirba pilnu etatu ir atlyginimas 1000 eurų, tai
// per pusę sumažinus etatą (argumentuose būtų 0.5) jo atlyginimas kristų iki
// 500). Iškvieskite šias objekto funkcijas ir išsiveskite gautus atsakymus.


let procentai = 10;
let etatas = 0.2;


let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    atlyginimas: 1200,
    etatas: 1,
    pakeltiAtlyginima: function(procentai) {
        return this.atlyginimas + (this.atlyginimas * procentai / 100);
    },
    keistiEtata: function(naujasEtatas) {
        return this.atlyginimas * naujasEtatas;
    }

}
console.log('Atlyginimas po pakelimo: ' + darbuotojas.pakeltiAtlyginima(procentai));
console.log(darbuotojas.keistiEtata(etatas));
