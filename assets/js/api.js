async function getDadJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    });
    const dadJoke = await response.json();
    return dadJoke;
}

const medinisBajerisButton = document.getElementById('medinis-bajeris');
const pagrindinisSkyrius = document.getElementById('pagrindinis-skyrius');

medinisBajerisButton.addEventListener('click', async () => {
    const joke = await getDadJoke();
    pagrindinisSkyrius.textContent = joke.joke;
});


async function fetchMovie() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    const data = await response.json();
    console.log(data);
    return data;
}

async function handleSearch() {
    const input = document.getElementById("searchInput");
    const query = input.value.trim();

    if (!query) {
        alert("Įveskite šou pavadinimą");
        return;
    }

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();

        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ""; // išvalom senus rezultatus

        if (data.length === 0) {
            resultsContainer.innerHTML = "<p>Nieko nerasta.</p>";
            return;
        }

        data.forEach(item => {
            const show = item.show;
            const showElement = document.createElement("div");
            showElement.classList.add("p-4", "bg-white", "rounded", "shadow", "mb-4");

            showElement.innerHTML = `
                <h3 class="text-xl font-bold">${show.name}</h3>
                ${show.image ? `<img src="${show.image.medium}" alt="${show.name}" class="my-2">` : ""}
                <p><strong>Žanrai:</strong> ${show.genres.join(", ") || "Nenurodyta"}</p>
                <p><strong>Aprašymas:</strong> ${show.summary || "Nėra aprašymo"}</p>
            `;

            resultsContainer.appendChild(showElement);
        });

    } catch (error) {
        console.error("Klaida:", error);
        document.getElementById("results").innerHTML = "<p>Klaida gaunant duomenis</p>";
    }
}
