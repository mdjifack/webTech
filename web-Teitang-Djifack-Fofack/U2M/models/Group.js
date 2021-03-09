/* 
 *Diese Datei wurde von: 
 * @Wilfried Teitang
 *angelegt
 */
function Group(GruppeName, AdminName, ModulleZiel, GruppenRaum, GruppenLink, Anfangsdatum, Endsdatum, AnzahlTeilnehmer) {
    this.GruppeName = GruppeName;
    this.AdminName = AdminName;
    this.ModulleZiel = ModulleZiel;
    this.GruppenRaum = GruppenRaum;
    this.GruppenLink = GruppenLink;
    this.Anfangsdatum = Anfangsdatum;
    this.Endsdatum = Endsdatum;
    this.AnzahlTeilnehmer = AnzahlTeilnehmer;
}
// Array erstellen, um Daten zu Speichern
let GroupTable = new Array();

let GroupOne = new Group("Albert", "Einstein", "Physik", "C.04", "https://www.webex.com", "01.03.2021", "31.08.2021", 3);
let GroupTwo = new Group("Bernard", "Foch", "Deutsch", "D.04", "https://www.webex.com", "01.04.2021", "31.08.2021", 5);
let GroupThree = new Group("Bro", "Karl", "Physik", "E.04", "https://www.webex.com/", "01.05.2021", "31.07.2021", 4);
let GroupFour = new Group("Rossi", "Dragui", "English", "C.04", "https://www.webex.com/", "01.03.2021", "31.08.2021", 3);
let GroupFive = new Group("Paul", "Le Guen", "Informatik", "D.04", "https://www.webex.com/", "01.04.2021", "31.08.2021", 5);
let GroupSix = new Group("Jacky", "Dongmo", "Architektur", "E.04", "https://www.webex.com/", "01.05.2021", "31.07.2021", 4);


// save element on our Array
GroupTable.push(GroupOne);
GroupTable.push(GroupTwo);
GroupTable.push(GroupThree);
GroupTable.push(GroupFour);
GroupTable.push(GroupFive);
GroupTable.push(GroupSix);


// export das Modul
module.exports = {
    Group: Group,
    GroupTable: GroupTable
}