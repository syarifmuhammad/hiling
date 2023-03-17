<template>
    <div id="explore" class="w-full px-8 md:px-20 xl:px-36 pt-20 pb-8 font-roboto">
        <div class="flex flex-col lg:flex-row lg:divide-x-2">
            <div class="lg:pr-24">
                <card class="lg:pr-16" :date="'20 - 24 DECEMBER - 4 DAY 3 NIGHT'" :title="'Explore Bali Island'"
                    :desc="'This 4 Days and 3 Nights Bali Trip Package is ready to go every day. Starting from Denpasar to Ubud. Then it is recommended that you book...'">
                    <div class="mt-6 flex flex-col sm:flex-row gap-y-4 sm:gap-x-6">
                        <button
                            class="px-6 py-2 tracking-widest text-sm bg-cta font-roboto rounded-3xl font-semibold flex items-center transition-transform duration-300 hover:scale-105 justify-center">
                            BOOKING NOW
                        </button>
                        <button
                            class="px-6 py-2 tracking-widest border-black border-2 font-roboto rounded-3xl font-semibold flex items-center transition-transform duration-300 hover:scale-105 text-sm justify-center">
                            EXPLORE MORE
                        </button>
                    </div>
                </card>
                <iframe class="w-full aspect-video mt-16 rounded-2xl"
                    src="https://www.youtube.com/embed/BFS9n4B_2xA?controls=0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="mt-10 lg:mt-0 lg:pl-24 flex flex-col divide-y-2">
                <card class="pb-8" :date="'20 - 24 DECEMBER - 4 DAY 3 NIGHT'" :title="'Bali and Lombok Tour'"
                    :desc="'This 4 Days and 3 Nights Bali Trip Package is ready to go every day. Starting from Denpasar to Ubud. Then it is recommended that you book...'">
                </card>
                <card class="py-8" :date="'20 - 24 DECEMBER - 4 DAY 3 NIGHT'" :title="'Explore Nusa Penida'"
                    :desc="'This 4 Days and 3 Nights Bali Trip Package is ready to go every day. Starting from Denpasar to Ubud. Then it is recommended that you book...'">
                </card>
                <card class="py-8" :date="'20 - 24 DECEMBER - 4 DAY 3 NIGHT'" :title="'Explore Bali Island'"
                    :desc="'This 4 Days and 3 Nights Bali Trip Package is ready to go every day. Starting from Denpasar to Ubud. Then it is recommended that you book...'">
                </card>
            </div>
        </div>
    </div>
</template>
<script>
import Card from './sub_components/Card.vue'
export default {
    name: "Explore",
    components: {
        Card,
    }
}
</script>