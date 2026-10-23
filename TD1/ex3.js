// Partie A – Déstructuration d'un tableau 
const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"]; 
// 1. Extraire le premier et le deuxième pays dans deux variables. 
const [p1,p2]=pays;
console.log(p1,p2)

// 2. Extraire uniquement le troisième pays. 
const [,,p3]=pays;
console.log(p3);

// 3. Extraire le premier pays dans une variable destinationPrincipale et récupérer les autres dans autresPays. 
const [p11,...AP]=pays;
console.log(p11,AP);



// Partie B – Déstructuration d'un objet 
const voyage = { 
    destination: "Bali", 
    prix: 1800, 
    duree: 10, 
    transport: "Avion", 
    hotel: "5 étoiles" 
}; 
// 1. Extraire destination et prix. 
const {destination,prix}=voyage;
console.log(destination);
console.log(prix);


// 2. Extraire destination dans une variable appelée ville.
const {destination:ville}=voyage;
console.log(ville);

// 3. Extraire prix et duree avec des valeurs par défaut.
const { prix1 ="300" ,duree1 =11}=voyage;
console.log(prix1);
console.log(duree1);


// 4. Écrire une fonction afficherVoyage() qui reçoit un objet voyage et affiche ses 
// informations en utilisant le destructuring directement dans les paramètres. 

const afficherVoyage = (voyage) => {
    const {destination, prix, duree, transport , hotel }=voyage;
    console.log("votre destination:", destination," est de prix ",prix,", de duree ",duree,", de transport ", transport," et d hotel ", hotel," .");
};

afficherVoyage(voyage);
