const express = require("express");
const router = express.Router();
const data = require("../models/rooms")
const roomTabelle = data.roomTabelle;

// Routen auf der Router-Instanz definieren
router.get("/", function(req, res, next) {
    res.render("dashboard");
    next();
});
router.get("/seminaranlegen", function(req, res, next) {
    res.render("seminaranlegen");
    next();
});
router.get("/raumliste", function(req, res, next) {
    res.render("raumliste", { roomTabelle: roomTabelle });
    next();
});
router.get("/raumdetails", function(req, res, next) {
    res.render("raumdetails");
    next();
});
router.get("/buchungsdetails", function(req, res, next) {
    res.render("buchungsdetails");
    next();
});
router.get("*", function(req, res, next) {
    res.render("404");
    next();
});
// Router zugreifbar machen
module.exports = router;