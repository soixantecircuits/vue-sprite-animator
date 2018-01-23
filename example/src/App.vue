<template>
  <div id="app">
    <v-sprite :id="'sprite'"
      :spritesheet="require('../assets/spritesheet.png')"
      :json="require('../assets/spritesheet.json')"
      ref="sprite"
    ></v-sprite>
  </div>
</template>

<script></script>

<style>
body {
  background: #1A1A1A;
}
</style>
