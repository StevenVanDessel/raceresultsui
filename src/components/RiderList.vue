<template>
  <h1>{{ title }}</h1>
  <div id="riderOverview" v-if="error == null">
    <div v-if="riders != null && riders.length">
      <p>
        Rider name contains
        <input
          type="text"
          v-model="riderNameFilterInput"
          id="riderNameFilterInput"
          name="riderNameFilterInput"
        />
        &nbsp;
        <input
          type="button"
          value="Filter riders"
          v-on:click="filterRidersOnName"
        />
      </p>
      <table id="riderTable">
        <thead>
          <tr>
            <th v-if="selectionModeOn">&nbsp;</th>
            <th>Name</th>
            <th>Identifier</th>
            <th>Year of Birth</th>
            <th>Province</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rider in riders" v-bind:key="rider.identifier">
            <td v-if="selectionModeOn" style="text-align: center">
              <input
                type="checkbox"
                :id="rider.identifier"
                :value="rider.identifier"
                v-model="checkedRiderIdentifiers"
              />
            </td>
            <td>
              <router-link
                :to="{ name: 'RiderDetail', params: { id: rider.id } }"
                >{{ rider.name }}</router-link
              >
            </td>
            <td>{{ rider.identifier }}</td>
            <td>{{ rider.yearOfBirth }}</td>
            <td>{{ rider.province }}</td>
          </tr>
        </tbody>
      </table>
      <input
        type="button"
        v-if="selectionModeOn"
        value="Select"
        @click="ridersSelected"
        style="float: right"
      />
    </div>
    <div v-else><p>No riders to show</p></div>
  </div>
  <div v-else>
    <h2>
      Oops. An issue was encountered when trying to fetch the riders. Please try
      again later.
    </h2>
    <p>The error was {{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "RiderList",
  data() {
    return {
      error: null,
      riderNameFilterInput: null,
      checkedRiderIdentifiers: [],
    };
  },
  props: {
    riders: {
      type: Array,
      required: true,
    },
    selectionModeOn: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: "Rider Overview",
    },
  },
  emits: ["filterRidersByNameContaining", "ridersSelected"],
  computed: {},
  methods: {
    filterRidersOnName() {
      this.$emit("filterRidersByNameContaining", {
        text: this.riderNameFilterInput,
      });
    },
    ridersSelected() {
      this.$emit("ridersSelected", {
        ridersSelected: this.checkedRiderIdentifiers,
      });
    },
  },
  created() {},
};
</script>

<style></style>
