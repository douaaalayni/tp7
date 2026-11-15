console.log("---- Exercice 1 ----");
const cotisation = 25.5;
cotisationReduite=cotisation-cotisation*15/100;

cotisationReduite.toFixed(2);
console.log("cotisationReduite",cotisationReduite);

const prenom=prompt("Votre prénom ?");
const prenom1=prenom.trim();
const prenomPropre=prenom1[0].toUpperCase()+(prenom1.slice(1)).toLowerCase();
console.log("prenom:",prenomPropre);
const email=`${prenomPropre.toLowerCase()}@club.tn`;
console.log("email :",email)
console.log("contient @ ",email.includes("@"));
/*


console.log("---- Exercice 2 ----");
const aujourdhui = new Date();
const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const mois = ["janvier", "février", "mars", "avril", "mai", "juin","juillet", "août", "septembre", "octobre", "novembre", "décembre"];
console.log("Nous sommes le " +jours[aujourdhui.getDay()] + " " +aujourdhui.getDate() + " " +mois[aujourdhui.getMonth()] + " " +aujourdhui.getFullYear());


console.log("---- Exercice 3 ----");

const ateliers = ["HTML", "CSS", "JavaScript", "Git"];


console.log(ateliers.length);
console.log(ateliers[0]);
console.log(ateliers[ateliers.length - 1]);

ateliers.push("Bootstrap");
ateliers.pop();

console.log(ateliers.includes("PHP"));


let i = 1;
for (let atelier of ateliers) {
    console.log(i + ". " + atelier);
    i++;
}

console.table(ateliers);

const notes = [12, 8, 15, 10, 17, 6, 2];

console.log(notes.sort());

notes.sort((a, b) => a - b);
console.log(notes);
console.log(notes.join(" - "));


const admises = notes.filter((n) => n >= 10);
console.log(admises);
const sur100 = notes.map((n) => n * 5);
console.log(sur100);

const somme = notes.reduce((s, n) => s + n, 0);
console.log(somme);

const moyenne = (somme / notes.length).toFixed(2);
console.log(moyenne);

notes.sort((a, b) => a - b);
console.log(notes);
console.log("---- Exercice 4 ----");

const membre = {
    prenom: "Sarra",
    age: 19,
    ateliers: ["HTML", "CSS"],
    cotisationPayee: false,
    email: "sarra@club.tn",

    sePresenter: function() {
        return "Je suis " + this.prenom +
        ", " + this.age + " ans, inscrite à " +
        this.ateliers.length + " ateliers : " +
        this.ateliers.join(", ") + ".";
    }
};


console.log(membre.prenom);
console.log(membre["age"]);

for (let propriete in membre) {
    console.log(propriete + " : " + membre[propriete]);
}


console.log(membre.sePresenter());


const membres = [
    {prenom: "Sarra", age: 19, cotisationPayee: true},
    {prenom: "Ali", age: 22, cotisationPayee: false},
    {prenom: "Yasmine", age: 18, cotisationPayee: true}
];

console.log(membres.map((m) => m.prenom));


console.log(
    membres.filter((m) => m.cotisationPayee == false)
    .map((m) => m.prenom)
);


const yasmine = membres.find((m) => m.prenom == "Yasmine");
console.log(yasmine.age);


console.table(membres);*/

















