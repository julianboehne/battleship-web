function setPlayerName(input) {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/setPlayerName/' + input;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error setPlayerName " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}


// function autoShips() {
//     let xhr = new XMLHttpRequest();
//     let url = 'http://localhost:9000/game/autoShips';
//     xhr.open('GET', url, true);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             location.reload()
//         } else {
//             console.error("error autoShips " + xhr.status);
//         }
//     };
//     xhr.send(JSON.stringify(''));
// }

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


function resetGame() {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/reset';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error reset " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}


// websocket
// ------------------------------------------------------------------------------------------------------------

function reloadAll() {
    reloadGame();
    reloadShips();
    reloadShots();
}

function reloadGame() {
    // ToDo richtige Seite laden
    console.log("reloadGame")
    location.reload();
}

function reloadShots() {
    console.log("reloadShots")
    location.reload();
}

async function reloadShips() {

    if (await shipsReady(1) && !await shipsReady(2)) {
        location.href = '/game/addShips2';
    } else if (!await shipsReady(1) && await shipsReady(2)) {
        location.href = '/game/addShips1';
    } else if (await shipsReady(1) && await shipsReady(2)) {
        location.href = '/game/grid';
    } else {
        location.href = '/game/addShips1';
    }


}


function connectWebSocket() {
    var websocket = new WebSocket("ws://localhost:9000/websocket");
    websocket.setTimeout

    websocket.onopen = function() {
        console.log("WebSocket Verbindung hergestellt");
    };

    websocket.onclose = function() {
        console.log('WebSocket Verbindung geschlossen');
        // Automatischer Reconnect nach 5 Sekunden
        setTimeout(connectWebSocket, 5000);
    };

    websocket.onerror = function(error) {
        console.error('WebSocket Fehler:', error);
    };

    websocket.onmessage = function(event) {
        try {
            switch (event.data) {
                case "reloadAll":
                    reloadAll();
                    break;
                case "reloadGame":
                    reloadGame();
                    break;
                case "reloadShots":
                    reloadShots();
                    break;
                case "reloadShips":
                    reloadShips();
                    break;
                default:
                    console.warn("Unbekannte WebSocket Nachricht:", event.data);
            }
        } catch (error) {
            console.error("Fehler bei der Verarbeitung der WebSocket Nachricht:", error);
        }
    };

    return websocket;
}

document.addEventListener('DOMContentLoaded', connectWebSocket);