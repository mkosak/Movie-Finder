<template>
  <div id="app">
    <Toolbar />

    <md-app>
      <md-app-content>
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
      return this.$store.getters.getMovies;
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  min-width: 480px;
}
</style>
