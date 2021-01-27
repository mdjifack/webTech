// element button auswaehlen
let plusbtn = document.getElementById("plus");
// button ereugen
plusbtn.addEventListener('click', () => felderZeigen());

// fuction felderZeigen backgroundBlendMode:

function felderZeigen() {
    // Variable um Daten zu Speichern erzeugen
    let name = prompt("Bitte geben Sie Ihren Namen ein!");
    let url = prompt("Bitte geben Sie ein Link ein!");
    if (name.length > 1) {
        // Kachel erzeugen
        let kachelname = document.createElement("div");
        let kachelLink = document.createElement("a")
        kachelLink.href = url; // link an <a href> anhaengen
        kachelLink.textContent = name; // angezeigte Text an link anhaengen
        kachelname.append(kachelLink); // div und link zusammenhaengen
        document.getElementById("plus").before(kachelname); // erzeugte kachel vor der plus kachel anzeigen
    }
}