<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="4:3">
        <img :src="item.Poster" :alt="item.Title" />
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">{{ item.Title }}</span>
          <span class="md-subhead">Director: , Year: {{ item.Year }}</span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'MovieCard',
  props: [ 'item' ]
}
</script>
