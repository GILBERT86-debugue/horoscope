document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("drawBtn");
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  drawBtn.addEventListener("click", async () => {
    // Effet rebond
    drawBtn.classList.add("bounce");
    setTimeout(() => drawBtn.classList.remove("bounce"), 400);

    result.classList.add("hidden");
    errorDiv.classList.add("hidden");
    loader.classList.remove("hidden");
    result.innerHTML = "";

    try {
      const response = await fetch("https://oracles-api.sidathsoeun.fr/oracle_api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          api_key: "SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!"
        })
      });

      if (!response.ok) throw new Error("Réponse non valide");

      const data = await response.json();

      const horoscope = data.horoscope;
      if (!horoscope || typeof horoscope !== "object") {
        throw new Error("Format inattendu");
      }

      loader.classList.add("hidden");
      result.classList.remove("hidden");

      for (const signe in horoscope) {
        const message = horoscope[signe];
        const card = document.createElement("div");
        card.classList.add("card-item");
        card.innerHTML = `<h3>🃏 ${signe}</h3><p>${message}</p>`;
        result.appendChild(card);
      }

    } catch (err) {
      loader.classList.add("hidden");
      errorDiv.classList.remove("hidden");
      errorDiv.textContent = "❌ Une erreur est survenue. Veuillez réessayer.";
      console.error("Erreur :", err.message);
    }



    
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("drawBtn");
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  drawBtn.addEventListener("click", () => {
    loader.classList.remove("hidden");  // Affiche le loader
    result.classList.add("hidden");     // Cache les résultats

   setTimeout(() => {
  loader.classList.add("hidden");
  result.classList.remove("hidden");
}, 30000); // 30000 ms = 30 secondes

  });
});




  function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Mise à jour toutes les secondes
  setInterval(updateClock, 1000);
  updateClock(); // première mise à jour immédiate



  