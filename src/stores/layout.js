import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        sidebar: true,
    }),
    actions: {
        setSidebar(value) {
            this.sidebar = value
        }
    },
})

