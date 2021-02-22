/* *Datei wurde von: xxxxxxxxxxxxxxxxx fertig gestelt!
 */



const express = require("express");
const app = express();
// path bis zum studytable 
const studyClass = require("./U2M/models/modFormStudy.js");
const group = require("./U2M/models/Group.js");
const StudyOject = studyClass.Study;
const studArray = studyClass.studyTable;
const groupOject = group.Group;
const groupArray = group.GroupTable;

// Modul einbinden und Anfrage lesen
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// save formStudyData
app.post("/ListeStudy",
    function(req, res, next) {
        // Zugriff auf die Daten erfolgt
        // über "req.body"
        StudyOject.Study = new StudyOject(req.body.name, req.body.vorname, req.body.schule, req.body.fach, req.body.studiengang, req.body.aktsemester, req.body.module, req.body.note, req.body.semester);
        studArray.push(StudyOject.Study);
    });

    app.post("/ListeGroup",
    function(req, res, next) {
        // Zugriff auf die Daten erfolgt
        // über "req.body"
        groupOject.Group = new groupOject(req.body.GruppeName, req.body.AdminName, req.body.ModulleZiel, req.body.GruppenRaum, req.body.GruppenLink, req.body.resdate, req.body.resdate1, req.body.max);
        groupArray.push(groupOject.Group);
    });


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