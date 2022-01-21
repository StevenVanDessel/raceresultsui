<template>
  <div>
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
  padding: 25px;
}
</style>