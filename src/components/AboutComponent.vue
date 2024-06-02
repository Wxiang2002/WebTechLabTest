<template>
  <div class="about">
    <table>
      <tr>
        <td>Name</td>
        <td>:</td>
        <td>{{ profile.name }}</td>
      </tr>
      <tr>
        <td>Course Year</td>
        <td>:</td>
        <td>{{ profile.courseYear }}</td>
      </tr>
      <tr>
        <td>Matrix No</td>
        <td>:</td>
        <td>{{ profile.matrixNo }}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>:</td>
        <td>{{ profile.address }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    },
  },
};
</script>
