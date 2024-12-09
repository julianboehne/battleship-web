<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Battelship Game</a>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="startNewGame">New Game</a>
          </li>
          <li class="nav-item dropdown">
            <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
            >
              Options
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#" @click="saveGame">Save Game</a>
              <a class="dropdown-item" href="#" @click="loadGame">Load Game</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="exitGame">Exit</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>