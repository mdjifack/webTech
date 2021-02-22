/**  datei wurde von xxxxxxxxxxxxxxxxxxxxx fertig gestelt
 * 
 * 
 * 
 */
function Group(GruppeName, AdminName, ModulleZiel, GruppenRaum, GruppenLink, Anfangsdatum, Endsdatum, AnzahlTeilnehmer){
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

let GroupOne = new Group("Albert", "Einstein", "Physik", "C.04","https://www.spiegel.de","01.03.2021", "31.08.2021",3);
let GroupTwo = new Group("Bernard", "Foch", "Deutsch","D.04","https://www.spiegel.de", "01.04.2021", "31.08.2021",5);
let GroupThree = new Group("Bro", "Karl", "Physik","E.04","https://www.spiegel.de", "01.05.2021", "31.07.2021",4);


// save element on our Array
GroupTable.push(GroupOne);
GroupTable.push(GroupTwo);
GroupTable.push(GroupThree);


// export das Modul
module.exports = {
    Group: Group,
    GroupTable: GroupTable
}