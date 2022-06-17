// HJELPEVARIABLER
let appDiv = document.getElementById('app');

// MODEL
let dividedNumbers = [];
let n = 0;
let b = 0;

// VIEW
view();
function view(){
    let html = `<h1>Talldeler</h1>`;

    html += /*HTML*/`
    <p>Lager en array som inneholder alle tall fra 0 til n som har modulo b (hvor n er et positivt integer).</p></br>
    <p>Skriv inn n: <input onchange = "n = this.value"/></p>
    <p>Skriv inn divisor: <input onchange="b = this.value"/></p>
    </br>
    <button onclick="moduloFunc()">Trykk her for å dele</button>
    `;

    appDiv.innerHTML = html;
}

//CONTROLLER

function moduloFunc(){
    for(let i = 0; i < n; i++){
        if(i % b == 0){
            dividedNumbers.push(i);
        }
        //dividedNumbers.push(i % b == 0); Vil gjøre noe sånt
    }
view();
dividedNumbers = [];
}