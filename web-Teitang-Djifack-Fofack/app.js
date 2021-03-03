/* *Datei wurde von: xxxxxxxxxxxxxxxxx fertig gestelt!
 */

const express = require("express");
const app = express();
// path bis zum study, group und Bibliothek
const studyClass = require("./U2M/models/modFormStudy.js");
const group = require("./U2M/models/Group.js");
const biblioPfad = require("./U2M/models/biblio.js")
const StudyOject = studyClass.Study;
const studArray = studyClass.studyTable;
const persObjekt = biblioPfad.person;
const bookObjekt = biblioPfad.book;
const groupOject = group.Group;
const groupArray = group.GroupTable;
const persArray = biblioPfad.persArray;
const bookArray = biblioPfad.bookArray;

// Modul einbinden und Anfrage lesen
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// save formStudyData
app.post("/ListeStudy",
    function(req, res) {
        // Zugriff auf die Daten erfolgt
        // über "req.body"
        StudyOject.Study = new StudyOject(req.body.vorname, req.body.name, req.body.schule, req.body.fach, req.body.studiengang, req.body.aktsemester, req.body.module, req.body.note, req.body.semester);
        studArray.push(StudyOject.Study);
        res.redirect('ListeStudy');
    });

// save Gruppe Data (Formular)
app.post("/ListeGroup",
    function(req, res) {
        // Zugriff auf die Daten erfolgt
        // über "req.body"
        groupOject.Group = new groupOject(req.body.GruppeName, req.body.AdminName, req.body.ModulleZiel, req.body.GruppenRaum, req.body.GruppenLink, req.body.resdate, req.body.resdate1, req.body.max);
        groupArray.push(groupOject.Group);
        res.redirect('ListeGroup');
    });

// save Biblio Data (Formular)
app.post("/BiblioListe",
        function(req, res) {
            // Zugriff auf die Daten erfolgt
            // über "req.body"
            persObjekt.person = new persObjekt(req.body.vorname, req.body.name, req.body.schule);
            persArray.push(persObjekt.person);
            bookObjekt.book = new bookObjekt(req.body.titel, req.body.autor, req.body.isbn, req.body.uni, req.body.lageplanCode);
            bookArray.push(bookObjekt.book);
            res.redirect('BiblioListe');
        }
    )
    // Modul mit den Routen einbinden
const router = require("./U2M/routes/routes.js");


app.set("views", "./U2M/views");
app.set("view engine", "ejs");
app.use(express.static("./U2M/public"));

// Router registrieren
app.use(router);

app.listen(8040, function() {
    console.log("Click on the following link to start our App: http://localHost:8040");
});