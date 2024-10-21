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

function loadGame() {
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:9000/game/load';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            location.reload()
        } else {
            console.error("error load " + xhr.status);
        }
    };
    xhr.send(JSON.stringify(''));
}

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