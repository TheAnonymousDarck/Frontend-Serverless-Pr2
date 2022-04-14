<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-dark bg-dark " >
    <div class="container-fluid row row-cols-12 justify-content-center align-items-center">
        <div class="col justify-content-start align-items-start">
            <RouterLink to="/" class="navbar-brand " >
                <img alt="Vue logo" width="30" height="24" src="@/assets/logo.svg" />
            </RouterLink>
        </div>
        <div class="col-4 justify-content-center align-items-center">
            <RouterLink to="/encriptar" class="btn text-white">
                Encriptar
            </RouterLink>
        </div>
        <div class="col-4 justify-content-center align-items-center">
            <RouterLink to="/desencriptar" class="btn text-white ">
                Desencriptar
            </RouterLink>
        </div>
    </div>
</nav>
<RouterView />
</template>