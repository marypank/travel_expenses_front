<script setup>
import GuestLayout from "../layouts/GuestLayout.vue";
import { ref } from "vue";

const data = ref({
    name: '',
    email: '',
    password: '',
});

const errors = ref({
    name: [],
    email: [],
    password: [],
})

</script>

<template>
    <GuestLayout>
        <div>register</div>
    </GuestLayout>
</template>

<style scoped>
</style>