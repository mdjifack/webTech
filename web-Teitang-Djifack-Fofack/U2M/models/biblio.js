/* 
 *Diese Datei wurde von: 
 * Djifack,Michel Boris
 *angelegt
 */

//  objekt person 
function person(vorname, name, schule) {
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

// Daten in Array speichern
let persArray = new Array();
let bookArray = new Array();

// personen erzeugen
let persA = new person("Albert", "Einstein", "FH-Dortmund");
let persB = new person("Bernard", "Foch", "TU-Dortmund");
let persC = new person("Bro", "Karl", "TU-Dortmund");
let persD = new person("Rossi", "Dragui", "FH-Dortmund");
let persE = new person("Paul", "Le Guen", "TU-Dortmund");
let persF = new person("Jacky", "Dongmo", "FH-Dortmund");

// Bücher erzeugen
let book1 = new book("Grundlagen des NPL-Geschäftes", "Marcel Köchling';' Christoph Schalast", "9783956470691", "[TU-Dortmund] Zentrall-Bibliothek", "F 86362/2");
let book2 = new book("Web-Engineering", "Maria Bielikova; Tommi Mikkonen ; Cesare Pautasso ; Maria Bielikova ; Tommi Mikkonen ; Cesare Pautasso", "9783030505776 ; 9783030505783", "[TU-Dortmund] Zentrall-Bibliothek", "eBook");
let book3 = new book("KI-Grundlagen", "Edlich ',' Stefan", "9783900000692", "[FH-Dortmund] Emill-Figge Str", "C 86362/2");
let book4 = new book("KI-Grundlagen", "Edlich ',' Stefan", "9783900000692", "[FH-Dortmund] Emill-Figge Str", "C 86362/2");
let book5 = new book("KI-Grundlagen", "Edlich ',' Stefan", "9783900000692", "[FH-Dortmund] Emill-Figge Str", "C 86362/2");
let book6 = new book("KI-Grundlagen", "Edlich ',' Stefan", "9783900000692", "[FH-Dortmund] Emill-Figge Str", "C 86362/2");

// Objekt im Array hinzufuegen
persArray.push(persA);
persArray.push(persB);
persArray.push(persC);
persArray.push(persD);
persArray.push(persE);
persArray.push(persF);
bookArray.push(book1);
bookArray.push(book2);
bookArray.push(book3);
bookArray.push(book4);
bookArray.push(book3);
bookArray.push(book6);

// export das Modul
module.exports = {
    persArray: persArray,
    person: person,
    bookArray: bookArray,
    book: book
}