<script setup>
import TripCard from './TripCard.vue';

const props = defineProps({
    trips: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <div v-for="trip in trips" :key="trip.id" class="flex-grow-1 col-12 col-md-4 col-lg-2-4">
        <TripCard :trip="trip"></TripCard>
    </div>
</template>

<style scoped>
</style>