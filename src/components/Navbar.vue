<template>
    <div class="container flex justify-around gap-6 items-center max-w-[1200px] mt-14 mx-auto">
        <div class="pt-3">
            <router-link to="/">
                <img src="@/assets/images/logo.svg"/>
            </router-link>
        </div>

        <nav class="md:flex gap-6  text-xl hidden">
            <router-link to="/myUrls" class="" active-class="active-link">My URLs</router-link>
            <router-link to="/features" class="" active-class="active-link">Features</router-link>
            <router-link to="/pricing"  class="" active-class="active-link">Pricing</router-link>
            <router-link to="/analytics"  class="" active-class="active-link">Analytics</router-link>
            <router-link to="/faqs" class="" active-class="active-link">FAQs</router-link>
        </nav>
    

        <div class="md:flex items-center text-lg font-semibold hidden">
            <router-link 
            to="/login" 
            class="text-[#0065fe]"
            v-if="!isAuthenticated"
            >Log In</router-link>
            <button v-else @click="handleSignOut" class="text-[#0065fe]">Sign Out</button>
            <router-link to="/shortenurl"
             class="bg-white rounded-full px-4 py-2 border border-[#0065fe] text-[#0065fe] text-sm ml-4">
             Try for free
            </router-link>
        </div>

        <div class="flex justify-end w-full px-6 md:hidden">
            <div class="ml-4 text-2xl text-[#0065fe] cursor-pointer"
            v-if="!toggle"
            @click="toggleMenu">
            <i class='fa-solid fa-bars'></i>
        </div>
       
        </div>
    </div>

    <!-- mobile view -->
    <div v-if="toggle" class="fixed left-0 top-0 w-[100%] h-full border-r border-[#0065fe] bg-black pt-12 md:hidden">
        <div class="flex flex-end ml-4 w-full text-2xl text-[#0065fe] cursor-pointer"
        @click="toggleMenu">
            <i class='fa-solid fa-x'></i>
        </div>
        <nav class="flex flex-col justify-between items-center text-3xl  my-4 text-[#edf0f0]">
            <router-link to="/myurls" class="my-4" @click="toggleMenu">My URLs</router-link>
            <router-link to="/features" class="my-4" @click="toggleMenu">Features</router-link>
            <router-link to="/pricing" class="my-4" @click="toggleMenu">Pricing</router-link>
            <router-link to="/analytics" class="my-4" @click="toggleMenu">Analytics</router-link>
            <router-link to="/faqs" class="my-4" @click="toggleMenu">FAQs</router-link>
        </nav>
        
        <div class="flex justify-center gap-6 font-semibold w-[600px] mt-20">
            <router-link to="/login" class="text-[#0065fe]" @click="toggleMenu">Log In</router-link>
            <router-link to="/shortenurl" class="bg-white rounded-full px-4 py-1 border border-[#0065fe] text-[#0065fe]" @click="toggleMenu">Try for free</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../utils/firebase";


    let toggle = ref(false)
    const isAuthenticated = ref(false)

    const toggleMenu = () => {
        toggle.value = !toggle.value
    }

    onAuthStateChanged(auth, (user) => {
  if (user) {
   
    isAuthenticated.value = !!user
    // const uid = user.uid;

    // localStorage.setItem("isLoggedIn");

    console.log("----=====>", user);

    
  } else {
    
    console.log("User should be signed out");
  }
});
    
    const handleSignOut = async () => {
        try {
            await signOut(auth)
            
        } catch(error) {
            console.log(error)
        }
    }
</script>

<style scoped>
    .active-link {
        color: #0065fe;
    }

</style>