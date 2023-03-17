<template>
    <section class="px-10 pt-12 font-serif h-full w-full">
        <div class="bg-[#f6f7fb] rounded-2xl py-8 px-6 w-full flex justify-between">
            <div>
                <h1 class="text-2xl font-semibold">Add New Package</h1>
                <p class="font-sm font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                    eligendi?</p>
            </div>
            <div class="w-14 aspect-square rounded-full bg-cta ring-4 ring-white flex justify-center items-center">
                <svg class="w-8 aspect-square" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z"
                        fill="#000000" />
                </svg>
            </div>
        </div>
        <div class="mt-6 bg-[#f6f7fb] rounded-2xl py-8 px-6 w-full">
            <div>
                <h1 class="text-2xl font-semibold">All Package</h1>
                <p class="font-sm font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                    eligendi?</p>
            </div>
            <div class="font-roboto grid grid-cols-4 gap-x-10 gap-y-5 mt-8">
                <div v-for="i in 7" class="px-3 pt-3 pb-4 shadow-xl rounded-2xl">
                    <div class="w-full aspect-video relative">
                        <img class="w-full h-full object-cover rounded-2xl" src="@/assets/nusa_penida.jpg" alt="">
                        <div
                            class="absolute -bottom-5 right-4 shadow-lg w-10 aspect-square rounded-full bg-cta ring-4 ring-white flex justify-center items-center">
                            <svg class="w-5 aspect-square" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve" fill="none">
                                <path
                                    d="m104.175 90.97-4.252 38.384 38.383-4.252L247.923 15.427V2.497L226.78-18.646h-12.93zm98.164-96.96 31.671 31.67"
                                    class="cls-1"
                                    style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                                    transform="translate(-77.923 40.646)" />
                                <path d="m195.656 33.271-52.882 52.882"
                                    style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1"
                                    transform="translate(-77.923 40.646)" />
                            </svg>
                        </div>
                    </div>
                    <h1 class="font-semibold text-lg mb-2 mt-2">Nusa Penida</h1>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500 font-light flex gap-x-2">
                            <svg class="w-4 aspect-square" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000"
                                    d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z" />
                                <path fill="#000000"
                                    d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z" />
                            </svg>
                            Indonesia
                        </p>
                        <p class="text-sm text-green-500 font-medium">Rp 1.500K</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>