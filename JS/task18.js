let word = "cademy";
let output = "";

for (let i = 0; i < word.length; i++) {
    let Char = word[i];

    if (Char.match(/[a-zA-Z]/)) {
        let nextChar = String.fromCharCode(Char.charCodeAt(0) + 1);
        output += nextChar;
    }
}

console.log(output);

