const express = require("express");
const app = express();

// Modul mit den Routen einbinden
const router = require('./routes/routes.js');

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
// Router registrieren
app.use(router);

app.listen(8040, function() {
    console.log("Click on: http://localhost:8040");
});