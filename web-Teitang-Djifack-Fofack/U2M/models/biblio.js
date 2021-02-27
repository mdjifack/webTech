/* 
 *Diese Datei wurde von: 
 * Djifack,Michel Boris
 *angelegt
 */

//  objekt person 
function person(name, vorname, schule) {
    this.name = name;
    this.vorname = vorname;
    this.schule = schule;
}

// objekt Buch
function book(titel, autor, isbn, ort, position) {
    this.titel = titel;
    this.autor = autor;
    this.isbn = isbn;
    this.ort = ort;
    this.position = position;
}
// personen erzeugen
let persA = ("Albert", "Einstein", "FH-Dortmund");
let persB = ("Bernard", "Foch", "TU-Dortmund");
let persC = ("Bro", "Karl", "TU-Dortmund");

// Bücher erzeugen
let book1 = ("Grundlagen des NPL-Geschäftes", "Marcel Köchling; Christoph Schalast", "9783956470691", "[TU-Dortmund] Zentrall-Bibliothek", "F 86362/2");
let book2 = ("Web-Engineering", "Maria Bielikova; Tommi Mikkonen; Cesare Pautasso; Maria Bielikova; Tommi Mikkonen; Cesare Pautasso", "9783030505776; 9783030505783", "[TU-Dortmund] Zentrall-Bibliothek", "eBook");
let book3 = ("KI-Grundlagen", "Edlich, Stefan", "9783900000692", "[FH-Dortmund] Emill-Figge Str", "C 86362/2");

// Daten in Array speichern
let persArray = [];
let bookArray = [];
persArray.push(persA);
persArray.push(persB);
persArray.push(persC);
bookArray.push(book1);
bookArray.push(book2);
bookArray.push(book3);


// export das Modul
module.exports = {
    person: person,
    book: book,
    persArray: persArray,
    bookArray: bookArray
}