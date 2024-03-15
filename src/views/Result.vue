<template>
    <div
        class="max-w-[900px] h-[540px] mx-auto mt-[20px] p-8 bg-white rounded-lg mb-40">
        <div class="flex flex-col w-full">

            <div class="mx-auto w-[460px] px-10 mt-14">
                <h1 class="text-2xl font-semiold text-[#858181]">
                    Your shortened URL is ready!!!
                </h1>
                <div class="flex justify-between items-center gap-8 mt-24">
                <p class="text-center mt-16 text-orange-500 font-semibold text-2xl">
                    {{ $route.query.shortenedUrl }}
                </p>
                <div class="w-[100px] h-[100px] text-center">
                    <Qrcode :value="qrCodeData" />
                </div>
            </div>
            </div>
            <div class="flex items-end mx-auto mt-36 gap-10">
                <button 
                type="button" 
                class="border border-[#ccc] rounded-full px-4 py-2 bg-[#f1efef]"
                @click="viewCurrentUrl">
                    View URL History
                </button>

                <router-link :to="$route.query.shortenedUrl" target="_blank"
                    class="border border-[#ccc] rounded-full px-4 py-2 bg-[#0065fe] text-white capitalize"
                    >
                    open URL in new tab
                </router-link>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import Footer from '../components/Footer.vue'
import { auth } from '../utils/firebase'
import { getUrls } from '../services'
import Qrcode from 'qrcode.vue'


const router = useRouter()
const route = useRoute()

const qrCodeData = route.query.qrCode ? JSON.stringify(route.query.qrCode) : ''

const viewCurrentUrl = async () => {
    try {
        if (auth.currentUser) {
            const currentUrl = await getUrls(auth.currentUser?.uid)
        console.log('view all urls', currentUrl)

        router.push({
            name: 'urlslist',
            params: { id: '123' }, 
        });

        }
        
    } catch (error) {
        console.log(error)
    }
}

</script>

<style scoped></style>