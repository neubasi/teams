// Data
const spieler = ["Simon", "Basti", "Jasmin", "Chrissi", "Tobi", "Sebi", "Kevin", "Sven"];
const anzahlTeams = 2;
let countdown = 4;

console.log("---------------------------------------------------------------");
console.log("------------------------- TEAM APP v1 -------------------------");
console.log("");
console.log("Anzahl Teilnehmer "+ spieler.length);
console.log("Anzahl Teams "+ anzahlTeams);
console.log("");

const maxGrösseTeams = spieler.length / anzahlTeams;
const result = [];

function removeRandom(array) {
    let result = [];
    for (let index = 0; index < anzahlTeams; index++) {
        const random = Math.floor(Math.random() * array.length);
        const el = array.splice(random, 1)[0];
        result.push(el)
    }
    return result;
}

function transformData() {
    for (let index = 0; index < maxGrösseTeams; index++) {
        result.push(removeRandom(spieler))
    }
    console.table(result)
}

function printCountdown() {
    for (var i = 1; i <= countdown - 1; i++) {
        (() => {
            setTimeout(() => {
                countdown--;
                console.log("Team-Builder startet in " + countdown + " Sekunden...")
            }, i * 1000);
        })();
    }
}

printCountdown();
setTimeout(transformData, countdown * 1000);
