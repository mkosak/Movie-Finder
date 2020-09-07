<template>
  <div>
    <template v-if="moviesList.length">
      <carousel>
        <slide v-for="movie in moviesList" :key="movie.id">
          <MovieCard :item="movie" />
        </slide>
      </carousel>
    </template>
    <template v-else>
      <md-empty-state md-icon="tv" md-label="No movies found">
        <md-button to="/" class="md-primary md-raised">Return to search field</md-button>
      </md-empty-state>
    </template>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import MovieCard from './MovieCard.vue';

export default {
  name: 'Results',
  components: {
    Carousel,
    Slide,
    MovieCard
  },
  computed: {
    moviesList() {
      return this.$store.getters.getMovies;
    }
  }
}
</script>
