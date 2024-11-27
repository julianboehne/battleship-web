$(document).ready(function () {
    let input1 = "";
    let input2 = "";

    // Ship button click event
    $(".shipButton1").on("click", async function () {
        if (input1 === "" && input2 === "") {
            input1 = $(this).text();
            $(this).text('🚢');
        } else {
            input2 = $(this).text();
            $(this).text('🚢');
            await addShip(1, input1, input2);

        }
    });

    $(".shipButton2").on("click", async function () {
        if (input1 === "" && input2 === "") {
            input1 = $(this).text();
            $(this).text('🚢');
        } else {
            input2 = $(this).text();
            $(this).text('🚢');
            await addShip(2, input1, input2);
        }
    });


});


//  javascript functions
// --------------------------------------------------------

// Function to add a ship via AJAX
async function addShip(player, cords1, cords2) {
    try {
        // Perform the POST request to add the ship
        await $.ajax({
            type: "POST",
            url: `/game/player${player}/addShip`,
            contentType: "application/json",
            data: JSON.stringify({ first: cords1, second: cords2 }),
        });

        // // Check if ships are ready by awaiting the result of shipsReady
        // const isReady = await shipsReady(player);
        //
        // // Redirect based on readiness status
        // if (isReady) {
        //     if (player === 1) {
        //         window.location.href = '/game/addShips2';
        //     } else {
        //         window.location.href = '/game/grid';
        //     }
        // }
    } catch (error) {
        console.error("Error in addShip:", error);
        reloadShips();
    }
}


// Function to check if ships are ready
function shipsReady(player) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: `/game/shipsReady/${player}`,
            success: function (response) {
                resolve(response.ready);
            },
            error: function (xhr) {
                console.error(`Error (${xhr.status}): ${xhr.statusText}`);
                reject();
            },
        });
    });
}

//undo command
function undo() {
}
//redo command
function redo() {

}
//autoShips command
function autoShips() {
}




