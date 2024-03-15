<template>
            <div class="container mt-44 flex justify-center w-full text-base h-full">
                <div class="flex flex-col ">
                    <div class="flex gap-4">
                        <img src="../assets/images/Line 70.svg"/>
                        <h2 class="text-3xl font-semibold">
                        A <span class="text-[#0065fe]">price perfect</span> for your needs.
                        </h2>
                    </div>
                    <p class="w-[540px] text-center mt-3 text-xl">
                        From catering for your personal, business, event, social needs, you can be rest assured we have in
                        mind in our pricing.
                    </p>
                </div>
            </div>

            <div class="wrapper md:inline-flex relative mt-[180px] h-[600px] w-full">

                <div class="border border-[#0065fe] w-[400px] rounded-md h-[455px] p-12 mx-auto text-lg">
                    <p class="text-xl mb-3">Basic</p>
                    <div class="py-4 space-y-3">
                        <h2 class="font-bold text-3xl">Free</h2>
                        <p class="text-lg">Free plan for all users</p>
                        <ul class="space-y-4 taxt-sm tracking-tight">
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                Unlimited URL shortening
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg">
                                Basic link analytic
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg">
                                customizable short links
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg">
                                standard support
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg">
                                Ad-supported
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border border-[#0065fe] w-[400px] rounded-md h-[455px] p-12 mx-auto">
                    <p class="text-xl mb-3">Teams</p>
                    <div class="py-4 space-y-3">
                        <h2 class="font-bold text-3xl tracking-wide">$25/month</h2>
                        <p class="text-lg">Share with up to 10 users</p>
                        <ul class="space-y-4 text-lg tracking-tight capitalize">
                            <li class="flex gap">
                                <img src="../assets/images/check-circle.svg">
                                Team collaborations
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg">
                                user roles and permission
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg">
                                enhanced security
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                API acces
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                dedicated account manager
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    class="pro border w-[510px] rounded-md h-[627px] p-16 absolute bg-[#1e3448] -top-24 left-[32%] text-white py-28">
                    <p class="text-2xl mb-3 ">Professional</p>
                    <div class=" space-y-6">
                        <h2 class="font-bold text-3xl py-1 tracking-wide">$15/month</h2>
                        <p>Ideal for business creators</p>
                        <ul class="space-y-8 capitalize text-lg">
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="" class="text-white">
                                Enhanced Link analytic
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                custom branded domains
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                advanced link customization
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                priority support support
                            </li>
                            <li class="flex gap-2">
                                <img src="../assets/images/check-circle.svg" alt="">
                                Ad-free experience
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex justify-center gap-8 text-lg text-[#0065fe] mb-16">
                <button class="border border-[#0065fe] rounded-full px-6 py-1 capitalize hover:bg-[#0065fe] hover:text-white">
                    get custom pricing
                </button>
                <button class="border border-[#0065fe] rounded-full px-6 py-2 capitalize hover:bg-[#0065fe] hover:text-white">
                    select pricing
                </button>
                </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
    @media  screen and (max-width: 640px) {
        .pro {
        position: absolute;
        top: 100%;
        left: 10%;
    }
    }

    /* .pro {
        position: absolute;
        top: -100%;
        left: 10%;
    } */
</style>