<template>
    <div class="flex justify-between items-center space-y-3 w-[1200px] mt-8 mx-auto">
        <div class="pt-3">
            <img src="@/assets/images/logo.svg"/>
        </div>
        <div class="flex gap-8 text-xl ">
            <router-link to="/myUrls" class="" active-class="active-link">My URLs</router-link>
            <router-link to="/features" class="" active-class="active-link">Features</router-link>
            <router-link to="/pricing"  class="" active-class="active-link">Pricing</router-link>
            <router-link to="/analytics"  class="" active-class="active-link">Analytics</router-link>
            <router-link to="/faqs" class="" active-class="active-link">FAQs</router-link>
        </div>
        <div class=" mx-5 text-l font-semibold">
            <router-link to="/login" class="text-[#0065fe]">Log In</router-link>
            <router-link to="/myurls"
             class="bg-white ml-8 rounded-full px-6 py-2 border border-[#0065fe] text-[#0065fe]">
             Try for free
            </router-link>
        </div>
        <div class="ml-4 text-3xl text-[#0065fe]">
            <i class='fa-solid fa-bars'></i>
        </div>
    </div>

    <!-- mobile view -->
    <div class="fixed left-0 top-0 w-[60%] h-full border-r border-[#0065fe] pt-12 hidden">
    <div class="w-full">
            <img src="@/assets/images/logo.svg"/>
            <div class="ml-4 text-xl text-[#0065fe] md:hidden"
            v-if="!toggle"
            @click="toggleMenu">
            <i class='fa-solid fa-bars'></i>
        </div>
        <div class="ml-4 text-3xl text-[#0065fe] md:hidden"
        v-else
        @click="toggleMenu">
            <i class='fa-solid fa-x'></i>'
        </div>
        </div>
        <div class="flex flex-col text-3xl px-6">
            <router-link to="/myUrls">My URLs</router-link>
            <router-link to="/features">Features</router-link>
            <router-link to="/pricing">Pricing</router-link>
            <router-link to="/analytics">Analytics</router-link>
            <router-link to="/faqs">FAQs</router-link>
        </div>
        <div class=" flex mx-auto font-semibold ">
            <router-link to="/login" class="text-[#0065fe]">Log In</router-link>
            <button class="bg-white ml-8 rounded-full px-6 py-1 border border-[#0065fe] text-[#0065fe]">Try for free</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";


    let toggle = ref(false)

    const toggleMenu = () => {
        toggle.value = !toggle.value
    }
</script>

<style scoped>
    .active-link {
        color: #0065fe;
    }
</style>