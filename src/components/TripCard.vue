<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const props = defineProps({
    trip: {
        type: Object,
        required: true,
    },
});

const route = useRoute();

const statuses = ref([
    {id: 0, title: 'await', rusTitle: 'В ожидании'},
    {id: 1, title: 'in_progress', rusTitle: 'В процессе'},
    {id: 2, title: 'finished', rusTitle: 'Завершен'},
    {id: 3, title: 'canceled', rusTitle: 'Отменен'},
]);

// todo: удалить и перенести отсюда
const sources = ref([
    {id: 0, title: 'card', rusTitle: 'Карта'},
    {id: 1, title: 'cash', rusTitle: 'Наличные'}
]);

const currencies = ref([
    {id: 36, fullName: 'Австралийский доллар', charName: 'AUD', nominal: 1, value: '51.0225'},
    {id: 643, fullName: 'Российский рубль', charName: 'RUS', nominal: 1, value: '100'},
    {id: 933, fullName: 'Белорусский рубль', charName: 'BYN', nominal: 1, value: '26.4958'},
    {id: 978, fullName: 'Евро', charName: 'EUR', nominal: 1, value: '85.4847'},
    {id: 840, fullName: 'Доллар США', charName: 'USD', nominal: 1, value: '74.62'},
]);


function deleteTrip(id, title)
{
    if (!confirm("Вы уверены, что хотите удалить '" + title + "' ?")) {
        return;
    }
}

</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">{{ trip.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ trip.dateFrom + ' - ' + trip.dateTo }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Статус: {{ statuses[trip.status].rusTitle }}</h6>
            <p class="card-text text-muted">{{ trip.description }}</p>
        </div>
        <div class="card-footer bg-transparent border-0 pt-0 d-flex justify-content-between align-items-center">
            <RouterLink v-if="!route.params.id" :to="{name: 'Trip', params: {id: trip.id}}" class="btn btn-primary">Подробнее <i class="bi bi-arrow-right-circle"></i></RouterLink>
            <div>
                <RouterLink :to="{name: 'UpdateTrip', params: {id: trip.id}}" type="submit" class="btn btn-outline-warning">Редактировать</RouterLink>
                <button type="submit" class="btn btn-outline-danger mx-1" @click="deleteTrip(trip.id, trip.title)">Удалить</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
