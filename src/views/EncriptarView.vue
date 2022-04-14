<script setup>
import axios from "axios";

import FormR from '../components/FormR.vue';

const url= 'http://localhost:7071/api/HttpTrigger1'
const data  = axios.get(url).then((response) => console.log(response.data))

</script>

<template >
    <div class="container py-2">
        Encriptar

        {{ url }}
        <div class="col">
            <!-- <h1> Key: {{key}}</h1> -->
            <h1> Key: {{data}}</h1>
        </div>

        <FormR/>
    </div>
</template>
