<template>
    <section class="px-10 pt-12 font-serif h-full w-full">
        <div class="bg-[#f6f7fb] rounded-2xl py-8 px-6 w-full flex justify-between">
            <div>
                <h1 class="text-2xl font-semibold">Add New Tour Events</h1>
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
        <div class="mt-6 bg-[#f6f7fb] rounded-2xl py-8 px-6 w-full h-full pb-20">
            <div>
                <h1 class="text-2xl font-semibold">Tour Events</h1>
                <p class="font-sm font-roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                    eligendi?</p>
            </div>
            <div class="relative shadow-md sm:rounded-lg mt-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-roboto">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Host
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Package name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Start Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                End Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tourist
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 8" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 flex items-center gap-x-4 font-semibold">
                                <div class="w-11 aspect-square rounded-full overflow-hidden border-2 border-black">
                                    <img class="w-full h-full object-cover object-center" src="@/assets/user.jpg" alt="">
                                </div>
                                Syarif
                            </th>
                            <th scope="row" class="px-6 py-4 font-normal">
                                Bali
                            </th>
                            <td class="px-6 py-4">
                                Bali Explore
                            </td>
                            <td class="px-6 py-4">
                                03 January 2023
                            </td>
                            <td class="px-6 py-4">
                                07 January 2023
                            </td>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                syarifmuhammad369@gmail.com
                            </td>
                            <td>
                                <button class="p-2" :data-popover-target="`popover-action${i}`"
                                    data-popover-placement="bottom">
                                    <!-- tes -->
                                    <svg class="w-4" fill="#000000" viewBox="0 0 1920 1920"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M960 1468.235c93.448 0 169.412 75.965 169.412 169.412 0 93.448-75.964 169.412-169.412 169.412-93.448 0-169.412-75.964-169.412-169.412 0-93.447 75.964-169.412 169.412-169.412Zm0-677.647c93.448 0 169.412 75.964 169.412 169.412 0 93.448-75.964 169.412-169.412 169.412-93.448 0-169.412-75.964-169.412-169.412 0-93.448 75.964-169.412 169.412-169.412Zm0-677.647c93.448 0 169.412 75.964 169.412 169.412 0 93.447-75.964 169.412-169.412 169.412-93.448 0-169.412-75.965-169.412-169.412 0-93.448 75.964-169.412 169.412-169.412Z"
                                            fill-rule="evenodd" />
                                    </svg>
                                </button>
                                <div data-popover :id="`popover-action${i}`" role="tooltip"
                                    class="absolute z-10 invisible inline-block w-28 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                                    <ul
                                        class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li
                                            class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            Edit</li>
                                        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Delete
                                        </li>
                                    </ul>
                                    <div data-popper-arrow></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
<script>
import { initFlowbite } from 'flowbite'
export default {
    name: "Tours",
    mounted() {
        initFlowbite()
    }
}
</script>