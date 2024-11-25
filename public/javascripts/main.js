function undo() {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/undo';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error undo " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}

function redo() {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/redo';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error redo " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}

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

function autoShips() {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/autoShips';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error autoShips " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}

// function loadGame() {
//     let xhr = new XMLHttpRequest();
//     let url = 'http://localhost:9000/game/load';
//     xhr.open('GET', url, true);
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             location.reload()
//         } else {
//             console.error("error load " + xhr.status);
//         }
//     };
//     xhr.send(JSON.stringify(''));
// }

function saveGame() {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/save';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error save " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
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

function addShot(player, x, y) {
    console.log("Test")
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


/*function addShip(player, cords1, cords2) {
    const url = `/game/player${player}/addShip`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first: cords1, second: cords2 })
    }).then(response => {
        if (!response.ok) {
            console.error("Fehler beim Hinzufügen des Schiffs für Spieler " + player);
            location.reload();
        } else {
            shipsReady(player).then((isReady) => {
                if (isReady) {
                    if (player === 1) window.location.href = 'http://localhost:9000/game/addShips2'
                    else window.location.href = 'http://localhost:9000/game/grid'
                }
            }).catch((error) => {
                console.error("Error:", error);
            });
            location.reload();
        }
    }).catch(error => {
        console.error("Request-Fehler:", error);
    });
}

function shipsReady(player) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let url = 'http://localhost:9000/game/shipsReady/' + player;

        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    // Parse the JSON response
                    let response = JSON.parse(xhr.responseText);
                    // Resolve the Promise with the 'ready' boolean value
                    resolve(response.ready);
                } catch (error) {
                    // Reject if JSON parsing fails
                    reject("Parsing error: " + error.message);
                }
            } else {
                // Reject if the response status is not 200
                reject("Error: status code " + xhr.status);
            }
        };

        xhr.onerror = function () {
            reject("Request error");
        };

        xhr.send();
    });
}*/

function reloadAll() {
    reloadGame();
    reloadShips();
    reloadShots();
}

function reloadGame() {
    console.log("reloadGame")
    location.reload();
}

function reloadShots() {
    console.log("reloadShots")
    location.reload();
}

function reloadShips() {
    location.reload();
    console.log("reloadShips")
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