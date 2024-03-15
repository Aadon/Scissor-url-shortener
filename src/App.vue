<template>
  <div>
    <router-view />
  </div>
</template>

<!-- <script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";


// const userStore = useUserStore();

// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const uid = user.uid;

    localStorage.setItem("isLoggedIn", true);

    console.log("----=====>", user);

    
  } else {
    
    console.log("User should be signed out");
  }
});

</script> -->

<style>
  
</style>