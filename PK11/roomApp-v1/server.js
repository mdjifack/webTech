const http = require("http");
const fs = require('fs');

http.createServer(function(req, res) {
    let url = req.url;
    let method = req.method;
    if (url === "/") {
        fs.readFile("public/dashboard.html", function(err, htmlPage) {
            res.writeHeader(200, { "Content-Type": "text/html" });
            res.end(htmlPage);
        });
    } else if (url.startsWith("/raumliste.html")) {
        send(res, createListeRaume());
    } else {
        fs.readFile(__dirname + "/public" + url, (err, htmlPage) => {
            if (err) {
                fs.readFile(__dirname + '/public/404.html', function(err, htmlPage) {
                    res.writeHead(404);
                    res.end(htmlPage);
                });
            } else {
                res.writeHead(200);
                res.end(htmlPage);
            }
        });
    }

}).listen(8020, function() {
    console.log("Click on:  http://localhost:8020");
});

function send(res, body) {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(body);
}

function createListeRaume() {
    return `<!<!DOCTYPE html>
    <html>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ListeDerVerfuegbarenRaume</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/flexbox.css">
    <body>
    <header>
        <div id="logo">
            <a href="dashboard.html"><img src="img/world.jpg" alt="logo" height="70" width="100"></a>
        </div>
        <div id="page-title">
            <h3> Liste der verfugbaren Räume</h3>
        </div>
    </header>
    <nav>
        <ul>
        <li><a href="raumliste.html.html">Raumliste</a></li>
        <li><a href="raumdetails.html">Roumdetails</a> </li>
        <li><a href="buchungsdetails.html">Buchungsdetails</a></li>
        <li><a href="seminaranlegen.html">Alengen eines Seminars</a></li>
        </ul>
    </nav>
    <div id="navigation-seite"></div>
    <div class="mainAside">
        <main>
            <br>
            <div class="form">
            <form action="raumliste.html" method="get">
                    <fieldset>
                        <legend>Suchformular</legend>
                        <label for="roomno" class="req-form">Suchen:</label>
                        <input type="text" id="roomno" name="roomno" pattern="[A-Z]{1}\.[1-3E]{1}\.[0-9]{2}" required maxlength="6">
                        <input type="submit" value="Finden">
                    </fieldset>
                </form>
            </div>
            <ul class="room-list">
                 ${createRoomList()}
            </ul>
        </main>
        <aside>
            <ul>
                <li>
                    17.11.2020 <br> Kaputter Beamer <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                    17.11.2020 <br> Kaputter Beamer <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                    17.11.2020 <br> Kaputter Beamer <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                    17.11.2020 <br> Kaputter Beamer <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
            </ul>
        </aside>
    </div>
    <footer> &copy; 2020 dafo001 & midji001 & ghkam001</footer>
</body>
    </html>`;
}
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
let firstRoom = new Raum(21, "Praktikumsraum", "E.2.24", 39, ["Tisch", "Wifi", "Drucker", "Projektor"], []);
let secondRoom = new Raum(19, "Seninarraum", "E.1.38", 60, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);
let thirdRoom = new Raum(31, "Praktikumsraum", "B.2.24", 39, ["Tisch", "Drucker", "Projektor", "Tafeln", "Wifi"], []);
let fourthRoom = new Raum(11, "Seninarraum", "A.E.01", 150, ["Wifi", "Tisch", "Scanner", "Drucker", "Projektor", "Tafeln", "Beaner"], []);

// Buchung im raum einfügen
firstRoom.addBuchung(secondReservation);
secondRoom.addBuchung(thirdReservation);
secondRoom.addBuchung(firstReservation);
secondRoom.addBuchung(fifthReservation);
thirdRoom.addBuchung(fourthReservation);

var roomTabelle = [firstRoom, secondRoom, thirdRoom, fourthRoom];

function createRoomList() {
    let erg = "";
    for (let elem of roomTabelle) {
        erg += `<li class="room-list-elem"> ${elem.nummer} ${elem.bezeichnung}<a href="raumdetails.html#${elem.gebaeude}">${elem.gebaeude}</a>${elem.kapazitaet} ${elem.ausstattungsmerkmale}</li>`;
    }
    return erg;
};