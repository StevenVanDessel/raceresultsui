<template>
  <div class="home">
    <RiderList
      v-bind:riders="availableRiders"
      title="Known riders"
      selectionModeOn
    />
    <p>&nbsp;</p>
    <RiderList v-bind:riders="selectedRiders" title="Selected riders" />
  </div>
</template>

<script>
// @ is an alias to /src
import RiderList from "@/components/RiderList.vue";

export default {
  name: "Home",
  data() {
    return {
      selectedRiders: [],
    };
  },
  components: {
    RiderList,
  },
  computed: {
    availableRiders() {
      return this.$store.state.riders;
    },
  },
};
</script>

<style>
.home {
  padding: 25px;
}
</style>
