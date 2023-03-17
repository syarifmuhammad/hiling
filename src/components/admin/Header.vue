<template>
    <header class="w-full z-50 fixed top-0 bg-[#f6f7fb] h-[100px] flex">
        <div class="h-full aspect-square bg-[#393D46] p-8">
            <svg @click="setSidebar(!sidebar)" class="w-full aspect-square transition-transform duration-300"
                :class="{ 'rotate-180': !sidebar }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9.21261 11.7874V11.7874C9.09519 11.9048 9.09519 12.0952 9.21261 12.2126V12.2126L15 18"
                    stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div class="w-full flex justify-between items-center mx-10">
            <h1 class="text-lg font-bold">HILING.</h1>
            <div class="flex gap-x-4">
                <div
                    class="bg-[#ffffff11] border border-[#ffffff80] px-[16px] text-sm text-black rounded-3xl shadow-custom flex w-[300px]">
                    <svg class="w-[16px] mr-1 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g data-name="Layer 2">
                            <path fill="#5c5c5c"
                                d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                                data-name="search" />
                        </g>
                    </svg>
                    <input class="bg-transparent border-0 focus:ring-0 focus:ring-offset-0 w-full" placeholder="Search..."
                        type="search">
                </div>
                <div class="py-3 px-3 rounded-full bg-cta">
                    <svg class="w-5 aspect-square" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.32501 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H6.32501C6.67247 14.5383 8.18578 13.25 10 13.25C11.8142 13.25 13.3275 14.5383 13.675 16.25H20C20.4142 16.25 20.75 16.5858 20.75 17C20.75 17.4142 20.4142 17.75 20 17.75H13.675C13.3275 19.4617 11.8142 20.75 10 20.75C8.18578 20.75 6.67247 19.4617 6.32501 17.75ZM7.75 17C7.75 15.7574 8.75736 14.75 10 14.75C11.2426 14.75 12.25 15.7574 12.25 17C12.25 18.2426 11.2426 19.25 10 19.25C8.75736 19.25 7.75 18.2426 7.75 17Z"
                            fill="#000" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.325 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H10.325C10.6725 4.53832 12.1858 3.25 14 3.25C15.8142 3.25 17.3275 4.53832 17.675 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H17.675C17.3275 9.46168 15.8142 10.75 14 10.75C12.1858 10.75 10.6725 9.46168 10.325 7.75ZM11.75 7C11.75 5.75736 12.7574 4.75 14 4.75C15.2426 4.75 16.25 5.75736 16.25 7C16.25 8.24264 15.2426 9.25 14 9.25C12.7574 9.25 11.75 8.24264 11.75 7Z"
                            fill="#000" />
                    </svg>
                </div>
            </div>
            <div class="flex items-center gap-x-10">
                <div class="relative">
                    <!-- <div
                        class="bg-cta font-medium absolute -right-3/4 -top-3/4 text-black rounded-full border border-white text-[.6rem] p-2">
                        100
                    </div> -->
                    <svg class="w-6 aspect-square" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 21V16H4V4H20V16H12L7 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="relative">
                    <div
                        class="bg-cta font-medium absolute -right-3/4 -top-3/4 text-black rounded-full border border-white text-[.7rem] w-[30px] flex justify-center items-center aspect-square">
                        3
                    </div>
                    <svg class="w-6 aspect-square" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z"
                            stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        <path
                            d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
                            stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                            stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" />

                    </svg>
                </div>
                <div class="w-11 aspect-square rounded-full overflow-hidden border-2 border-black">
                    <img class="w-full h-full object-cover object-center" src="@/assets/user.jpg" alt="">
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useLayoutStore } from '../../stores/layout';
export default {
    name: "HeaderAdmin",
    computed: {
        ...mapState(useLayoutStore, ['sidebar'])
    },
    methods: {
        ...mapActions(useLayoutStore, ['setSidebar'])
    }
}
</script>
