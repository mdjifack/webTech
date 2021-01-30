// object Room
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

// object reservation
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
// create reservation object
let firstReservation = new Buchung("Web-Praktikum", "September 14, 2021 14:30:00", "February 28, 2021 19:00:00", "Prof.Dr.Joerges", 28, "Praktikum-Abnahme");
let secondReservation = new Buchung("Vorlesung", "January 10, 2021 11:45:00", "April 23, 2021 13:00:00", "Prof.Dr.Harrer", 19, "Wahlpflicht-Modus");
let thirdReservation = new Buchung("Praktikum", "September 14, 2021 08:30:00", "March 17, 2021 10:30:00", "Prof.Dr.Stark", 23, "EIP");
let fourthReservation = new Buchung("Klausur", "August 05, 2021 16:30:00", "September 02, 2021 18:00:00", "Prof.Dr.Kohl", 17, "AuD");
let fifthReservation = new Buchung("Seminar", "September 14, 2021 15:30:00", "November 13, 2021 17:00:00", "Prof.Dr.Bab", 11, "KI & Logik");

// create rooom object
let firstRoom = new Raum(21, "Praktikumsraum", "E.2.24", 39, ["Tisch", "Wifi", "Drucker", "Projektor"], []);
let secondRoom = new Raum(19, "Seninarraum", "E.1.38", 60, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);
let thirdRoom = new Raum(31, "Praktikumsraum", "B.2.24", 39, ["Tisch", "Drucker", "Projektor", "Tafeln", "Wifi"], []);
let fourthRoom = new Raum(11, "Seninarraum", "A.E.01", 150, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);

// add reservation in room
firstRoom.addBuchung(secondReservation);
secondRoom.addBuchung(thirdReservation);
secondRoom.addBuchung(firstReservation);
secondRoom.addBuchung(fifthReservation);
thirdRoom.addBuchung(fourthReservation);

var roomTabelle = [firstRoom, secondRoom, thirdRoom, fourthRoom];

module.exports = {
    roomTabelle: roomTabelle
};