import { defineStore } from "pinia";
import { ref } from 'vue'

export const useLoadeingStore = defineStore('isloading', () => {
    const loading = ref(true)
    return loading
})