document.addEventListener("DOMContentLoaded", function () {
    // Alle Elemente mit data-function finden
    const navLinks = document.querySelectorAll('[data-function]');

    // Event Listener für jeden Link hinzufügen
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Name der Funktion aus dem data-function Attribut abrufen
            const functionName = this.getAttribute('data-function');

            // Prüfen, ob die Funktion definiert ist
            if (typeof window[functionName] === "function") {
                // Die Funktion ausführen
                window[functionName]();
            } else {
                console.error(`Function "${functionName}" is not defined`);
            }
        });
    });
});

function addShot(player, x, y) {
    let url = player === 1 ? 'http://localhost:9000/game/player1/addShot' : 'http://localhost:9000/game/player2/addShot';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ x: x, y: y })
    }).then(response => {
        if (response.ok) {
            location.reload();
        } else {
            console.error("Fehler beim Hinzufügen des Schusses für Spieler " + player);
        }
    }).catch(error => {
        console.error("Request-Fehler:", error);
    });
}


function isValid(input) {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/isValid/' + input;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error isValid " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}

