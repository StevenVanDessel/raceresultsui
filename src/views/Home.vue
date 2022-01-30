<template>
  <div class="home">
    <RiderList
      v-bind:riders="availableRiders"
      title="Known riders"
      selectionModeOn
      @filterRidersByNameContaining="filterAvailableRidersByNameContaining"
      @ridersSelected="ridersSelected"
    />
    <p>&nbsp;</p>
    <RiderList
      v-bind:riders="filteredSelectedRiders"
      title="Selected riders"
      @filterRidersByNameContaining="filterSelectedRidersByNameContaining"
    />
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
      selectedRidersFilterText: null,
    };
  },
  components: {
    RiderList,
  },
  computed: {
    availableRiders() {
      return this.$store.state.riders;
    },
    filteredSelectedRiders() {
      if (
        this.selectedRidersFilterText == null ||
        this.selectedRidersFilterText == ""
      ) {
        return this.selectedRiders;
      } else {
        return this.selectedRiders.filter((element) => {
          return element.name.includes(this.selectedRidersFilterText);
        });
      }
    },
  },
  methods: {
    filterAvailableRidersByNameContaining(event) {
      this.$store
        .dispatch("fetchRidersByNameContaining", event.text)
        .catch((error) => {
          this.error = error;
        });
    },
    filterSelectedRidersByNameContaining(event) {
      this.selectedRidersFilterText = event.text;
    },
    ridersSelected(event) {
      for (let identifier of event.ridersSelected) {
        let filteredArray = this.availableRiders.filter((element) => {
          return element.identifier == identifier;
        });
        for (let rider of filteredArray) {
          this.selectedRiders.push(rider);
        }
      }
    },
  },
};
</script>

<style>
.home {
  padding: 25px;
}
</style>
