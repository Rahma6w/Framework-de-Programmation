const reservations = [ 
    { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" }, 
    { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" }, 
    { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" }, 
    { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" }, 
    { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" } 
]; 
// // 1. Créer un tableau contenant uniquement les réservations confirmées.
const resconf = reservations.filter(x=>x.statut==="Confirmée");
console.log(resconf);


// // 2. Créer un tableau contenant les noms des clients.
const noms=reservations.map(x=>x.client);
console.log(noms);

// 3. Rechercher la réservation numéro 103.
const res103 = reservations.find(x=> x.numero===105);
console.log(res103);

// 4. Calculer le montant total des réservations confirmées.
const confres= reservations.filter(x=> x.statut==="Confirmée");
console.log(confres);
const confres2=confres.reduce((sum,x)=>{ return sum+x.montant;},0);
console.log("le montant total des réservations confirmées : ",confres2);


// 5. Vérifier si toutes les réservations sont confirmées.
const conf=reservations.findIndex(x=>x.statut !== "Confirmée");
// if (conf===-1){console.log("Tous les reservations sont confirmées");}
// else{console.log("les reservations ne sont pas tous confirmées");}
conf === -1 ?  console.log("Tous les reservations sont confirmées"):console.log("les reservations ne sont pas tous confirmées") ;


 
// 6. Créer un tableau contenant les clients et leurs destinations sous la forme : 
// [ { client: "Nadia", voyage: "Bali" }, 
//   { client: "Karim", voyage: "Rome" } ]

const nomDest=reservations.map(x=>({client: x.client , voyage: x.destination}));
console.log(nomDest);