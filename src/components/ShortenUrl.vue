<template>
    <div class="max-w-[1200px] flex h-[500px] bg-[#141414] mt-28 w-full items-center justify-center">
        <form class="flex flex-col justify-center p-12 bg-white w-[500px] h-[380px] rounded-lg">
            <input type="text" placeholder="Paste URL here..." class="py-2 px-3 border border-[#0065fe] rounded-lg"
                v-model="longUrl">
            <div class=" flex gap-4 py-8 text-[#0065fe]">
                <select name="" id="" class="py-2 px-6 border border-[#0065fe] rounded-lg">
                    <option value="bit.ly" disabled>bit.ly</option>
                </select>
                <input type="text" placeholder="Type Alias here..." class="py-2 px-2 border border-[#0065fe] rounded-lg">
            </div>
            <button class="rounded-full bg-[#0065fe] py-3 text-white" 
            type="button"
            @click="trimUrl"
            >
                Trim URL
            </button>
            <p class="mt-4 text-sm text-[#0065fe]">
                By clicking TinyURL, I agree to the <span>Terms of Service, Privacy Policy and Use of Cookies.</span>
            </p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '../utils/firebase';
import { createURL } from '../services'
import { useRouter } from 'vue-router';
import { serverTimestamp } from 'firebase/firestore'
import axios from 'axios';


const router = useRouter()

const longUrl = ref('');
const shortLink = ref('');


const trimUrl = async () => {

    if (!longUrl.value) {
        return
    }
  try {
    const response = await axios.post("https://api-ssl.bitly.com/v4/shorten", {
      long_url: longUrl.value,
      domain: "bit.ly",
      group_guid: 'Bo33kKlqI2R',
    }, {
      headers: {
        Authorization: 'Bearer 6bc6989ab9f1186cd8b3ee60a89a20ac582b3f7e',
        "Content-Type": "application/json",
      }
    });
    
    const new_link = response.data.link.replace("https://", "");

    const qrCodeResponse = await axios.get(`
    https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`, 
    {
      headers: {
        Authorization: 'Bearer 6bc6989ab9f1186cd8b3ee60a89a20ac582b3f7e',
      }
    });
    console.log('created link', new_link)
    shortLink.value = qrCodeResponse.data;
    console.log('result', qrCodeResponse.data);

    const newUrl = await createURL({
    userId: auth.currentUser?.uid || '',
    longUrl: longUrl.value,
    id: new_link,
    shortenedUrl: new_link,
    qrCode: shortLink.value,
    createdAt: serverTimestamp()
  })

  router.push({
    path: '/result',
    query: {
    shortenedUrl: new_link,
    qrCode: qrCodeResponse.data
    }
  })
  console.log(newUrl)
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>

</style>