<template>
    <div class="w-full h-screen overflow-hidden flex items-center font-roboto text-[#222]">
        <img class="w-1/2 h-full object-cover" src="@/assets/login4.jpg" alt="">
        <div class="flex flex-col mx-auto">
            <h1 class="text-2xl font-semibold mb-4">Welcome to HILING. Admin Page,<br>Sign In to Continue.</h1>
            <p class="text-sm mb-10">Don't have an account? <a class="underline font-medium" href="">Create a
                    account</a><br>It
                takes less than a
                minute</p>
            <form>
                <div class="mb-8">
                    <label class="block text-sm font-medium mb-2" for="email">Email</label>
                    <input class="border-2 border-[#222] px-4 py-2 text-sm w-full" type="email" id="email"
                        placeholder="example@gmail.com">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium mb-2" for="password">Password</label>
                    <input class="border-2 border-[#222] px-4 py-2 text-sm w-full" type="password" id="password"
                        placeholder="">
                </div>
                <a href="" class="underline text-sm text-center block w-full font-medium mb-8">Forgot password?</a>
                <button class="block w-full text-sm bg-[#222] text-center py-3 text-white font-semibold mb-4">Sign
                    In</button>
                <button
                    class="w-full text-sm bg-[#f8f8f8] text-center py-3 text-[#222] font-semibold flex justify-center items-center gap-x-4">
                    <svg class="w-[20px] aspect-square" viewBox=" 0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                            fill="#4285F4" />
                        <path
                            d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                            fill="#34A853" />
                        <path
                            d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                            fill="#FBBC05" />
                        <path
                            d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                            fill="#EB4335" />
                    </svg>
                    Sign In with Google
                </button>
            </form>
        </div>
    </div>
</template>