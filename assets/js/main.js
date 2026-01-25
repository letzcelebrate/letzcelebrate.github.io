async function loadPlaces() {
  const response = await fetch("assets/data/places.json");
  const places = await response.json();

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  places.forEach(place => {
    const card = document.createElement("div");
    card.className = "bg-white border rounded-xl p-4 flex gap-4";

    card.innerHTML = `
      <div class="w-28 h-28 bg-gray-200 rounded overflow-hidden">
        <img src="${place.image}" alt="${place.name}" class="w-full h-full object-cover">
      </div>

      <div class="flex-1">
        <h4 class="font-semibold text-lg">${place.name}</h4>
        <p class="text-sm text-gray-500">
          ${place.address} · <span class="underline cursor-pointer">voir sur la carte</span>
        </p>
        <p class="text-sm text-gray-700 mt-2 italic">
          ${place.description}
        </p>
      </div>

      <div class="text-sm text-right flex flex-col justify-end">
        <span class="text-gray-500">Prix à partir de</span>
        <span class="font-semibold text-lg">${place.priceFrom} €</span>
      </div>
    `;

    resultsContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadPlaces);
