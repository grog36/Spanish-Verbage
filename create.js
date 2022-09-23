let VERBS = require("./verbs.json");
let normalVerbList = [
    "abrir",
    "ayudar",
    "bailar",
    "beber",
    "buscar",
    "cambiar",
    "caminar",
    "cantar",
    "cenar",
    "comer",
    "comprar",
    "comprender",
    "cortar",
    "creer",
    "dibujar",
    "disfrutar",
    "escribir",
    "escuchar",
    "esperar",
    "estudiar",
    "explicar",
    "formar",
    "ganar",
    "gustar",
    "hablar",
    "invitar",
    "lavar",
    "leer",
    "limpiar",
    "llamar",
    "llegar",
    "llevar",
    "manejar",
    "mirar",
    "montar",
    "nadar",
    "pagar",
    "pasar",
    "pintar",
    "preguntar",
    "presentar",
    "romper",
    "saltar",
    "trabajar",
    "viajar",
    "vivir"
]
const fs = require("fs");
// for (let verb of normalVerbList) {
//     if (!VERBS[verb]["isReflexive"]) {
//         let root = "";
//         let type = verb[verb.length - 2];
//         for (let letterIndex in verb) {
//             if (letterIndex != verb.length - 1 && letterIndex != verb.length - 2) {
//                 root += verb[letterIndex];
//             }
//         }

//         if (type == "a") {
//             VERBS[verb]["indicativeConjugations"] = {
//                 "presentTense": {
//                     "firstPersonSingular": (root + "o"),
//                     "secondPersonSingular": (root + "as"),
//                     "thirdPersonSingular": (root + "a"),
//                     "firstPersonPlural": (root + "amos"),
//                     "secondPersonPlural": (root + "áis"),
//                     "thirdPersonPlural": (root + "an")
//                 }
//             }
//         }

//         else if (type == "i") {
//             VERBS[verb]["indicativeConjugations"] = {
//                 "presentTense": {
//                     "firstPersonSingular": (root + o),
//                     "secondPersonSingular": (root + "es"),
//                     "thirdPersonSingular": (root + "e"),
//                     "firstPersonPlural": (root + "imos"),
//                     "secondPersonSingular": (root + "ís"),
//                     "thirdPersonSingular": (root + "en")
//                 }
//             }
//         }

//         else if (type == "e") {

//         }

//         else {
//             console.log("ERROR!\nWORD: " + verb);
//         }

//     }
// }

//fs.writeFile("./temp.json", JSON.stringify(VERBS, null, 2), (err) => {
//    if (err) throw err;
//});


function assignNormalConjugationsIndicativeTense(word, tense) {
    if (VERBS[word]["isReflexive"] == false) {
        let root = word.slice(0, word.length - 2);
        let ending = word.slice(word.length - 2, word.length);

        switch (tense) {
            case "presentTense":
                
                //HERE








                break;
            case "preteriteTense":
                console.log("Pret");
                break;
            case "imperfectTense":
                console.log("Imp");
                break;
            case "conditionalTense":
                console.log("Cond");
                break;
            case "futureTense":
                console.log("Fut");
                break;
            default:
                console.log("ERROR");
                break;
        }

    }
    else {
        console.log(`${word} is reflexive. Unable to conjugate yet!`);
    }
}



function assignAllNormalConjugationsIndicativeTense(word) {
    assignNormalConjugationsIndicativeTense(word, "presentTense");
    assignNormalConjugationsIndicativeTense(word, "preteriteTense");
    assignNormalConjugationsIndicativeTense(word, "imperfectTense");
    assignNormalConjugationsIndicativeTense(word, "conditionalTense");
    assignNormalConjugationsIndicativeTense(word, "futureTense");
}




function initialize(verb) {
    VERBS[verb]["indicativeConjugations"] = {};

    let tenses = ["presentTense", "preteriteTense", "imperfectTense", "conditionalTense", "futureTense"];


    for (let tense of tenses) {
        VERBS[verb]["indicativeConjugations"][tense] = {
            "firstPersonSingular": null,
            "secondPersonSingular": null,
            "thirdPersonSingular": null,
            "firstPersonPlural": null,
            "secondPersonPlural": null,
            "thirdPersonPlural": null
        }
    }
}


for (let verb in VERBS) {
    initialize(verb);
}

fs.writeFile("./out.json", JSON.stringify(VERBS, null, 2), err => {
    if (err) throw err;
})

