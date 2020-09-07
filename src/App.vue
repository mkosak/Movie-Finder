<template>
  <div id="app">
    <Toolbar />

    <md-app>
      <md-app-content class="movie-finder-container">
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: {
    Toolbar
  },
  computed: {
    results() {
      console.log('results', this.$store.getters.getMovies);
      return this.$store.getters.getMovies;
    }
  }
}
</script>

<style lang="scss">
.movie-finder-container {
  height: 100vh;
}
</style>
