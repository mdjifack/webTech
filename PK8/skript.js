// Layouts-Viewports auf der Konsole ausgeben

const result = function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
};
const ergebnis = `Die Viewport-Breite beträgt: ${result()} Pixel.`;
console.log(ergebnis);

// Objekt Raum

class Raum {
    constructor(nummer, bezeichnung, gebaeude, kapazitaet, ausstattungsmerkmale, buchungen) {
        this.nummer = nummer;
        this.bezeichnung = bezeichnung;
        this.gebaeude = gebaeude;
        this.kapazitaet = kapazitaet;
        this.ausstattungsmerkmale = ausstattungsmerkmale;
        this.buchungen = buchungen;
        // fucntion addBuchung()
        this.addBuchung = function(buchung) {
            this.buchungen.push(buchung);
            this.buchungen.sort(function(a, b) {
                return b.startzeit - a.startzeit;
            });

        }
    }
}

// Objekt Buchung

class Buchung {
    constructor(bezeichnung, startzeit, endzeit, gebuchtVon, anzahlDerTeilnehmer, beschreibung) {
        this.bezeichnung = bezeichnung;
        this.startzeit = new Date(startzeit);
        this.endzeit = new Date(endzeit);
        this.gebuchtVon = gebuchtVon;
        this.anzahlDerTeilnehmer = anzahlDerTeilnehmer;
        this.beschreibung = beschreibung;
    }
}
//Buchung Objekte

let firstReservation = new Buchung("Web-Praktikum", "September 14, 2021 14:30:00", "February 28, 2021 19:00:00", "Prof.Dr.Joerges", 28, "Praktikum-Abnahme");
let secondReservation = new Buchung("Vorlesung", "January 10, 2021 11:45:00", "April 23, 2021 13:00:00", "Prof.Dr.Harrer", 19, "Wahlpflicht-Modus");
let thirdReservation = new Buchung("Praktikum", "September 14, 2021 08:30:00", "March 17, 2021 10:30:00", "Prof.Dr.Stark", 23, "EIP");
let fourthReservation = new Buchung("Klausur", "August 05, 2021 16:30:00", "September 02, 2021 18:00:00", "Prof.Dr.Kohl", 17, "AuD");
let fifthReservation = new Buchung("Seminar", "September 14, 2021 15:30:00", "November 13, 2021 17:00:00", "Prof.Dr.Bab", 11, "KI & Logik");


// Raum Objekte
let firstRoom = new Raum(21, "Praktikumsraum", "EF42", 39, ["Tisch", "Wifi", "Drucker", "Projektor"], []);
let secondRoom = new Raum(19, "Seninarraum", "EF44", 60, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);
let thirdRoom = new Raum(31, "Praktikumsraum", "EF42", 39, ["Tisch", "Drucker", "Projektor", "Tafeln", "Wifi"], []);
let fourthRoom = new Raum(11, "Seninarraum", "EF44", 150, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);

console.log(firstRoom.nummer + " " + firstRoom.bezeichnung + " " + firstRoom.gebaeude + " " + firstRoom.kapazitaet + " " + firstRoom.ausstattungsmerkmale + " " + firstRoom.buchungen)
console.log(secondRoom.nummer + " " + secondRoom.bezeichnung + " " + secondRoom.gebaeude + " " + secondRoom.kapazitaet + " " + secondRoom.ausstattungsmerkmale + " " + secondRoom.buchungen)
console.log(thirdRoom.nummer + " " + thirdRoom.bezeichnung + " " + thirdRoom.gebaeude + " " + thirdRoom.kapazitaet + " " + thirdRoom.ausstattungsmerkmale + " " + thirdRoom.buchungen)
console.log(fourthRoom.nummer + " " + fourthRoom.bezeichnung + " " + fourthRoom.gebaeude + " " + fourthRoom.kapazitaet + " " + fourthRoom.ausstattungsmerkmale + " " + fourthRoom.buchungen)


// Buchung im raum einfügen
firstRoom.addBuchung(secondReservation);
secondRoom.addBuchung(thirdReservation);
secondRoom.addBuchung(firstReservation);
secondRoom.addBuchung(fifthReservation);
thirdRoom.addBuchung(fourthReservation);

// buchungen ausgeben
console.log("first room: Buchungslist")
for (let elem of firstRoom.buchungen) {
    console.log(elem);
};
console.log("second room: Buchungslist")
for (let elem of secondRoom.buchungen) {
    console.log(elem);
};
console.log("third room: Buchungslist")
for (let elem of thirdRoom.buchungen) {
    console.log(elem);
};
console.log("fourth room: Buchungslist")
for (let elem of fourthRoom.buchungen) {
    console.log(elem);
};