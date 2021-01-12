let ausgabe = "";
for (let i = 1; i <= 100; i++) {
    if ((i % 5) === 0 && (i % 3) === 0) {
        ausgabe += "TicTac ";
    } else if ((i % 5) === 0) {
        ausgabe += "Tac ";
    } else if ((i % 3) === 0) {
        ausgabe += "Tic ";
    } else {
        ausgabe += i + " ";
    }
}
console.log(ausgabe);