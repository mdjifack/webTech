const express = require("express");
const card = require("../models/modFormStudy.js");
const card1 = require("../models/Group.js");
const studyTable = card.studyTable;
const group = card1.GroupTable;
const router = express.Router();

/* 
 *Routen auf der Router-Instanz definieren
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

router.get("/FormGroup", function(req, res) {
    res.render("FormGroup");
});
router.get("/ListeGroup", function(req, res) {
    res.render("ListeGroup", { group: group});
});
router.get("/DetailsGroup", function(req, res) {
    res.render("DetailsGroup", { group: group});
});
router.get("*", function(req, res, next) {
    res.render("404");
    next();
});
// Router zugreifbar machen
module.exports = router;