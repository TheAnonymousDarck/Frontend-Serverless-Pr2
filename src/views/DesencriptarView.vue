<script setup>
import FormR from '../components/FormR.vue';

</script>

<template >
    <div class="container py-2">
        Desencriptar

        <div class="col">
            <h1> Key: {{encryptStore.key}}</h1>
        </div>

        <FormR
        :is-decrypt = true
        head-1 = "Mesaje a desencriptar"
        head-2 = 'Mesaje desencriptado'
        />
    </div>
</template>
