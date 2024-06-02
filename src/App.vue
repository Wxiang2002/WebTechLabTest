<template>
 <div class="container">
  <NavBarComponent />
  <router-view/>
  
  </div>
</template>

<script>
import ContentComponent from './components/ContentComponent.vue'
import NavBarComponent from './components/NavBarComponent.vue'

export default {
  name: 'App',
  components: {
    ContentComponent,
    NavBarComponent
  }
}
</script>

<style scoped>@import './assets/styles.css';</style>
