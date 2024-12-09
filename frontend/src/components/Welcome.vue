<template>
  <div>
    <h1>Schiffe versenken - Spielregeln</h1>
    <ul id="gamerules">
      <li>Zwei Spieler haben jeweils ein Spielfeld mit einer bestimmten Anzahl an Kästchen.</li>
      <li>Jeder Spieler platziert seine Schiffe verdeckt auf dem eigenen Spielfeld.</li>
      <li>Die Schiffe variieren in der Größe und nehmen mehrere Felder ein (1-5 Felder).</li>
      <li>Die Spieler schießen abwechselnd auf das Spielfeld des Gegners</li>
      <li>Trifft ein Schuss ein gegnerisches Schiff, wird dies als Treffer markiert.</li>
      <li>Das Ziel des Spiels ist es, alle gegnerischen Schiffe vollständig zu versenken.</li>
    </ul>

    <input
        type="text"
        class="form-control"
        v-model="player1Name"
        placeholder="Spielername 1 eingeben"
    >
    <input
        type="text"
        class="form-control"
        v-model="player2Name"
        placeholder="Spielername 2 eingeben"
    >

    <button
        id="startbutton"
        class="btn btn-success"
        @click="startGame"
    >
      Spielen
    </button>
  </div>
</template>

<script>
import '@/stylesheets/bootstrap.css'
import '@/stylesheets/main.css'
export default {
  name: 'BattleshipRules',
  data() {
    return {
      player1Name: '',
      player2Name: ''
    }
  },
  methods: {
    startGame() {
      const p1Name = this.player1Name.trim() || 'Player 1'
      const p2Name = this.player2Name.trim() || 'Player 2'

      this.$emit('start-game')
    }
  }
}
</script>
