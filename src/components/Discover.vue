<template>
    <div id="discover" class="w-full font-roboto bg-black pt-20 flex flex-col">
        <div class="text-white px-8 md:px-20 xl:px-36 mb-10">
            <h2 class="text-sm font-light tracking-widest mb-2">20-24 DECEMBER 2023 - 4 DAY 3 NIGHT</h2>
            <div class="flex flex-col sm:flex-row w-full pb-4 border-b border-b-[#ffffff6f]">
                <div class="sm:w-1/2">
                    <h1 class="text-4xl sm:text-6xl font-semibold leading-normal sm:leading-[5rem]">Discover<br>Bali Island
                    </h1>
                </div>
                <div class="sm:w-3/4 mt-5 sm:px-5 font-light">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptate dolorum molestiae iure ut
                        commodi veritatis fugit esse, consectetur voluptatem ratione. Incidunt enim, nobis consequuntur
                        iusto excepturi veniam optio praesentium vero? Harum maiores dolorum dolor, asperiores recusandae ea
                        minima atque architecto ipsam aperiam quam quod laudantium porro iste, nulla perferendis!</p>
                </div>
            </div>
        </div>
        <div class="group flex">
            <div @click="active = 0"
                class="cursor-pointer h-[400px] bg-black transition-all duration-500 relative overflow-hidden"
                :class="{ 'w-6/12': active == 0, 'w-2/12': active != 0 }">
                <img src="@/assets/uluwatu.jpg" class="w-full h-full object-cover">
                <div
                    class="w-[50vw] h-full absolute left-0 top-0 z-10 bg-gradient-to-t from-[#000000ae] to-transparent flex items-end text-white pl-8 pr-8 md:pl-14 md:pr-10 gap-x-2 pb-8 overflow-hidden">
                    <div class="md:w-3/4">
                        <h2 class="text-lg font-light mb-2 text-[#ffffffb5]">Day - 01</h2>
                        <h1 class="text-2xl sm:text-3xl font-semibold mb-2">Uluwatu Tour</h1>
                        <h3 class="text-sm font-light tracking-widest">2023 - BALI ISLAND</h3>
                    </div>
                    <div class="hidden md:block">
                        <p class="text-sm text-[#ffffffb5] leading-relaxed">"Secara etimologis kata Ulu berarti ujung, atas,
                            atau puncak,
                            sedang Watu berarti
                            Batu. Jadi Pura Uluwatu diartikan tempat suci yang dibangun di puncak batu karang."</p>
                    </div>
                </div>
            </div>
            <div @click="active = 1"
                class="cursor-pointer h-[400px] bg-black transition-all duration-500 relative overflow-hidden"
                :class="{ 'w-6/12': active == 1, 'w-2/12': active != 1 }">
                <img src="@/assets/ubud2.jpg" class="w-full h-full object-cover">
                <div
                    class="w-[50vw] h-full absolute left-0 top-0 z-10 bg-gradient-to-t from-[#000000ae] to-transparent flex items-end text-white pl-8 pr-8 md:pl-14 md:pr-10 gap-x-2 pb-8 overflow-hidden">
                    <div class="md:w-3/4">
                        <h2 class="text-lg font-light mb-2 text-[#ffffffb5]">Day - 02</h2>
                        <h1 class="text-2xl sm:text-3xl font-semibold mb-2">Ubud Tour</h1>
                        <h3 class="text-sm tracking-widest">2023 - BALI ISLAND</h3>
                    </div>
                    <div class="hidden md:block">
                        <p class="text-sm text-[#ffffffb5] leading-relaxed">"Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.
                            Veniam accusamus eligendi blanditiis amet soluta, placeat qui sit praesentium aliquam! Debitis
                            expedita fugiat nostrum voluptas molestias."</p>
                    </div>
                </div>
            </div>
            <div @click="active = 2"
                class="cursor-pointer h-[400px] bg-black transition-all duration-500 relative overflow-hidden"
                :class="{ 'w-6/12': active == 2, 'w-2/12': active != 2 }">
                <img src="@/assets/nusa_penida.jpg" class="w-full h-full object-cover">
                <div
                    class="w-[50vw] h-full absolute left-0 top-0 z-10 bg-gradient-to-t from-[#000000ae] to-transparent flex items-end text-white pl-8 pr-8 md:pl-14 md:pr-10 gap-x-2 pb-8 overflow-hidden">
                    <div class="md:w-3/4">
                        <h2 class="text-lg font-light mb-2 text-[#ffffffb5]">Day - 03</h2>
                        <h1 class="text-2xl sm:text-3xl font-semibold mb-2">Nusa Penida</h1>
                        <h3 class="text-sm font-light tracking-widest">2023 - BALI ISLAND</h3>
                    </div>
                    <div class="hidden md:block">
                        <p class="text-sm text-[#ffffffb5] leading-relaxed">"Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Odit
                            quae sapiente aspernatur. Necessitatibus, illo ad. Consectetur dicta pariatur repellat
                            accusantium, distinctio fuga obcaecati voluptas blanditiis?"</p>
                    </div>
                </div>
            </div>
            <div @click="active = 3"
                class="cursor-pointer h-[400px] bg-black transition-all duration-500 relative overflow-hidden"
                :class="{ 'w-6/12': active == 3, 'w-2/12': active != 3 }">
                <img src="@/assets/kintamani.jpg" class="w-full h-full object-cover">
                <div
                    class="w-[50vw] h-full absolute left-0 top-0 z-10 bg-gradient-to-t from-[#000000ae] to-transparent flex items-end text-white pl-8 pr-8 md:pl-14 md:pr-10 gap-x-2 pb-8 overflow-hidden">
                    <div class="md:w-3/4">
                        <h2 class="text-lg font-light mb-2 text-[#ffffffb5]">Day - 04</h2>
                        <h1 class="text-2xl sm:text-3xl font-semibold mb-2">Kintamani</h1>
                        <h3 class="text-sm font-light tracking-widest">2023 - BALI ISLAND</h3>
                    </div>
                    <div class="hidden md:block">
                        <p class="text-sm text-[#ffffffb5] leading-relaxed">"Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quae
                            explicabo enim nostrum quisquam reiciendis, omnis mollitia adipisci tempora fuga illum unde
                            reprehenderit facere praesentium odio."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Discover",
    data() {
        return {
            active: 0,
        }
    }
}
</script>