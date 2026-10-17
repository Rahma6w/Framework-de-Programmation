const destinations = [
    { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, disponible: true },
    { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, disponible: true },
    { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, disponible: false },
    { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, disponible: true },
    { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, disponible: true },
    { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, disponible: false }
];

// Afficher le nom de toutes les villes proposées avec forEach().
console.log("q1");
destinations.forEach(d => console.log(d.ville));


// Créer un tableau contenant uniquement les noms des villes avec map().
console.log("q2");
const villes= destinations.map(d=>d.ville);
console.log(villes);


// Afficher les destinations dont le prix est inférieur à 1500 DT avec filter().
console.log("q3");
const prix1500=destinations.filter(d=> d.prix < 1500);
console.log(prix1500);


// Rechercher la destination dont l'identifiant est égal à 3 avec find().
console.log("q4");
const id3=destinations.find(d=> d.id === 3);
console.log(id3);


// Trouver la position de Tokyo dans le tableau avec findIndex().
console.log("q5");
const pos=destinations.findIndex(d=>d.ville === "Tokyo");
console.log(pos);


// Vérifier s'il existe au moins une destination disponible avec some(). 
console.log("q6");
const dispo=destinations.some(d=> d.disponible === true);
console.log(dispo);



// Vérifier si toutes les destinations ont un prix supérieur à zéro avec every(). 
console.log("q7");
const prixVerifier= destinations.every (d=>d.prix>0);
console.log( prixVerifier);



// Calculer le budget total nécessaire pour visiter toutes les destinations avec reduce().
console.log("q8");
const totale=destinations.reduce((s,d) => s + d.prix , 0);