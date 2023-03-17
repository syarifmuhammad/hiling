<template>
    <router-link :to="link" class="text-center flex flex-col items-center font-roboto">
        <div class="w-[40px] h-[40px] mb-3 rounded-[10px] flex justify-center p-3 items-center relative overflow-hidden"
            :class="{ 'bg-cta': active, 'bg-white': !active }">
            <div class="bg-[#fbe28f] absolute rounded-full w-full h-full left-1/2 -top-1/2" :class="{ 'hidden': !active }">
            </div>
            <div :class="{ 'active': active }" class="relative z-10 w-full aspect-square custom">
                <slot></slot>
            </div>
        </div>
        <p class="text-xs" :class="{ 'text-[#1C295D]': active, 'text-[#7987a5]': !active }">{{ name }}</p>
    </router-link>
</template>
<script>
export default {
    name: "MenuItem",
    props: {
        name: String,
        link: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        }
    }
}
</script>


<style>
.custom path {
    fill: #9BAAD3;
}

.active svg path {
    fill: #000;
}
</style>