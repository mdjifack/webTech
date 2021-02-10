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

function saveData() {
    var name = document.getElementById("name").value;
    var vorname = document.getElementById("vorname").value;
    var schule = document.getElementById("schule").value;
    var fach = document.getElementById("fach").value;
    var studiengang = document.getElementById("studiengang").value;
    var aktsemester = document.getElementById("aktsemester").value;
    var module = document.getElementById("module").value;
    var note = document.getElementById("note").value;
    var semesterabgelegt = document.getElementById("semester").value;
    // var literatur = document.getElementById("literatur").value;

    let student = new Study(name, vorname, schule, fach, studiengang, aktsemester, module, note, semesterabgelegt);
    return student;
    console.log("hello");
}
// console.log(val().name + " " + val().aktuelleSemester);