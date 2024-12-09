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
            <span v-else>{{ getCellContent(colIndex + 1, rowIndex + 1) }}</span>
          </button>
        </td>
      </tr>
    </table>
    Ships_x: {{ ships_x }}
    Ships_y: {{ ships_y }}
    Size: {{ size }}
    Title: {{ title }}
    Board: {{ board }}

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
let board = ref([])// Wird später mit dem "board" initialisiert
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
    const response = await fetch(`/game/player1/addShip`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ row, col }),
    });

    const data = await response.json();
    console.log('Ship placed:', data);
    ships_x.value.push(col);
    ships_y.value.push(row);
  } catch (error) {
    console.error('Error placing ship:', error);
  }
}

const fetchGameData = async () => {
  try {
    const response = await fetch('http://localhost:9000/game/addShips1json');
    const data = await response.json();

    title.value = data.title;
    size.value = data.size;
    board.value = data.board;
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