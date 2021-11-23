<template>
  <div class="moviesShow">
    <div>
      <h2>title: {{ movie.title }}</h2>
      <p>plot: {{ movie.plot }}</p>
      <p>year: {{ movie.year }}</p>
      <button v-on:click="editMovie()">edit</button>
      <button v-on:click="deleteMovie()">delete</button>
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
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      this.movie = response.data;
      console.log(response.data);
    });
  },
  methods: {
    editMovie: function () {
      this.$router.push(`/movies/${this.movie.id}/edit`);
    },
    deleteMovie: function () {
      axios.delete(`/movies/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push(`/movies`);
      });
    },
  },
};
</script>
