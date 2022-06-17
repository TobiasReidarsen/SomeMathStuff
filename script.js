// HJELPEVARIABLER
let appDiv = document.getElementById('app');

// MODEL
let dividedNumbers = [];
let n = 0;
let b = 0;

// VIEW
view();
function view() {
    let html = `<h1>Talldeler</h1>`;

    html += /*HTML*/`
    <p>Lager en array som inneholder alle tall fra 0 til n som har modulo b (hvor n er et positivt integer).</p></br>
    <p>Har ikke puttet inn noen form for error handling eller noe, enda #todo.</p>
    <p>Skriv inn n: <input onchange = "n = this.value"/></p>
    <p>Skriv inn divisor: <input onchange="b = this.value"/></p>
    </br>
    <button onclick="moduloFunc()">Trykk her for å dele</button>
    `;
    html += /*HTML*/`
    <p>${dividedNumbers}</p> <!-- Kan gjøre det om til en for loop. Litt mer gøy kanskje-->
    `;


    appDiv.innerHTML = html;
}

//CONTROLLER

/**
 * ModuloFunc henter variablene n og b, som brukeren har skrever inn.
 * Den tar så sjekker om a % b == 0. Hvis den er lik 0, så puttes i inn i arrayen dividedNumbers.
 */
function moduloFunc() {
    for (let i = 0; i < n; i++) {
        if (i % b == 0) {
            dividedNumbers.push(i);
        }
        //dividedNumbers.push(i % b == 0); Vil gjøre noe sånt
    }
    console.log(dividedNumbers);

    view();
    dividedNumbers = [];
}