// Code your solutions in this file
function writeCards(names) {
    let arr = [];
    for (const name of names) {
        arr.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return arr;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}