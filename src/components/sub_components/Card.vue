<template>
    <div>
        <h2 class="text-xs text-gray-900 tracking-widest mb-2">{{ date }}</h2>
        <h1 class="text-3xl font-semibold leading-[2rem] mb-4">{{ title }}</h1>
        <p class="leading-relaxed">{{ desc }}</p>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        date: String,
        title: String,
        desc: String,
    }
}
</script>