<template>
  <v-app>
    <v-main class="grey darken-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>
<style scoped></style>
