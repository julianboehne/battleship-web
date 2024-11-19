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


function startNewGame() {
    alert("Starting a new game!");
}

function saveGame() {
    alert("Save Game");
    $.ajax({
        url: 'http://localhost:9000/game/save',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ action: "save" }),
        success: function (response) {
            console.log("Game saved successfully:", response);
            if (response.status === "success") {
                updateGame(response.data);
            }
        },
        error: function (xhr, status, error) {
            console.error("Error saving game:", error);
        }
    });
}

function loadGame() {
    alert("Load Game");
    $.ajax({
        url: 'http://localhost:9000/game/load',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log("Game loaded successfully:", response);
            if (response.status === "success") {
                updateGame(response.data);
            }
        },
        error: function (xhr, status, error) {
            console.error("Error loading game:", error);
        }
    });
}

function exitGame() {
    alert("Exiting the game!");
}