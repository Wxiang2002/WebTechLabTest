import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { createStore } from 'vuex'

export default new Vuex.Store({
  state: {
    profile: {
      name: 'Soo Wei Xiang',
      courseYear: '3 SECJH',
      matrixNo: 'A21MJ5038',
      address: 'Kolej Kediaman Siswa Jaya',
    },
    photos: [],
    searchQuery: ''
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    updateProfile({ commit }, profile) {
      commit('setProfile', profile);
    },
    async fetchPhotos({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
        commit('setPhotos', response.data);
      } catch (error) {
        console.error("Error fetching photos: ", error);
      }
    },
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    }
  },
  getters: {
    getProfile: (state) => state.profile,
    filteredPhotos: (state) => {
      if (state.searchQuery === '') {
        return state.photos;
      }
      return state.photos.filter(photo => 
        photo.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  }
});
