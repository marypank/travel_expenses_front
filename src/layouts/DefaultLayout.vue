<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <RouterLink :to="{name: 'Home'}" class="navbar-brand" href="#">Главная</RouterLink>

        <!-- Кнопка для мобильного меню -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключить навигацию">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <!-- Выпадающее меню (видимо только на lg и больше) -->
                <li class="nav-item dropdown d-none d-lg-block">
                    <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle me-2"></i>Иван Иванов
                    </a>

                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="#">
                                <i class="bi bi-gear-fill me-2"></i>Настройки
                            </a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <a class="dropdown-item text-danger" href="#">
                                <i class="bi bi-box-arrow-right me-2"></i>Выход                                
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- Отдельные пункты (видимы только на мобильных) -->
                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link" href="#">
                        <i class="bi bi-person-circle me-2"></i>Иван Иванов
                    </a>
                </li>
                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link" href="#">
                        <i class="bi bi-gear-fill me-2"></i>Настройки
                    </a>
                </li>
                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link text-danger" href="#">
                        <i class="bi bi-box-arrow-right me-2"></i>Выход
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<RouterView></RouterView>
</template>

<style>
</style>