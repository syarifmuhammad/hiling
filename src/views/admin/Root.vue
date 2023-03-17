<template>
    <div>
        <div>
            <sidebar></sidebar>
            <header-custom></header-custom>
        </div>
        <div class="w-full mt-[100px] transition-all duration-300" :class="{ 'pl-[100px]': sidebar }">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import HeaderCustom from "@/components/admin/Header.vue"
import Sidebar from "@/components/admin/Sidebar.vue"
import { mapState } from 'pinia'
import { useLayoutStore } from '@/stores/layout'
export default {
    name: "Root",
    components: {
        HeaderCustom,
        Sidebar,
    },
    computed: {
        ...mapState(useLayoutStore, ['sidebar'])
    }
}
</script>
