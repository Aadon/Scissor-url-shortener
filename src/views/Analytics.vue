<template>
        <div class="flex max-w-[1200px] mx-auto mt-32 md:mt-20">
            
            <div class="flex flex-col md:flex md:flex-row text-xl justify-center items-center mx-auto max-w-[840px] w-full gap-12 h-96 ">
                <h1 class="text-3xl capitalize  font-bold tracking-wide">
                    one stop. <br>four <span class="text-[#0065fe]">possibilities</span>.
                </h1>
                <div class="flex justify-between flex-col md:flex-row leading-5 w-[900px] gap-10">
                    <div class="flex-1 text-center ">
                        <h2 class="font-bold text-2xl uppercase mb-2">3m</h2>
                        <small class="text-md">Active users</small>
                    </div>
                    <div class=" flex-1 text-center">
                        <h2 class="font-bold text-2xl uppercase mb-2">60m</h2>
                        <small class="text-md">Links and QR codes created</small>
                    </div>
                    <div class="flex-1 text-center">
                        <h2 class="font-bold text-2xl uppercase mb-2">1b</h2>
                        <small class="text-md ">Clicked and scanned connections</small>
                    </div>
                    <div class="flex-1 text-center">
                        <h2 class="font-bold text-2xl uppercase mb-2">300k</h2>
                        <small class="text-md ">App integrations</small>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { app } from '../utils/firebase';

const activeUsers = ref<number>(0);

onMounted(() => {
  const db = getDatabase(app);
  const activeUsersRef = dbRef(db, 'analytics/activeUsers');

  // Listen for changes to activeUsers data in Firebase
  onValue(activeUsersRef, (snapshot) => {
    if (snapshot.exists()) {
      activeUsers.value = snapshot.val();
      console.log(snapshot.val())
    }
  });
});
</script>

<style scoped>
    /* @media screen and (max-width: 640px ) {
        .containr {
        position: flex;
        flex-direction: column;
        gap: 2px;
    }
    .right {
        position: flex;
        flex-direction: column;
        margin-top: 40px;
    }
    } */
    
    
</style>