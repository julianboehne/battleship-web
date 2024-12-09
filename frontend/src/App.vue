<script setup>
import { ref } from 'vue'
import Field1 from '@/components/Field1.vue'
import Field2 from '@/components/Field2.vue'
import NavBar from "@/components/NavBar.vue";
import Welcome from "@/components/Welcome.vue";
import '@/stylesheets/bootstrap.css'
import '@/stylesheets/main.css'

const showWelcome = ref(true)

const handleStartGame = () => {
  showWelcome.value = false
}
</script>

<!-- App.vue oder eine andere übergeordnete Komponente -->
<template>
  <div class="game">
    <NavBar />
    <Welcome v-if="showWelcome" @start-game="handleStartGame" />
    <div v-else>
      <h1>Battelship Game</h1>
      <table>
        <tbody>
        <tr>
          <td class="Spielfeld">
            <Field1 />
          </td>
          <td class="Spielfeld">
            <Field2 />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
