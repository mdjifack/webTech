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

let stdOne = new Study("Albert", "Einstein", "FH-Dortmund", "Informatik", "WI", 4, "Analysis", "2.3", 3);
let stdTwo = new Study("Bernard", "Foch", "TU-Dortmund", "Architektur", "Design", 2, "Physik", "1.3", 4);
let stdThree = new Study("Bro", "Karl", "FH-Dortmund", "Informatik", "WI", 4, "Analysis", "2.3", 3);

// save element on our Array
studyTable.push(stdOne);
studyTable.push(stdTwo);
studyTable.push(stdThree);

// export das Modul
module.exports = {
    studyTable: studyTable
}