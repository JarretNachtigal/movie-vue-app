<template>
  <div class="moviesEdit">
    <h5>edit movie</h5>
    Title:
    <input type="text" v-model="movieParams.title" />
    Release year:
    <input type="number" v-model="movieParams.year" />
    Plot:
    <input type="text" v-model="movieParams.plot" />
    <button v-on:click="updateMovie(newMovieParams)">submit</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movieParams: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      this.movieParams = response.data;
      console.log(response.data);
    });
  },
  methods: {
    updateMovie: function () {
      axios.patch(`/movies/${this.movieParams.id}`, this.movieParams).then((response) => {
        console.log(response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
