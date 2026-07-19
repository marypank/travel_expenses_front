<script setup>
import { ref } from 'vue';
import TripCard from '../components/TripCard.vue';

// todo: запрос тут по ид, можно кстати вместе с expenses
const trip = ref(
    { id: 1, title: 'Санкт-Петербург', slug: 'saint-petespurg', description: '', dateFrom: '2026-03-26 00:00:00', dateTo: '2026-03-27 00:00:00', status: 2}
);

</script>

<template>
    <div class="container mt-4">
        <div class="d-flex flex-wrap gap-3">
            <div class="flex-grow-1 col-12 col-md-12 col-lg-12">
                <TripCard :trip="trip"></TripCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>