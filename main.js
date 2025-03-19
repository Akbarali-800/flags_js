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
              container.appendChild(countryCard);
            });
        });
    }
  
    fetchCountries();
  });