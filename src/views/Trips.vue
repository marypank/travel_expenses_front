<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import TripsList from '../components/TripsList.vue';

const trips = ref([
    { id: 1, title: 'Санкт-Петербург', slug: 'saint-petespurg', description: '', dateFrom: '22.03.26', dateTo: '27.03.26', status: 2},
    { id: 2, title: 'Поездка в Китай', slug: 'china', description: 'Еду на 2 недели: Сиань (7 дней) и Пекин (7 дней)', dateFrom: '20.04.26', dateTo: '02.05.26', status: 1},
    { id: 3, title: 'Домбай', slug: 'dombai', description: 'На поезде, хайкинг по горам', dateFrom: '11.07.26', dateTo: '18.07.26', status: 1},
    { id: 4, title: 'Октябрьский отпуск', slug: 'october', description: '', dateFrom: '03.10.26', dateTo: '16.10.26', status: 1},
]);

</script>

<template>
    <div class="container mt-4">
        <div class="my-2">
            <RouterLink :to="{name: 'CreateTrip'}" class="btn btn-primary btn-lg">Создать путешествие</RouterLink>
        </div>
        <div class="d-flex flex-wrap gap-3">
            <TripsList :trips="trips"></TripsList>
        </div>
    </div>
</template>

<style scoped></style>
