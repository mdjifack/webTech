/**  datei wurde von xxxxxxxxxxxxxxxxxxxxx fertig gestelt
 * 
 * 
 * 
 */
function Study(name, vorname, hochschule, fachbereich, studiengang, aktuelleSemester, module, note, semesterabgelegt) {
    this.name = name;
    this.vorname = vorname;
    this.hochschule = hochschule;
    this.fachbereich = fachbereich;
    this.studiengang = studiengang;
    this.aktuelleSemester = aktuelleSemester;
    this.module = module;
    this.note = note;
    this.semesterabgelegt = semesterabgelegt;
}
// Array erstellen, um Daten zu Speichern

let studyTable = new Array();

// // let sendBtn = document.getElementById("sendform");

// let btnAction = function() {
//     var name = document.getElementById("name").value;
//     var vorname = document.getElementById("vorname").value;
//     var schule = document.getElementById("schule").value;
//     var fach = document.getElementById("fach").value;
//     var studiengang = document.getElementById("studiengang").value;
//     var aktsemester = document.getElementById("aktsemester").value;
//     var module = document.getElementById("module").value;
//     var note = document.getElementById("note").value;
//     var semesterabgelegt = document.getElementById("semester").value;
//     student = new Study(name, vorname, schule, fach, studiengang, aktsemester, module, note, semesterabgelegt);
//     studyTable.push(student);
// };

let stdOne = new Study("Albert", "Einstein", "FH-Dortmund", "Informatik", "WI", 4, "Analysis", "2.3", 3);
let stdTwo = new Study("Bernard", "Foch", "TU-Dortmund", "Architektur", "Design", 2, "Physik", "1.3", 4);
let stdThree = new Study("Bro", "Karl", "FH-Dortmund", "Informatik", "WI", 4, "Analysis", "2.3", 3);

// save element on our Array
studyTable.push(stdOne);
studyTable.push(stdTwo);
studyTable.push(stdThree);

// display Student on StudyListe


// function table() {
//     let length = studyTable.length;
//     let k = 0;
//     while (k < length) {
//         let transitTable = [studyTable[k].name, studyTable[k].vorname, studyTable[k].fachbereich, studyTable[k].studiengang, studyTable[k].module, studyTable[k].hochschule];
//         var pos = 0;
//         for (var i = 0; i <= length; i++) {
//             // create a row
//             var tr = document.createElement("tr");
//             for (var j = 0; j < transitTable.length; j++) {
//                 // create a cell
//                 var td = document.createElement("td");
//                 // add text on cell
//                 if (pos === 0) {
//                     var a = document.createElement("a");
//                     a.href = "DetailsStudy.html";
//                     a.textContent = transitTable[pos];
//                     td.appendChild(a);

//                 } else {

//                     td.textContent = transitTable[pos];
//                 }
//                 pos++;
//                 // connect the cell with the row
//                 tr.appendChild(td);
//             }
//             // connect the row with the table
//             document.querySelector("tbody").appendChild(tr);
//         }
//         k++;
//     }
// };
// table();
//details Seite Study dynamisch erzeugen

function studyCard() {
    let a = studyTable.length;
    let b = 0;
    while (b < a) {
        let infoTable = [studyTable[b].name, studyTable[b].vorname, studyTable[b].hochschule, studyTable[b].fachbereich, studyTable[b].studiengang, studyTable[b].module];
        // create  a box "<div class=box-feld>"
        var divBox = document.createElement("div");
        divBox.className = "box-feld";
        // create Box Title
        var h4 = document.createElement("h4");
        var h5 = document.createElement("h5");
        // create a element P
        var p = document.createElement("p");
        // Text einbinden mit jeweilige html element
        h4.textContent = `${infoTable[0]},${infoTable[1]}.`;
        h5.textContent = `${infoTable[2]}.`;
        p.textContent = ` Hallo Zusammen, ich bin der Studierende ${infoTable[0]} und studiere ${infoTable[4]} an der ${infoTable[2]}. Ich biete in diesem Semester Hilfe an Studierende, die Problem bei ${infoTable[5]} haben. Wenn Ihre Studiengang: ${infoTable[4]} und Ihre Fachbereich ${infoTable[3]} entspricht, zögern Sie nicht, mich zu kontaktieren, wenn Sie an meinem Angebot interessiert sind.
        `;

        // Element zusammen binden und in document einfuegen
        h5.appendChild(p);
        h4.appendChild(h5);
        divBox.appendChild(h4);
        var wurze = document.getElementById("container-uebersicht");
        wurze.appendChild(divBox);
        b++;
    }
}
studyCard();