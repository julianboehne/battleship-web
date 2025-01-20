<script setup>
import { ref, onMounted } from 'vue'
import Field1 from '@/components/Field1.vue'
import Field2 from '@/components/Field2.vue'
import NavBar from "@/components/NavBar.vue";
import Welcome from "@/components/Welcome.vue";
import '@/stylesheets/bootstrap.css'
import '@/stylesheets/main.css'

const showWelcome = ref(true)
const installPrompt = ref(null) // Ref für das Installationsereignis
const showInstallButton = ref(false) // Ref zur Steuerung der Schaltflächenanzeige

// Funktion für den Start des Spiels
const handleStartGame = () => {
  showWelcome.value = false
}

// Funktion zur Behandlung der Installation
const handleInstall = async () => {
  if (installPrompt.value) {
    installPrompt.value.prompt(); // Zeige das Installations-Popup
    const { outcome } = await installPrompt.value.userChoice;
    if (outcome === 'accepted') {
      console.log('App installiert');
    } else {
      console.log('Installation abgelehnt');
    }
    installPrompt.value = null; // Ereignis nach der Verwendung zurücksetzen
    showInstallButton.value = false; // Schaltfläche ausblenden
  }
}

// Listener für "beforeinstallprompt" hinzufügen
onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // Verhindere die Standardanzeige des Installations-Prompts
    installPrompt.value = e; // Speichere das Ereignis
    showInstallButton.value = true; // Zeige die Schaltfläche an
  });

  // Optionale Cleanup-Funktion
  return () => {
    window.removeEventListener('beforeinstallprompt', () => {});
  };
});
</script>

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
    <!-- Installations-Button -->
    <button
        v-if="showInstallButton"
        class="install-button"
        @click="handleInstall"
    >
      App installieren
    </button>
  </div>
</template>

<style>
.install-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.install-button:hover {
  background-color: #0056b3;
}
</style>
