<template>
  <div class="moviesIndex">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>
        {{ movie.title }}
      </h2>
      <p>{{ movie.plot }}</p>
      <p>{{ movie.year }}</p>
      <button v-on:click="moviesShow(movie)">show</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movies: [],
    };
  },
  created: function () {
    axios.get("/movies").then((response) => {
      this.movies = response.data;
      console.log(response.data);
    });
  },
  methods: {
    moviesShow: function (movie) {
      this.$router.push(`movies/${movie.id}`);
    },
  },
};
</script>
