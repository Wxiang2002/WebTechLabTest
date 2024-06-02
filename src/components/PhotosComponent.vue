<template>
  <div class="photos">
    <h1>List of Photos</h1>
    <hr>
    <br>
    <div v-for="photo in filteredPhotos" :key="photo.id">
      <p>{{ photo.id }}. {{ photo.title }}</p>
      <img :src="photo.thumbnailUrl" :alt="photo.title">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PhotosComponent',
  created() {
    this.fetchPhotos();
  },
  computed: {
    ...mapGetters(['filteredPhotos']),
  },
  methods: {
    fetchPhotos() {
      this.$store.dispatch('fetchPhotos');
    }
  }
};
</script>
