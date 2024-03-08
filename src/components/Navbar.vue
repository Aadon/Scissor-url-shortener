<template>
    <div class="md:flex justify-between space-y-3 w-[1200px] mx-auto sm:hidden">
        <div class="pt-3">
            <img src="@/assets/images/logo.svg" 
            class=""
            />
        </div>
        <div class="flex gap-8 text-xl">
            <router-link to="/myUrls"
            class=""
            >My URLs</router-link>
            <router-link to="/features">Features</router-link>
            <router-link to="/pricing">Pricing</router-link>
            <router-link to="/analytics">Analytics</router-link>
            <router-link to="/faqs">FAQs</router-link>
        </div>
        <div class="mx-5 text-l font-semibold">
            <router-link to="/login" class="text-[#0065fe]">Log In</router-link>
            <button class="bg-white ml-8 rounded-full px-6 py-1 border border-[#0065fe] text-[#0065fe]">Try for free</button>
        </div>
    </div>

    <!-- mobile view -->
    <!-- <div 
    v-if="toggle"
    class="items-center space-y-3 w-[1200px] mx-auto sm:hidden">
        <div class="pt-3">
            <img src="@/assets/images/logo.svg" 
            class=""
            />
        </div>
        <div class="flex gap-8 text-xl">
            <router-link to="/myUrls"
            class=""
            >My URLs</router-link>
            <router-link to="/features">Features</router-link>
            <router-link to="/pricing">Pricing</router-link>
            <router-link to="/analytics">Analytics</router-link>
            <router-link to="/faqs">FAQs</router-link>
        </div>
        <div class="mx-5 text-l font-semibold">
            <router-link to="/login" class="text-[#0065fe]">Log In</router-link>
            <button class="bg-white ml-8 rounded-full px-6 py-1 border border-[#0065fe] text-[#0065fe]">Try for free</button>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";


    let toggle = ref(false)

    const toggleMenu = () => {
        toggle.value = !toggle.value
    }
</script>

<style scoped>

</style>