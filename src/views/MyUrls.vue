<template>
 <div class="hero max-w-[1200px] mx-auto mt-[80px] bg-white h-[540px] md:h-[700px] md:mx-auto">
        <div class="max-w-screen-md mx-auto relative px-4 md:px-0">
            <h1 class="text-4xl font-bold tracking-wider capitalize leading-[72px] text-center">
                Optimize your online experience with our advanced <span class="text-[#0065fe]">URL shortening</span>
                solution
                <img src="../assets/images/line1.svg" alt="" class="absolute top-[274px] left-[60px] md:top-[130px] md:left-[320px]">
            </h1>
            <p class="mt-8 text-center text-lg tracking-wide text-[#141414]">
                Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links and
                domain customization options to reinforce your brand presence and enhance user engagement.
            </p>
        </div>
        <div class="flex gap-12 justify-center mt-10 w-full">
            <button class="border border-[#0065fe] rounded-full px-8 py-2 bg-[#0065fe] text-white font-semibold">
                <router-link to="/signup">Sign Up</router-link>
            </button>
            <button class="text-[#0065fe]">
                <router-link to="/features">Learn more</router-link>
            </button>
        </div>
        <div class="hidden mt-20 md:block">
            <div class="relative">
                <img src="../assets/images/Vector 2 (1).svg" alt="" class="absolute top-[50%] left-[15%]">
                <img src="../assets/images/Frame 29546.svg" alt=""
                    class="absolute top-6 left-[25%] w-[580px] z-10 bg-white">
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>
