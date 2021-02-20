const express = require("express");
const app = express();

// Modul einbinden und Anfrage lesen
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Modul mit den Routen einbinden
const router = require("./U2M/routes/routes.js");

app.set("views", "./U2M/views");
app.set("view engine", "ejs");
app.use(express.static("./U2M/public"));

// Router registrieren
app.use(router);

app.listen(8040, function() {
    console.log("IClick on the following link to start our App: http://localHost:8040");
});