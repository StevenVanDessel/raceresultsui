<template>
<h1>Rider Overview</h1>
<table v-if="riders != null && riders.length">
    <thead>
        <tr><th>Name</th><th>Identifier</th><th>Date of Birth</th><th>Province</th></tr>
    </thead>
    <tbody>
        <tr v-for="rider in riders" v-bind:key="rider.identifier"><td>{{ rider.name }}</td><td>{{ rider.identifier }}</td><td>{{ rider.dateOfBirth }}</td><td>{{ rider.province }}</td></tr>
    </tbody>
</table>
<span v-else>No riders listed</span>
</template>

<script>
export default {
    name: "RidersList",
    data() {
        return {
            riders: null
        }
    }
}

</script>

<style>
table {
    width: 100%;
}
table, th, td {
    border: 1px solid black
}
</style>