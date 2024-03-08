<template>
    <div class="flex h-[500px] bg-[#141414] mt-28 w-full items-center justify-center">

        <form class="flex flex-col justify-center p-12 bg-white w-[500px] h-[380px] rounded-lg">
            <input type="text" placeholder="Paste URL here..." class="py-2 px-3 border border-[#0065fe] rounded-lg"
                v-model="longUrl">
            <div class=" flex gap-4 py-8 text-[#0065fe]">
                <select name="" id="" class="py-2 px-6 border border-[#0065fe] rounded-lg">
                    <option value="">Choose Domain</option>
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
            <!-- <img src="../assets/images/svg.feather.svg" alt=""> -->
        </form>

    </div>

    <div class="flex justify-center gap-2 mt-16">
        <img src="../assets/images/Line 70.svg" alt="">
        <h1 class="text-3xl font-bold">FAQs</h1>
    </div>

    <div class="h-[860px] mt-10 w-[792px] mx-auto text-base font-normal">
        <div class="flex flex-col border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">How does URL shortening work?</h3>
                <img src="../assets/images/minus.svg" alt="">
            </li>
            <p class="mt-4">
                URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the
                original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
            </p>
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">Is it necessary to create an account to use the URL shortening service?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">Are the shortened links permanent? Will they expire?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">Are there any limitations on the number of URLs I can shorten?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">Can I custonize the URLs to reflect my brand or content?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">Can I track the performance of my shortened URLs?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">How secure is the URL shortening service? Are the shortened links protected against spam
                    or malicious activity?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">What is a QR code and what can it do?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>

        <div class="flex flex-col mt-4 border-b border-[#ccc] py-3">
            <li class="flex justify-between list-none">
                <h3 class="text-xl">Is there an API availablt for integrating the URL shortening service into my own
                    application or website?</h3>
                <img src="../assets/images/plus.svg" alt="">
            </li>
            <!-- <p class="mt-4">
                        URL shortening works by taking a lon URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                    </p> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { auth } from '../utils/firebase';
import { createURL, getCurrentUrl } from '../services'
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
