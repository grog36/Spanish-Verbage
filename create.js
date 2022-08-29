let VERBS = require("./verbs.json");
const fs = require("fs");
for (let verb in VERBS) {
    let root = "";
    switch (VERBS[verb]["root-change"]) {
        case "":
            for (let letter = 0; letter < (verb.length - 2); letter++) {
                root += verb[letter];
            }
            break
        case "o to ue":
            for (let letter = 0; letter < (verb.length - 2); letter++) {
                if (verb[letter] != "o") {
                    root += verb[letter];
                }
                else {
                    root += "ue";
                }
            }
            break
    }

    VERBS[verb]["root"] = root;
}

let output = JSON.stringify(VERBS, null, 2);

//WRITE TO JSON FILE
fs.writeFile("verbs.json", output, (err) => {
    if (err) {
        console.log(err);
    }
});
