<template>
  <div class="home">
    <RidersList />
  </div>
</template>

<script>
// @ is an alias to /src
import RidersList from "@/components/RidersList.vue";

export default {
  name: "Home",
  components: {
    RidersList,
  },
};
</script>

<style>
div {
  padding: 25px
}
</style>