<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <h2 class="text-primary">Player 1</h2>
    <table id="player1-board">
      <tr>
        <td></td>
        <td v-for="(letter, index) in boardLetters" :key="index">{{ letter }}</td>
      </tr>
      <tr v-for="(row, rowIndex) in size" :key="rowIndex">
        <td>{{ rowIndex + 1 }}</td>
        <td v-for="(col, colIndex) in size" :key="colIndex">
          <button
              class="shipButton1 btn btn-outline-primary"
              @click="placeShip(rowIndex + 1, colIndex + 1)"
          >
            <span v-if="isShipAtPosition(colIndex + 1, rowIndex + 1)">🚢</span>
            <span v-else="board[(rowIndex) * size + (colIndex)].text === '🚢'">🚢</span>
            <span v-else>{{ getCellContent(colIndex + 1, rowIndex + 1).text }}</span>
          </button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script setup>
import '@/stylesheets/bootstrap.css'
import '@/stylesheets/main.css'


import {ref, onMounted, computed} from 'vue'
import { gameService } from '@/services/api'

const currentPlayer = ref(1)
const input1 = ref('')
const input2 = ref('')
const board = ref([
  { text: ""},
]);
const title = ref('')
const size = ref(0)
const ships_x = ref([])
const ships_y = ref([])

const boardLetters = computed(() => {
  return Array.from({ length: size.value }, (_, i) =>
      String.fromCharCode(65 + i)
  );
})

const isShipAtPosition = (col, row) => {
  for (let i = 0; i < ships_x.value.length; i++) {
    if (ships_x.value[i] === col && ships_y.value[i] === row) {
      return true;
    }
  }
  return false;
}

const getCellContent = (col, row) => {
  const index = (row - 1) * size.value + (col - 1);
  return board.value[index] !== '.' ? board.value[index] : '';
}

const placeShip = async (row, col) => {
  try {
    if (input1.value === "" && input2.value === "") {
      input1.value = board.value[(row - 1) * size.value + (col - 1)].text;
      board.value[(row - 1) * size.value + (col - 1)].text = '🚢';
    } else {
      input2.value = board.value[(row - 1) * size.value + (col - 1)].text;
      await addShipToBoard(input1.value, input2.value);
      input1.value = "";
      input2.value = "";
    }
  } catch (error) {
    console.error('Error placing ship:', error);
  }
};

// Funktion zum Hinzufügen des Schiffs
const addShipToBoard = async (input1, input2) => {
  try {
    const formData = new URLSearchParams();
    formData.append('first', input1);
    formData.append('second', input2);

    const response = await fetch('http://localhost:9000/game/player2/addShip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
      mode: 'no-cors', // Beibehalten, damit es funktioniert
    });

    // Da no-cors keine Antwort erlaubt, kannst du die Antwort nicht prüfen
    console.log('Request sent (no-cors). Check server for results.');
    await fetchGameData()
  } catch (error) {
    console.error('Error placing ship:', error);
    await fetchGameData()
  }
};

const fetchGameData = async () => {
  try {
    const response = await fetch('http://localhost:9000/game/addShips1json');
    const data = await response.json();

    title.value = data.title;
    size.value = data.size;
    board.value = Array.from({ length: data.size * data.size }, (_, index) => {
      const value = data.board[index];
      return { text: value }; // Weise jedem Feld den entsprechenden Wert zu
    });
    ships_x.value = data.ships_x;
    ships_y.value = data.ships_y;
  } catch (error) {
    console.error('Error fetching game data:', error);
  }
}

const checkGameState = async () => {
  const player1Ready = await gameService.checkShipsReady(1)
  const player2Ready = await gameService.checkShipsReady(2)

  if (player1Ready && !player2Ready) {
    currentPlayer.value = 2
  } else if (player1Ready && player2Ready) {
    navigateToGrid()
  }
}

onMounted(() => {
  fetchGameData() // Wird beim Mounten ausgeführt
})


</script>