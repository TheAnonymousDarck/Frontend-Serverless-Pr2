import { defineStore } from "pinia";

export const useEncryptStore = defineStore( 'encrypt',{

    state: () => ({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
    }),

    //metodos
    actions: {
        
    }

})