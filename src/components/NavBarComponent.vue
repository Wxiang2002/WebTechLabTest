<template>
    <div class="navbar">
      <div class="icon">
        <h2 class="logo">W.Tech.</h2>
      </div>
      <div class="menu">
        <ul>
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/photos">Photos</router-link></li>
        </ul>
      </div>
      <div class="search">
        <input class="srch" type="search" placeholder="Type To Find" v-model="searchQuery">
        <button class="btn" @click="searchPhotos">Find</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBarComponent',
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      searchPhotos() {
        this.$store.dispatch('updateSearchQuery', this.searchQuery);
      }
    }
  };
  </script>
  
  <style scoped>
  @import "../assets/styles.css";
  </style>
  