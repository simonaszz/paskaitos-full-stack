
// Užduotys (1/2)

// 7. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
// raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

const knygynas = {};
knygynas.pavadinimas = 'Knygu pasaulis';
knygynas.adresas = 'Laisves al.10, Kaunas';
knygynas.plotas = 300; //kv.m.
knygynas.kiekYraKnygu = 135250;
knygynas.darboLaikas = '10:00 - 20:00';
knygynas.arAtidaryta = true;






let bookstoreHTML = '<ul>';

for (const raktas in knygynas) {
    const niceTitle = raktas
        .replace(/([A-Z])/g, ' $1')  // tarpai tarp žodžių
        .replace(/^./, c => c.toUpperCase());  // didžioji raidė

    let value = knygynas[raktas];

    // Konvertuojam boolean į Taip / Ne
    if (typeof value === 'boolean') {
        value = value ? 'Taip' : 'Ne';
    }

    // Jei reikšmė ne string tipo – išvedam papildomai

        // bookstoreHTML += `<b>${niceTitle}</b>: ${value} <i>(Ne tekstinė reikšmė)</i></li><br>`;
      
        bookstoreHTML += `<li><b>${niceTitle}</b>: ${value}</li>`;
    
}

bookstoreHTML += '</ul>';

// Įdedam į HTML elementą su id 'knygynas'
document.getElementById('knygynas').innerHTML = bookstoreHTML;




console.log('------------------------------------------------');



