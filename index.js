// alert("Le fichier fonctionne !");
// //ceci est un commentaire
// console.log("Hello");

// let maVariableSuperCool = "KamelCase";

// console.log(maVariableSuperCool);

// var unTexte = "Voici un texte"

// console.log(unTexte);

// unTexte = "Nouveau texte..."; 

// console.log(unTexte);

// let unChiffre = 24;
// unChiffre = 12;  
// console.log(unChiffre);

// let chaine = "Je suis l'autre chaine de caractère"

// let nouvelleChaine = "Chaine précédente :" + chaine

// console.log(nouvelleChaine);

// let string = "je suis une chaine"
// let number = 24;
// let boolean = true;
// let array = ["je", "suis", 24, false];

// let objet ={
//     prenom: "audrey",
//     age: 34,
//     ville: "Bordeaux",
// };

// // console.log(typeof array);
// // console.log(typeof number);

// let arbre =null;
// console.log(arbre);
// // console.log(typeof arbre);

// console.log(4 * 5);
// console.log(4 ** 5);

// let total = 0;

// total++;

// console.log(total);

// let total = 2;

// total *=5;

// console.log(total);

// let total = 2;
// let x = 4;
// x++;

// total=x
// console.log(total);
// // total =++x;

// console.log(total);
// let x = 2;
// let x = 6;
// let x = 5;
// let y = 5;
//  if (x < y) {
//     console.log("x est inferieur à y");
//  } else {
//      console.log("x est supérieur à y");
//  }
//  if (!x) {
//      console.log("x existe");
//  }
 
//  if ((x === y)) {
//      console.log("True !");
//  } else {
//      console.log("false !");
//  }
//  let x = 5;
//  let y =5;
//  if ((x !== y)) {
//     console.log("True !");
// } else {
//     console.log("false !");
// } 

// let x = 5;
// let y = "5";

// if (x === y ||  x > 3) {
//     console.log("True !");
// }else {
//     console.log("false !");
// }

// if (x == y && x >3 && y <10) {
//     console.log("True !");
// }else {
//     console.log("false !");
// }

// // let x = 6
// let x = 5
// let y = "5"
// x == y ? console.log("True !") : console.log("false");;
// // if (x == y) console.log("True !"); 
    
// }else if (x == y) {
//     console.log("x et y egaux en valeur");
// } else {
//     // console.log("x et y ne sont pas tout égaux");
//     console.log(x + " et " + y + "ne sont pas du tout égaux" );
//     console.log('${x} et ${y} ne sont pas du tout égaux');
    
// }


// function faireQuelqueChose() {
//     console.log("Je fait un truc !");
//    console.log("Trop cool"); 
// }
// faireQuelqueChose()

// const faireUneTache = (tache) => {
//     console.log("Je fais : " + tache);
// }

// faireUneTache("Les courses")
// faireUneTache("le menage")
// function add2() {
// //    return x + y;
// let a = 4
// console.log(a);
// return a + 2;
// }
// add2();

// // calc(4, 9)
// (function maFonction() {
//     console.log("Je ne joue toute seule");
// })();

// (() => {
//     console.log("Je ne joue aussi toute seule");
// })(); 

let total = 0;

function addition(x) {
    total += x;
    return total;
}


function soustraction(x) {
    total -= x;
    return total;
}


function division(x) {
    if (total === 0) {
        return (total = x)
    } else {  
    total /= x;
    return total;
    }
}

function multiplication(x) {
    if (total === 0) {
        return (total = x)
    } else {  
    total *= x;
    return total;
    }
}

function reset() {
    total = 0;
}