import { defineStore } from "pinia";
import { ref } from 'vue'

export const useThemeStore = defineStore('themeMsg', () => {
    const color = ref('#f4f4f4')
    return { color }
})
