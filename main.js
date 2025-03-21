// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById("countries-container");
//     const toggleModeBtn = document.getElementById("toggle-mode");
//     const searchInput = document.getElementById("search");
//     let darkMode = false;
  
//     toggleModeBtn.addEventListener("click", () => {
//       darkMode = !darkMode;
//       document.body.classList.toggle("dark-mode", darkMode);
//     });
  
//     searchInput.addEventListener("input", (e) => {
//       const searchText = e.target.value.toLowerCase();
//       fetchCountries(searchText);
//     });
  
//     function fetchCountries(searchText = "") {
//       fetch("https://restcountries.com/v3.1/all")
//         .then((response) => response.json())
//         .then((data) => {
//           container.innerHTML = "";
//           data
//             .filter((country) => country.name.common.toLowerCase().includes(searchText))
//             .forEach((country) => {
//               const countryCard = document.createElement("div");
//               countryCard.className = "country-card";
//               countryCard.innerHTML = `
//                 <img src="${country.flags.png}" alt="${country.name.common}" />
//                 <h2>${country.name.common}</h2>
//               `;
//               container.appendChild(countryCard);
//             });
//         });
//     }
  
//     fetchCountries();
//   });




// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("countries-container");
//   const toggleModeBtn = document.getElementById("toggle-mode");
//   const searchInput = document.getElementById("search");
//   let darkMode = false;

//   toggleModeBtn.addEventListener("click", () => {
//     darkMode = !darkMode;
//     document.body.classList.toggle("dark-mode", darkMode);
//   });

//   searchInput.addEventListener("input", (e) => {
//     const searchText = e.target.value.toLowerCase();
//     fetchCountries(searchText);
//   });

//   function fetchCountries(searchText = "") {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         container.innerHTML = "";
//         data
//           .filter((country) => country.name.common.toLowerCase().includes(searchText))
//           .forEach((country) => {
//             const countryCard = document.createElement("div");
//             countryCard.className = "country-card";
//             countryCard.innerHTML = `
//               <img src="${country.flags.png}" alt="${country.name.common}" />
//               <h2>${country.name.common}</h2>
//             `;
//             countryCard.addEventListener("click", () => {
//               window.location.href = `country.html?name=${encodeURIComponent(country.name.common)}`;
//             });
//             container.appendChild(countryCard);
//           });
//       });
//   }

//   fetchCountries();
// });



document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("countries-container");
  const toggleModeBtn = document.getElementById("toggle-mode");
  const searchInput = document.getElementById("search");
  let darkMode = false;

  toggleModeBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
  });

  searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    fetchCountries(searchText);
  });

  function fetchCountries(searchText = "") {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        container.innerHTML = "";
        data
          .filter((country) => country.name.common.toLowerCase().includes(searchText))
          .forEach((country) => {
            const countryCard = document.createElement("div");
            countryCard.className = "country-card";
            countryCard.innerHTML = `
              <img src="${country.flags.png}" alt="${country.name.common}" />
              <h2>${country.name.common}</h2>
            `;
            countryCard.addEventListener("click", () => {
              window.location.href = `country.html?name=${encodeURIComponent(country.name.common)}`;
            });
            container.appendChild(countryCard);
          });
      });
  }

  fetchCountries();
});

// country.html sahifasi uchun skript
if (window.location.pathname.includes("country.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const countryName = params.get("name");
    const detailsContainer = document.getElementById("country-details");

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        const country = data[0];
        detailsContainer.innerHTML = `
          <h1>${country.name.common}</h1>
          <img src="${country.flags.png}" alt="${country.name.common}" />
          <p><strong class="akua">Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
          <p><strong class="akua">Region:</strong> ${country.region}</p>
          <p><strong class="akua">Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong class="akua">Languages:</strong> ${Object.values(country.languages).join(", ")}</p>
          <p><strong class="akua">Currency:</strong> ${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</p>
        `;
      });
  });
}