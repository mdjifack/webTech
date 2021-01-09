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
        this.buchungen = buchungen = new Array();

        // fucntion addBuchung()
        this.addBuchung = function(buchung) {
            this.buchungen.push(buchung);
            this.buchungen.sort(function(a, b) {
                return a.startzeit - b.startzeit;
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


// Raum Objekte
let firtRoom = new Raum(21, "Praktikum", "EF42", 39, ["Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);
let secondRoom = new Raum(19, "Seninarraum", "EF44", 60, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);
console.log(firtRoom.nummer + " " + firtRoom.bezeichnung + " " + firtRoom.gebaeude + " " + firtRoom.kapazitaet + " " + firtRoom.ausstattungsmerkmale + " " + firtRoom.buchungen)
console.log(secondRoom.nummer + " " + secondRoom.bezeichnung + " " + secondRoom.gebaeude + " " + secondRoom.kapazitaet + " " + secondRoom.ausstattungsmerkmale + " " + secondRoom.buchungen)

//Buchung Objekte

let firstReservation = new Buchung("KLausur-Vorbereitung", "September 14, 2021 14:30:00", "February 28, 2021 19:00:00", "Prof.Dr.Joerges", 28, "Praktikum-Abnahme");
let secondReservation = new Buchung("Vorlesung", "January 10, 2021 11:45:00", "April 23, 2021 13:00:00", "Prof.Dr.Harrer", 19, "Wahlpflicht-Modus");
let threeReservation = new Buchung("Praktikum", "March 09, 2021 08:30:00", "March 17, 2021 10:30:00", "Prof.Dr.Stark", 23, "EIP");
let fourReservation = new Buchung("Klausur", "August 05, 2021 16:30:00", "September 02, 2021 18:00:00", "Prof.Dr.Kohl", 17, "AuD");
let fiveReservation = new Buchung("Seminar", "October 27, 2021 15:30:00", "November 13, 2021 17:00:00", "Prof.Dr.Bab", 11, "KI & Logik");

// Buchung im raum einfügen
firtRoom.addBuchung(fourReservation);
secondRoom.addBuchung(threeReservation);
secondRoom.addBuchung(firstReservation);
firtRoom.addBuchung(secondReservation);
secondRoom.addBuchung(fiveReservation);

// buchungen ausgeben
console.log("first room: Buchungslist")
for (let elem of firtRoom.buchungen) {
    console.log(elem);
};
console.log("second room: Buchungslist")
for (let elem of secondRoom.buchungen) {
    console.log(elem);
};