<template>
    <section class="w-full h-[50vh] sm:h-screen bg-cover bg-center bg-hero relative">
        <div
            class="absolute top-0 left-0 bg-gradient-to-t from-[#0000004f] to-[#000000ad] w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden xl:gap-x-[400px]">
            <div class="md:pl-20 xl:pl-36">
                <div class="text-white">
                    <h2 class="font-montez text-center md:text-start text-3xl xl:text-6xl font-thin italic mb-2">explore
                    </h2>
                    <h1
                        class="font-roboto text-center md:text-start text-4xl md:text-6xl xl:text-7xl font-semibold md:leading-[5rem] tracking-wider">
                        UNDISCOVER<br>B<span class="text-shadow">A</span>LI</h1>
                </div>
                <button
                    class="mx-auto md:mx-0 mt-8 pl-6 pr-4 py-2 tracking-wide bg-cta font-roboto rounded-3xl font-semibold flex items-center gap-x-10 transition-transform duration-300 hover:scale-105">
                    <span class="mb-[.4px]">Start Exploring</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14">
                        <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M1 7h16M11 1l6 6-6 6" />
                    </svg>
                </button>
            </div>
            <div class="scrollable hidden xl:flex h-[450px] items-center flex-1 overflow-x-scroll py-16">
                <div class="h-full flex gap-x-2 items-center">
                    <div
                        class="w-[200px] h-full bg-[#ffffff10] backdrop-blur-md border-[2.5px] overflow-hidden rounded-full py-1 px-1">
                        <div class="group w-full h-full rounded-t-full rounded-b-full rounded-2xl relative">
                            <img class="w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl"
                                src="@/assets/pantai.jpg" alt="">
                            <div
                                class="transition duration-300 opacity-0 group-hover:opacity-100 w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl bg-[#0000006e] absolute top-0 left-0 flex items-center justify-center px-2">
                                <h1 class="text-white text-center font-roboto text-xl">Pantai Kuta Selatan</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-[200px] h-full bg-[#ffffff10] backdrop-blur-md border-[2.5px] overflow-hidden rounded-full py-1 px-1">
                        <div class="group w-full h-full rounded-t-full rounded-b-full rounded-2xl relative">
                            <img class="w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl"
                                src="@/assets/agung.jpg" alt="">
                            <div
                                class="transition duration-300 opacity-0 group-hover:opacity-100 w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl bg-[#0000006e] absolute top-0 left-0 flex items-center justify-center px-2">
                                <h1 class="text-white text-center font-roboto text-xl">Gunung Agung</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-[200px] h-full bg-[#ffffff10] backdrop-blur-md border-[2.5px] overflow-hidden rounded-full py-1 px-1">
                        <div class="group w-full h-full rounded-t-full rounded-b-full rounded-2xl relative">
                            <img class="w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl"
                                src="@/assets/pagoda.jpg" alt="">
                            <div
                                class="transition duration-300 opacity-0 group-hover:opacity-100 w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl bg-[#0000006e] absolute top-0 left-0 flex items-center justify-center px-2">
                                <h1 class="text-white text-center font-roboto text-xl">Pura Ulun Danu</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-[200px] h-full bg-[#ffffff10] backdrop-blur-md border-[2.5px] overflow-hidden rounded-full py-1 px-1">
                        <div class="group w-full h-full rounded-t-full rounded-b-full rounded-2xl relative">
                            <img class="w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl"
                                src="@/assets/ubud.jpg" alt="">
                            <div
                                class="transition duration-300 opacity-0 group-hover:opacity-100 w-full h-full object-cover rounded-t-full rounded-b-full rounded-2xl bg-[#0000006e] absolute top-0 left-0 flex items-center justify-center px-2">
                                <h1 class="text-white text-center font-roboto text-xl">Puri Saren</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
// import { Carousel, Slide } from 'vue3-carousel'
export default {
    name: "Hero",
}
</script>
<style scoped>
.text-shadow {
    -webkit-text-fill-color: transparent;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white
}

.scrollable::-webkit-scrollbar {
    height: 8px;
}

.scrollable::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #ffffff4c;
    background: transparent;
    border-radius: 10px;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
}

.scrollable::-webkit-scrollbar-thumb {
    border-radius: 20px;
    -webkit-box-shadow: inset 0px 6px white;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    background-color: transparent;
}
</style>