// 🔧 1. Sukurk funkciją, kuri iš objektų masyvo grąžina tik vardus naudotojų, kurie yra aktyvūs.
// Temos: filter, map, destructuring
const users = [
    { name: "Jonas", isActive: true },
    { name: "Aistė", isActive: false },
    { name: "Mantas", isActive: true }
];

// Tikėtinas rezultatas: ["Jonas", "Mantas"]

function getActiveUserNames(users) {
    return users
        .filter(user => user.isActive)
        .map(({ name }) => name);
}
console.log(getActiveUserNames(users)); // ["Jonas", "Mantas"]



// 🔄 2. Konvertuok masyvą į objektą, kurio raktai yra naudotojų ID, o reikšmės – naudotojų objektai.
// Temos: reduce, destructuring
const users = [
    { id: 1, name: "Jonas" },
    { id: 2, name: "Aistė" }
];

// Tikėtinas rezultatas:
// { 1: {id: 1, name: "Jonas"}, 2: {id: 2, name: "Aistė"} }
function convertArrayToObject(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

console.log(convertArrayToObject(users)); // { 1: { name: "Jonas" }, 2: { name: "Aistė" } }


// 📄 3. Parašyk šabloninį literatą (template literal), kuris grąžina tvarkingą naudotojo profilį.
// Temos: template literals, destructuring
// const user = { name: "Jonas", age: 30, job: "programuotojas" };

// Rezultatas: "Jonas (30) dirba kaip programuotojas."



function getUserProfile({ name, age, job }) {
    return `${name} (${age}) dirba kaip ${job}.`;
}
const user = { name: "Jonas", age: 30, job: "programuotojas" };
console.log(getUserProfile(user)); // "Jonas (30) dirba kaip programuotojas."




// ↔️ 4. Apjunk du naudotojo duomenų objektus į vieną, naudodamas spread operatorių.
// Temos: spread operator, const
const baseInfo = { name: "Aistė", age: 28 };
const extraInfo = { job: "dizainerė", city: "Vilnius" };

// Rezultatas: { name: "Aistė", age: 28, job: "dizainerė", city: "Vilnius" }
function mergeUserData(baseInfo, extraInfo) {
    return { ...baseInfo, ...extraInfo };
}
console.log(mergeUserData(baseInfo, extraInfo)); // { name: "Aistė", age: 28, job: "dizainerė", city: "Vilnius" }



// 🧩 5. Parašyk funkciją, kuri išskaido argumentus su rest operatoriumi ir grąžina jų vidurkį.
// Temos: rest operator, arrow function
average(4, 8, 10); // Rezultatas: 7.33
function average(...numbers) {
    const sum = numbers.reduse((acc, num) => acc + num, 0);
    return (sum / numbers.length).toFixed(2);
}
console.log(average(4, 8, 10)); // 7.33


// 🧩 5. Parašyk funkciją, kuri išskaido argumentus su rest operatoriumi ir grąžina jų vidurkį.
// Temos: rest operator, arrow function
// average(4, 8, 10); // Rezultatas: 7.33


function average(...numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return (sum / numbers.length).toFixed(2);

}

console.log(average(4, 8, 10)); // 7.33

// 🔄 6. [BONUS] Parašyk async funkciją, kuri laukia 1 sekundę ir tada grąžina „Baigta“.
// Temos: async/await, Promise
// await waitAndReturn(); // "Baigta"
async function waitAndReturn() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Baigta";
}


waitAndReturn().then(result => console.log(result)); // "Baigta"

// 📚 7. Sukurk Map struktūrą naudotojams, kuri leidžia greitai pasiekti naudotoją pagal ID.
// Temos: Map, forEach
// // Pasiekimas: usersMap.get(2) -> { id: 2, name: "Aistė" }

const users = [
    { id: 1, name: "Jonas" },
    { id: 2, name: "Aistė" }
];
function createUsersMap(users) {
    const usersMap = new Map();
    users.forEach(user => usersMap.set(user.id, user));
    return usersMap;
}   
const usersMap = createUsersMap(users);
console.log(usersMap.get(2)); // { id: 2, name: "Aistė" }


// 🧼 8. Iš masyvo pašalink pasikartojančius skaičius naudodamas Set.
// Temos: Set, spread operator
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// // Rezultatas: [1, 2, 3, 4, 5]

const numbers = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]


// 🔂 9. [BONUS] Sukurk modulinį failą math.js, kuris eksportuoja sum, multiply ir average funkcijas.
// Temos: modules (ES6 export, import)
// // math.js
// export const sum = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const average = (...nums) => nums.reduce((a, b) => a + b, 0) / nums.length;

// 🧠 10. Sukurk funkciją, kuri naudoja destruktūrizaciją kaip parametrą ir iš objekto pasiima tik name ir age.
// Temos: function parameter destructuring
function showUser({ name, age }) {
  return `${name} yra ${age} metų.`;
}

showUser({ name: "Jonas", age: 25, city: "Kaunas" });
// Rezultatas: "Jonas yra 25 metų."
console.log(showUser({ name: "Jonas", age: 25, city: "Kaunas" })); // "Jonas yra 25 metų."