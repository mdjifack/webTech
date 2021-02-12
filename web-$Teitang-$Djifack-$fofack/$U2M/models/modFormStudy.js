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


function table() {
    let length = studyTable.length;
    let k = 0;
    while (k < length) {
        let transitTable = [studyTable[k].name, studyTable[k].vorname, studyTable[k].fachbereich, studyTable[k].studiengang, studyTable[k].module, studyTable[k].hochschule];
        var pos = 0;
        for (var i = 0; i <= length; i++) {
            // create a row
            var tr = document.createElement("tr");
            for (var j = 0; j < transitTable.length; j++) {
                // create a cell
                var td = document.createElement("td");
                // add text on cell
                if (pos === 0) {
                    var a = document.createElement("a");
                    a.href = "DetailsStudy.html";
                    a.textContent = transitTable[pos];
                    td.appendChild(a);

                } else {

                    td.textContent = transitTable[pos];
                }
                pos++;
                // connect the cell with the row
                tr.appendChild(td);
            }
            // connect the row with the table
            document.querySelector("tbody").appendChild(tr);
        }
        k++;
    }
};
table();