var Proffesions = document.getElementById("Proffession")
let Revolve = 0
function ProffesionChanger() {
    let ProffesionNames = ["Designer", "Artist", "Cosplayer"]

    Proffesions.textContent = ProffesionNames[Revolve]
    Revolve = Revolve + 1;
    if (Revolve > 2) {
        Revolve = 0
    }
    setTimeout(ProffesionChanger, 1000)
}
ProffesionChanger()