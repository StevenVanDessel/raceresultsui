<template>
  <div class="home">
    <h1>Rider Detail</h1>
    <p>Name: {{rider.name}}</p>
    <p>Identifier: {{rider.identifier}}</p>
    <p>yearOfBirth: {{rider.yearOfBirth}}</p>
    <p>province: {{rider.province}}</p>
  </div>
</template>

<script>
export default {
  name: "RiderDetail",
  components: {
    
  },
  computed: {
    rider() {
        console.log('retrieving rider from store: ' + this.$store.rider.id + ', ' + this.$store.rider.name)
      return this.$store.rider
    }
  }
};
</script>

<style>
.home {
  padding: var(--default-padding-for-blocks);
}

h1 {
  border-bottom: var(--default-border-size) solid var(--primary-color);
  margin-bottom: 25px;
}
</style>