<template>
  <md-toolbar class="md-primary movie-finder-toolbar">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <span class="md-title">MovieFinder</span>
      </div>
      <div class="md-toolbar-section-end">
        <md-button to="/">Home</md-button>
        <md-button to="/results">Results</md-button>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style lang="scss">
.movie-finder-toolbar .router-link-exact-active {
  text-decoration: underline;
}
</style>
