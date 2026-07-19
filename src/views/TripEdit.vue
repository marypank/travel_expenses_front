<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isEdit = route.params.id;

const trip = ref({
    title: '',
    slug: '',
    description: '',
    dateFrom: '',
    dateTo: '',
    date: [],
    status: 0,
})

onMounted(async () => {
    if (isEdit) {
        const tripData =  { id: 1, title: 'Санкт-Петербург', slug: 'saint-petespurg', description: '', dateFrom: '2026-03-26 00:00:00', dateTo: '2026-03-27 00:00:00', status: 2};
        trip.value = {
            ...tripData,
            date: [tripData.dateFrom, tripData.dateTo],
        }
    }
})

</script>

<template>

<div class="container-fluid py-5">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">{{ isEdit ? 'Редактировать путешествие' : 'Новое путешествие' }}</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="handleSubmit">
                        <div class="mb-3">
                            <label for="title" class="form-label">Название<span class="text-danger">*</span></label>
                            <input v-model="trip.title" type="text" class="form-control" id="title" required>
                        </div>

                        <div class="mb-3">
                            <label for="date" class="form-label">Даты <span class="text-danger">*</span></label>
                            <VueDatePicker v-model="trip.date" :range="{ autoRange: 0, partialRange: false }" />
                        </div>

                        <div class="mb-3"> <!-- todo: переделать на компонент-->
                            <label for="status" class="form-label">Статус</label>
                            <select v-model="trip.status" class="form-select" id="status">
                                <option value="0">В ожидании</option>
                                <option value="1">В процессе</option>
                                <option value="2">Завершен</option>
                                <option value="3">Отменен</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">Описание</label>
                            <textarea v-model="trip.description" class="form-control" id="description" rows="4"></textarea>
                        </div>

                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn-lg">{{ isEdit ? 'Сохранить изменения' : 'Создать' }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
</style>