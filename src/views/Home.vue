<template>
    <navbar></navbar>
    <hero></hero>
    <explore></explore>
    <discover></discover>
    <custom-footer></custom-footer>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Hero from "../components/Hero.vue"
import Explore from "../components/Explore.vue"
import Discover from "../components/Discover.vue"
import CustomFooter from "../components/Footer.vue"
export default {
    name: "Home",
    components: {
        Navbar,
        Hero,
        Explore,
        Discover,
        CustomFooter,
    }
}
</script>
<style>
body::-webkit-scrollbar {
    width: 5px;
}

body::-webkit-scrollbar-track {
    background: black;
    border-radius: 10px;
}

body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(56, 56, 56);
}
</style>
  