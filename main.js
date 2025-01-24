function fetchSimpsonsJSON() {
  const url = `https://thesimpsonsquoteapi.glitch.me/quotes`; // Pas besoin d'inclure 'character' ici

  axios
    .get(url) // Requête API
    .then(function (response) {
      return response.data; // Les données de la réponse (un tableau)
    })
    .then(function (simpsons) {
      console.log("data decoded from JSON:", simpsons);

      // On récupère le premier objet du tableau
      const simpsonProfil = simpsons[0];
      const quote = simpsonProfil.quote; // Citation
      const character = simpsonProfil.character; // Nom du personnage
      const image = simpsonProfil.image; // Image du personnage

      // Construire le contenu HTML
      const simpsonsHtml = `
            <div class="simpson-card">
                <div class="quote-bubble">${quote}</div>
                <img src="${image}" alt="Image de ${character}" />
                <h2>${character}</h2>
            </div>
        `;

      // Insérer le contenu HTML dans la page
      document.querySelector("#simpsons-quotes").innerHTML = simpsonsHtml;
    })
    .catch(function (error) {
      console.error("Erreur lors de la récupération des données :", error);
    });
}

fetchSimpsonsJSON();

// cree un bouton
function fetchSimpsonsDetailAxios() {
  const url = `https://thesimpsonsquoteapi.glitch.me/quotes/`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // Les données de la réponse (un tableau)
    })
    .then(function (simpsons) {
      console.log("data decoded from JSON:", simpsons);
      // Creation du contenu HTML ici...
      // On récupère le premier objet du tableau
      const simpsonProfil = simpsons[0];
      const quote = simpsonProfil.quote; // Citation
      const character = simpsonProfil.character; // Nom du personnage
      const image = simpsonProfil.image; // Image du personnage

      // Construire le contenu HTML
      const simpsonsHtml = `
            <div class="simpson-card">
                <div class="quote-bubble">${quote}</div>
                <img src="${image}" alt="Image de ${character}" />
                <h2>${character}</h2>
            </div>
        `;

      // Insérer le contenu HTML dans la page
      document.querySelector("#simpsons-quotes").innerHTML = simpsonsHtml;
    })
    .catch((error) => {
      console.error("Erreur Axios :", error);
    });
}
