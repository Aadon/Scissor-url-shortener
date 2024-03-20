<template>
    <div class="bg-white mt-20">
        <h1 class="text-center mb-6 font-semibold text-2xl">History</h1>

        <div class="mt-10 w-[900px] mx-auto h-[200px]">
            <div class=" list-none text-xl w-full">
                <li class="flex items-center bg-[#f2f2f2] py-2 px-3 mt-5 rounded-md font-semibold" 
                v-for="(url) in allUrls" 
                :key="url">
                    <p class="p-2 gap-10">
                        {{ url.shortenedUrl }}
                    </p>
                    <span class="flex justify-end w-full gap-4">
                        <i class="cursor-pointer far fa-edit"></i>
                        <i class="cursor-pointer text-red-600 fa-solid fa-trash" ></i>
                        <i class="cursor-pointer text-green-600 fa-solid fa-floppy-disk"></i>
                    </span>
                </li>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { auth } from '../utils/firebase'
import { getUrls, deleteUrl } from '../services'
import { onMounted, ref } from 'vue'



const allUrls = ref<any>([])
    
onMounted(async () => {
    try {
        if (auth.currentUser) {
            const urls = await getUrls(auth.currentUser?.uid)
             allUrls.value = []
             urls.forEach(url => allUrls.value.push(url))
        }
    } catch (error) {
        console.log(error)
    }
    
})

// const removeLink = async (userId: string) => {
//     try {
//        await deleteUrl(userId)
//     } catch (error) {
//         console.log(error)
//     }
// }

</script>

<style scoped></style>

