<template>
    <div class="pt-[100px]">
      <div v-if="!isLoading">
        <div
          class="bg-gray-200 border border-[#ccc] h-[100px] w-[100px] rounded-full mx-auto mb-10 flex items-center justify-center cursor-pointer"
          @click="fileInput?.click()"
        >
          <span
            class="text-2xl font-semibold text-gray-400"
            v-if="!profile.photoUrl"
            ></span
          >
          <img
            :src="profile.photoUrl"
            alt="photo-url"
            class="w-full h-full object-cover rounded-full"
            v-else
          />
  
          <input
            type="file"
            class="hidden"
            ref="fileInput"
            @change="handleFileChange"
          />
        </div>
  
        <form class="w-[371px] mx-auto flex flex-col gap-y-5">
          <label class="font-semibold flex flex-col gap-y-1">
            Email:
  
            <input
              class="border border-solid w-full font-normal px-3 h-[43px]"
              disabled
              v-model="v$.email.$model"
            />
  
            <small class="text-red-500" v-if="v$.email.$errors.length">
            {{v$.email.$errors[0].$message}}
              </small>
          </label>
  
          <label class="font-semibold flex flex-col gap-y-1">
            Display Name:
  
            <input
              class="border border-solid w-full font-normal px-3 h-[43px]"
              v-model="v$.displayName.$model"
            />
  
            <small class="text-red-500" v-if="v$.email.$errors.length">{{
              v$.displayName.$errors[0].$message
            }}</small>
          </label>
  
          <button
            class="bg-[#0065fe] w-full text-white font-semibold py-3 rounded"
            :class="{ 'cursor-not-allowed': isSubmitting }"
            :disabled="isSubmitting"
            type="button"
            @click="handleProfileUpdate"
          >
            {{ isSubmitting ? "Saving..." : "Save" }}
          </button>
        </form>
      </div>
  
      <div class="font-semibold text-gray-400 text-center" v-else>Loading...</div>

      <router-link to="/myUrl">
        Short Links
      </router-link> 
       
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref, computed } from "vue";
  import { onAuthStateChanged, updateProfile, type User } from "firebase/auth";
  import { useVuelidate } from "@vuelidate/core";
  import { required, email, minLength } from "@vuelidate/validators";
  import { auth } from "../utils/firebase";
  import { updateDoc, deleteDoc,  } from "firebase/firestore";
import { useRouter, useRoute } from "vue-router";


//   import { useUserStore } from "@/stores/user";
//   import useFileUpload from "@/composables/use-file-upload";
  
//   const userStore = useUserStore();
  // const { uploadFile } = useFileUpload();


  const router = useRouter();
  const route = useRoute()
// const Urls = router.currentRoute.value.params.urls;
  
  const isSubmitting = ref(false);
  const isLoading = ref(true);
  const fileInput = ref<HTMLInputElement | null>();
  const files = ref();
  const urls = ref([])
  
  const profile = reactive({
    email: "",
    displayName: "",
    photoUrl: "",
  });
  
  const profileRules = {
    email: { required, email },
    displayName: { required },
  };
  
const urlId = route.params.id
const urlsValue = computed(() => route.params.urls)

  const v$ = useVuelidate(profileRules, profile);
  
  const handleProfileUpdate = async () => {
    try {
      isSubmitting.value = true;
  
      await updateProfile(auth.currentUser as User, {
        displayName: profile.displayName,
        photoURL: profile.photoUrl,
      });
    } catch (error) {
      console.log(error);
    } finally {
      isSubmitting.value = false;
    }
  };
  
  const handleFileChange = (event: Event) => {
    //   console.log((event.target as EventTarget).files);
    if (fileInput.value?.files) {
      // uploadFile(fileInput.value?.files[0], {
      //   onDownloadUrl: (downloadUrl) => {
      //     console.log(downloadUrl);
      //     profile.photoUrl = downloadUrl;
      //   },
      // });
    }
  };
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      isLoading.value = false;
      profile.email = user?.email ?? "";
      profile.displayName = user?.displayName ?? "";
      profile.photoUrl = user?.photoURL ?? "";
    }
  });
  
  </script>
  
  <style scoped></style>