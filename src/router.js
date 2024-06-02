import { createRouter, createWebHistory } from 'vue-router';
import ContentComponent from './components/ContentComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';
import PhotosComponent from './components/PhotosComponent.vue';

const routes = [
  { path: '/', component: ContentComponent },
  { path: '/about', component: AboutComponent },
  { path: '/profile', component: ProfileComponent },
  { path: '/photos', component: PhotosComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;