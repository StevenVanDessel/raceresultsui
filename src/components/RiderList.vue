<template>
<h1>Rider Overview</h1>

<div id="riderOverview" v-if="error == null">
<table id="riderTable" v-if="riders != null && riders.length">
    <thead>
        <tr><th>Name</th><th>Identifier</th><th>Date of Birth</th><th>Province</th></tr>
    </thead>
    <tbody>
        <tr v-for="rider in riders" v-bind:key="rider.identifier"><td>{{ rider.name }}</td><td>{{ rider.identifier }}</td><td>{{ rider.dateOfBirth }}</td><td>{{ rider.province }}</td></tr>
    </tbody>
</table>
<span v-else>No riders listed</span>
</div>
<div v-else>
  <h2>Oops. An issue was encountered when trying to fetch the riders. Please try again later.</h2>
  <p>The error was {{ error }}</p>
</div>
</template>

<script>
export default {
  name: 'RiderList',
  data() {
    return {
      error: null
    }
  },
  created() {
    this.$store.dispatch('fetchRiders')
    .catch(error => {
      this.error = error
    })
  },
  computed: {
    riders() {
      return this.$store.state.riders
    }
  }
}
</script>

<style>

</style>