<script setup>
import GuestLayout from "../layouts/GuestLayout.vue";
import { ref } from "vue";

const data = ref({
    name: '',
    password: '',
});

const error = ref('')

</script>

<template>
    <GuestLayout>
        <div>
            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="data.name" required="" type="text" class="form-control" id="name" aria-describedby="name">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="data.password" required="" type="password" class="form-control" id="password">
                </div>
                <button type="submit" class="btn btn-primary" :disabled="loading">Enter</button>
                <p v-if="error" class="text-danger mt-2">{{ error }}</p>
            </form>
            <p class="my-3">
                Don't have an account?
                {{ ' ' }}
                <RouterLink :to="{name: 'Register'}" class="btn btn-outline-secondary px-4">Create an account</RouterLink>
            </p>
        </div>
    </GuestLayout>
</template>

<style scoped>
</style>