/**
 * Datei wurde von:
 * @Danielle Fofack
 * @Wilfried Teitang
 * @Michel Djifack
 * fertig gestelt!
 */



const express = require("express");
const router = express.Router();

// @Danielle Fofack
const card = require("../models/modFormStudy.js");
const studyTable = card.studyTable;

// @Wilfried Teitang 
const card1 = require("../models/Group.js");
const group = card1.GroupTable;


// @Michel Djifack, bibliothek einbinden
const pfad = require("../models/biblio.js");
const persArray = pfad.persArray;
const bookArray = pfad.bookArray;

/**
 * @Danielle Fofack
 * Routen auf der Router-Instanz definieren [Fachobjekt Study]
 */
router.get("/", function(req, res) {
    res.render("../../doc/documentation");
});

router.get("/DetailsStudy", function(req, res) {
    res.render("DetailsStudy", { studyTable: studyTable });
});

router.get("/FormStudy", function(req, res) {
    res.render("FormStudy");
});

router.get("/ListeStudy", function(req, res) {
    res.render("ListeStudy", { studyTable: studyTable });
});


/**
 * @Wilfried Teitang
 * Routen auf der Router-Instanz definieren [Fachobjekt Grupe]
 */
router.get("/FormGroup", function(req, res) {
    res.render("FormGroup");
});
router.get("/ListeGroup", function(req, res) {
    res.render("ListeGroup", { group: group });
});
router.get("/DetailsGroup", function(req, res) {
    res.render("DetailsGroup", { group: group });
});

/**
 * @Michel Djifack
 * Routen auf der Router-Instanz definieren [Fachobjekt Grupe]
 */
// Bibliothek route 
router.get("/BiblioForm", function(req, res) {
    res.render("BiblioForm");
});
router.get("/BiblioListe", function(req, res) {
    res.render("BiblioListe", { persArray: persArray, bookArray: bookArray });
});

router.get("/BiblioDetails", function(req, res) {
    res.render("BiblioDetails", { persArray: persArray, bookArray: bookArray });
});

router.get("*", function(req, res, next) {
    res.render("404");
    next();
});

// Router zugreifbar machen
module.exports = router;