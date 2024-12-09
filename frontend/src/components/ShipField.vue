<template>
  <div class="ship-field">
    <button
        v-for="(button, index) in shipButtons"
        :key="index"
        :class="['ship-button', `player-${currentPlayer}`]"
        @click="handleShipPlacement(button)"
    >
      {{ button }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gameService } from '@/services/api'

const currentPlayer = ref(1)
const input1 = ref('')
const input2 = ref('')
let shipButtons = ref([])// Wird später mit dem "board" initialisiert

const handleShipPlacement = async (button) => {
  if (input1.value === '' && input2.value === '') {
    input1.value = button.text
    button.text = '🚢'
  } else {
    input2.value = button.text
    button.text = '🚢'
    await gameService.addShip(currentPlayer.value, input1.value, input2.value)
    input1.value = ''
    input2.value = ''
    await checkGameState()
    await fetchGameData() // Aktualisiert die Daten nach jedem Button-Klick
  }
}

const fetchGameData = async () => {
  try {
    const response = await fetch('http://localhost:9000/game/addShips1json');
    const data = await response.json();

    // this.title = data.title;
    // this.size = data.size;
    shipButtons.value = data.board;
    // this.ships_x = data.ships_x;
    // this.ships_y = data.ships_y;
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

<style scoped>
.ship-field {
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* Gitter mit 10 Spalten */
  gap: 4px;
}

.ship-button {
  padding: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #f9f9f9;
}
</style>
