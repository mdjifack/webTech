/* * Datei wurde von: xxxxxxxxxxxxxxxxx fertig gestelt!
 */
const group = require("../../models/Group.js");
const table = group.GroupTable;

// let btn = document.getElementById("sendform");
// btn.addEventListener("click", function(event) {
//     alert("Daten werden gespeichert, wenn alle pflichfelder ausgefüllt werden. Sie können die Daten auf der Seite Liste  oder Informationen des group überprüffen. ");

// });

var color = document.getElementsByClassName("color");
for(let g of table){
     if(g.AnzahlTeilnehmer < 5){
       color.style.backgroundColor = "green";
     }else{
        color.style.backgroundColor = "red";
     }
}