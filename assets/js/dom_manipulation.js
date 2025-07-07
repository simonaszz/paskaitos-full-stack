// let contact = document.querySelector('#contact');
// let contact2 = document.getElementById('contact');


// let contact3 = document.getElementById('#contact');
// let contact4 = document.querySelectorAll('contact');

// console.log(contact); // <div id="contact">...</div>
// console.log(contact2); // <div id="contact">...</div>   


// let listElement = document.querySelectorAll(' ul >li');
// console.log(listElement); // NodeList(3) [li, li, li]
// listElements.foreach((item) => {
//     console.log(item.textContent); // Išves kiekvieno <li> tekstą
// });






let element = document.createElement("div");

element.innerText = 'Naujas DIV Elementas';

document.querySelector('#rezultatas').appendChild(element);

element.addEventListener("click", () => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.innerText = 'You clicked on the document';
});