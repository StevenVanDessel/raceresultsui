<template>
  <div class="home">
    <RiderList />
  </div>
</template>

<script>
// @ is an alias to /src
import RiderList from "@/components/RiderList.vue";

export default {
  name: "Home",
  components: {
    RiderList,
  },
};
</script>

<style>
.home {
  padding: 25px;
}
</style>