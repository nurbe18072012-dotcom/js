

let text = prompt("Matn kiriting:");
let count = {};

for (let i = 0; i < text.length; i++) {
    let harf = text[i];

    if (count[harf]) {
        count[harf]++;
    } else {
        count[harf] = 1;
    }
}

for (let key in count) {
    console.log(key + " = " + count[key]);
}
