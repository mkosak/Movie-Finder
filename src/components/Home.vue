<template>
  <div>
    <md-field>
      <input class="md-input" :value="searchTerm" @input="updateSearchTerm" placeholder="Type to search movie" />
      <md-button type="submit" class="md-primary" @click="searchMovies" :disabled="isLoading">SEARCH</md-button>
    </md-field>

    <div class="movie-finder-spinner">
      <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate" v-show="isLoading"></md-progress-spinner>
    </div>

    <div class="movie-finder-search-history" v-show="getResultsHistory.length">
      <h2>History</h2>
      <md-list>
        <md-list-item v-for="(history, index) in getResultsHistory" :key="`${history.term}_${index}`">
          {{ history.term }}
          <ul>
            <li v-for="(movie, index) in history.results" :key="`${movie}_${index}`">{{ movie.Title }}</li>
          </ul>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState(['form']),
    searchTerm: {
      set(searchTerm) {
        this.$store.commit('addForm', { searchTerm });
      },
      get() {
        return this.form.searchTerm;
      }
    },
    isLoading() {
      return this.$store.getters.getLoading;
    },
    getResultsHistory() {
      return this.$store.getters.getResultsHistory;
    },
    getMovies() {
      return this.$store.getters.getMovies;
    }
  },
  methods: {
    updateSearchTerm(e) {
      this.$store.commit('setForm', { searchTerm: e.target.value });
    },
    async searchMovies() {
      // run spinner
      this.$store.dispatch('addLoading', true);

      const term = this.form.searchTerm;

      // save search term
      this.$store.dispatch('addForm', term);

      // search movies
      const results = await this.$store.dispatch('searchMovies', term);

      // save search result
      this.$store.dispatch('addResultsHistory', this.getMovies);

      // stop spinner
      this.$store.dispatch('addLoading', false);

      // navigate to the results page
      this.$router.push({ path: 'results' })
    }
  },
  created() {
    this.$store.dispatch('addForm');
  }
}
</script>

<style scoped>
.movie-finder-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}
</style>
