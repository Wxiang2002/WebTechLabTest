<template>
    <form @submit.prevent="saveProfile">
      <table class="profile">
        <tr>
          <td><p>Name</p></td>
          <td>:</td>
          <td><input v-model="editedProfile.name"></td>
        </tr>
        <tr>
          <td>Course Year</td>
          <td>:</td>
          <td><input v-model="editedProfile.courseYear"></td>
        </tr>
        <tr>
          <td>Matrix No</td>
          <td>:</td>
          <td><input v-model="editedProfile.matrixNo"></td>
        </tr>
        <tr>
          <td>Address</td>
          <td>:</td>
          <td><input v-model="editedProfile.address"></td>
        </tr>
      </table>
      <div class="buttons">
        <button type="submit">Save</button>
        <button type="button" @click="resetForm">Reset</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ProfileComponent',
    data() {
      return {
        editedProfile: { ...this.$store.getters.getProfile },
        defaultProfile: { ...this.$store.getters.getProfile },
      };
    },
    computed: {
      profile() {
        return this.$store.getters.getProfile;
      },
    },
    methods: {
      saveProfile() {
        this.$store.dispatch('updateProfile', this.editedProfile);
        window.alert('Profile saved');
      },
      resetForm() {
        this.editedProfile = { ...this.defaultProfile };
      },
    },
  };
  </script>
  