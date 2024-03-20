<template>
    <div class="flex justify-center gap-2 mt-24">
        <img src="../assets/images/Line 70.svg">
        <h1 class="text-3xl font-bold">FAQs</h1>
    </div>

    <div class="h-[860px] mt-10 px-8 md:w-[792px] max-w-[1200px] mx-auto text-lg font-normal">
        <div class="flex flex-col border-b border-[#ccc] py-6" 
        v-for="(question, index) in questions" :key="index">
            <li class="flex justify-between list-none">

                
                <h3 class="text-xl"> {{ question.title }}</h3>
                <img v-if="!question.showAnswer" 
                src="../assets/images/plus.svg" 
                @click="toggleAnswer(question)"
                class="flex justify-end"
                >

                <img v-if="question.showAnswer" 
                src="../assets/images/minus.svg" 
                @click="toggleAnswer(question)"
                >
            </li>
            <p 
            class="mt-4 text-lg" 
            v-show="question.showAnswer"> 
                    {{ question.answer }}
                </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const questions = ref([
    {
        title: 'How does URL shortening work?',
        answer: 'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
        showAnswer: false
    },
    {
        title: 'Is it necessary to create an account to use the URL shortening service?',
        answer: 'You do not need an account to use the URL shortening service but you will need to login or signup to an account to manage your created URLs',
        showAnswer: false
    },
    {
        title: 'Are the shortened links permanent? Will they expire?',
        answer: 'The shortened links do not expire',
        showAnswer: false
    },
    {
        title: 'Are they any limitations on the number of URLs I can shorten?',
        answer: 'There are no limitations',
        showAnswer: false
    },
    {
        title: 'Can I customize the shortened URLs to reflect my brand or content?',
        answer: 'Yes, you can.',
        showAnswer: false
    },
    {
        title: 'Can I track the performance of my shortened URLs',
        answer: 'Yes. We have provided the necessary parameters to enable you track hoe your shortened URLs are doing.',
        showAnswer: false
    },
    {
        title: 'How secure is the URL shortening service? Are they protected against spam or malicious activity?',
        answer: 'Our short links are protected',
        showAnswer: false
    },
    {
        title: 'What is QR code and what can it do?',
        answer: 'A QR code, short for Quick Response code, is a type of two-dimensional barcode that contains information encoded within it. QR codes can store various types of data, including text, URLs, contact information, or other types of information.',
        showAnswer: false
    },
    {
        title: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
        answer: 'Yes, there ia an API.',
        showAnswer: false
    }
])


const toggleAnswer = (question) => {
    question.showAnswer = !question.showAnswer

}
</script>

<style scoped>
</style>