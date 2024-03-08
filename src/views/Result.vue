<template>
    <div
        class="bg-[url('../assets/images/white.avif')] bg-cover max-w-[900px] h-[540px] mx-auto mt-[20px] p-8 bg-white rounded-lg mb-40">
        <div class="flex flex-col w-full ">

            <div class="mx-auto w-[460px] px-10 py-16">
                <h1 class="text-2xl font-semiold text-[#858181]">
                    Your shortened URL is ready!!!
                </h1>
                <p class="text-center mt-16 text-orange-500 font-semibold text-2xl">
                    {{ $route.query.shortenedUrl }}
                </p>

            </div>
            <div class="flex items-end mx-auto mt-36 gap-10">
                <button type="button" class="border border-[#ccc] rounded-full px-4 py-2  bg-[#f1efef]"
                    @click="viewAllUrls">
                    View URL History
                </button>

                <button to="" target="_blank"
                    class="border border-[#ccc] rounded-full px-4 py-2 bg-[#0065fe] text-white capitalize"
                    @click="openInNewTab">
                    open URL in new tab
                </button>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Footer from '../components/Footer.vue'
import { auth } from '../utils/firebase'
import { getUrls } from '../services'


const router = useRouter()

const viewAllUrls = async (shorteneUrl: string) => {
    try {
        const allUrls = await getUrls(auth.currentUser?.uid)
        console.log('view all urls', allUrls)

        router.push({
            name: 'userprofile',
            params: { id: shorteneUrl }
        });
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped></style>