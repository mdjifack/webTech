/* 
 *Diese Datei wurde von: 
 * Fofack,Daniele
 *angelegt
 */
function Study(vorname, name, hochschule, fachbereich, studiengang, aktuelleSemester, module, note, semesterabgelegt) {
    this.vorname = vorname;
    this.name = name;
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

let stdOne = new Study("Albert", "Einstein", "FH-Dortmund", "Informatik", "WI", 4, "Analysis", "2.3", 3);
let stdTwo = new Study("Bernard", "Foch", "TU-Dortmund", "Architektur", "Design", 2, "Physik", "1.3", 4);
let stdThree = new Study("Bro", "Karl", "TU-Dortmund", "Informatik", "WI", 4, "Analysis", "2.3", 3);
let stdFour = new Study("Rossi", "Dragui", "FH-Dortmund", "Design", "Musik", 4, "Klavier", "1.7", 2);
let stdFive = new Study("Paul", "Le Guen", "TU-Dortmund", "Elektrotechnik", "MaschinenBau", 2, "Physik", "1.3", 4);
let stdSix = new Study("Jacky", "Dongmo", "FH-Dortmund", "BWL", "Logistik", 4, "Logistik-Management", "2.3", 1);

// save element on our Array
studyTable.push(stdOne);
studyTable.push(stdTwo);
studyTable.push(stdThree);
studyTable.push(stdFour);
studyTable.push(stdFive);
studyTable.push(stdSix);

// export das Modul
module.exports = {
    studyTable: studyTable,
    Study: Study
}