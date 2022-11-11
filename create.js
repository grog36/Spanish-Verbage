let VERBS = require("./verbs.json");
const fs = require("fs");
for (let verb in VERBS) {
    let root = verb.slice(0, verb.length - 2);
    let ending= verb.slice(verb.length -2, verb.length);
    let basePresent = VERBS[verb]["indicativeConjugations"]["presentTense"];
    let basePreterite = VERBS[verb]["indicativeConjugations"]["preteriteTense"];
    let baseImperfect = VERBS[verb]["indicativeConjugations"]["imperfectTense"];
    let baseConditional = VERBS[verb]["indicativeConjugations"]["conditionalTense"];
    let baseFuture = VERBS[verb]["indicativeConjugations"]["futureTense"];

    if (basePresent["isRegular"]) {
        if (ending === "ar") {
            basePresent["firstPersonSingular"] = root + "o";
            basePresent["secondPersonSingular"] = root + "as";
            basePresent["thirdPersonSingular"] = root + "a";
            basePresent["firstPersonPlural"] = root + "amos";
            basePresent["secondPersonPlural"] = root + "áis";
            basePresent["thirdPersonPlural"] = root + "an";
        }
        else if (ending === "er") {
            basePresent["firstPersonSingular"] = root + "o";
            basePresent["secondPersonSingular"] = root + "es";
            basePresent["thirdPersonSingular"] = root + "e";
            basePresent["firstPersonPlural"] = root + "emos";
            basePresent["secondPersonPlural"] = root + "éis";
            basePresent["thirdPersonPlural"] = root + "en";
        }
        else if (ending === "ir") {
            basePresent["firstPersonSingular"] = root + "o";
            basePresent["secondPersonSingular"] = root + "es";
            basePresent["thirdPersonSingular"] = root + "e";
            basePresent["firstPersonPlural"] = root + "imos";
            basePresent["secondPersonPlural"] = root + "ís";
            basePresent["thirdPersonPlural"] = root + "en";
        }
    }

    if (basePreterite["isRegular"]) {
        if (ending === "ar") {
            basePreterite["firstPersonSingular"] = root + "é";
            basePreterite["secondPersonSingular"] = root + "aste";
            basePreterite["thirdPersonSingular"] = root + "ó";
            basePreterite["firstPersonPlural"] = root + "amos";
            basePreterite["secondPersonPlural"] = root + "asteis";
            basePreterite["thirdPersonPlural"] = root + "aron";
        }
        else if (ending === "er" || ending === "ir") {
            basePreterite["firstPersonSingular"] = root + "í";
            basePreterite["secondPersonSingular"] = root + "iste";
            basePreterite["thirdPersonSingular"] = root + "ió";
            basePreterite["firstPersonPlural"] = root + "imos";
            basePreterite["secondPersonPlural"] = root + "isteis";
            basePreterite["thirdPersonPlural"] = root + "ieron";
        }
    }

    if (baseImperfect["isRegular"]) {
        if (ending === "ar") {
            baseImperfect["firstPersonSingular"] = root + "aba";
            baseImperfect["secondPersonSingular"] = root + "abas";
            baseImperfect["thirdPersonSingular"] = root + "aba";
            baseImperfect["firstPersonPlural"] = root + "ábamos";
            baseImperfect["secondPersonPlural"] = root + "abais";
            baseImperfect["thirdPersonPlural"] = root + "aban";
        }
        else if (ending === "er" || ending === "ir") {
            baseImperfect["firstPersonSingular"] = root + "ía";
            baseImperfect["secondPersonSingular"] = root + "ías";
            baseImperfect["thirdPersonSingular"] = root + "ía";
            baseImperfect["firstPersonPlural"] = root + "íamos";
            baseImperfect["secondPersonPlural"] = root + "íais";
            baseImperfect["thirdPersonPlural"] = root + "ían";
        }
    }

    if (baseConditional["isRegular"]) {
        if (ending === "ar" || ending === "er" || ending === "ir") {
            baseConditional["firstPersonSingular"] = verb + "ía";
            baseConditional["secondPersonSingular"] = verb + "ías";
            baseConditional["thirdPersonSingular"] = verb + "ía";
            baseConditional["firstPersonPlural"] = verb + "íamos";
            baseConditional["secondPersonPlural"] = verb + "íais";
            baseConditional["thirdPersonPlural"] = verb + "ían";
        }
    }

    if (baseFuture["isRegular"]) {
        if (ending === "ar" || ending === "er" || ending === "ir") {
            baseFuture["firstPersonSingular"] = verb + "é";
            baseFuture["secondPersonSingular"] = verb + "ás";
            baseFuture["thirdPersonSingular"] = verb + "á";
            baseFuture["firstPersonPlural"] = verb + "emos";
            baseFuture["secondPersonPlural"] = verb + "éis";
            baseFuture["thirdPersonPlural"] = verb + "án";
        }
    }
}


fs.writeFile("./out.json", JSON.stringify(VERBS, null, 2), err => {
    if (err) throw err;
})

