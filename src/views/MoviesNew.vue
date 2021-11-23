<template>
  <div class="moviesNew">
    <div class="moviesCreate">
      <h5>create a movie</h5>
      Title:
      <input type="text" v-model="newMovieParams.title" />
      Release year:
      <input type="number" v-model="newMovieParams.year" />
      Plot:
      <input type="text" v-model="newMovieParams.plot" />
      <button v-on:click="createMovie(newMovieParams)">submit</button>
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
      newMovieParams: {},
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      axios.post("/movies", this.newMovieParams).then((response) => {
        console.log(response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
