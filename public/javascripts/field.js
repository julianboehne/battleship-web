$(document).ready(function () {
    // Event Listener für alle Buttons
    $(".btn").on("click", async function () {
        // Spieler anhand der Klasse bestimmen
        const isPlayer1 = $(this).hasClass("player1-shot");
        const player = isPlayer1 ? 1 : 2;

        // x und y Koordinaten aus den data-Attributen
        const x = $(this).data("x");
        const y = $(this).data("y");

        try {
            // AJAX-Request basierend auf dem Spieler
            await $.ajax({
                type: "POST",
                url: `/game/player${player}/addShot`,
                contentType: "application/json",
                data: JSON.stringify({ x: x, y: y }),
            });
            location.reload(); // Seite aktualisieren nach erfolgreichem Schuss
        } catch (error) {
            console.error(`Fehler beim Hinzufügen des Schusses für Spieler ${player}:`, error);
            reloadShots()
        }
    });
});

function updateFieldVisibility(activePlayer) {
    const player1Field = document.getElementById('player1-field');
    const player2Field = document.getElementById('player2-field');

    if (activePlayer === 2) {
        // Spieler 1 ist aktiv, zielt auf Spieler 2's Feld
        player1Field.classList.add('inactive-field');
        player2Field.classList.remove('inactive-field');
    } else {
        // Spieler 2 ist aktiv, zielt auf Spieler 1's Feld
        player2Field.classList.add('inactive-field');
        player1Field.classList.remove('inactive-field');
    }
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

