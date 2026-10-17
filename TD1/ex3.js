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

