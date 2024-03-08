<template>
    <div class="w-[460px] mx-auto mt-[64px] ">
        <p class="text-center">Sign Up with: </p>
        <div class="flex gap-6 justify-center items-center py-4">
            <button @click="handleGoogleLogin" class="flex items-center font-light bg-[#0065fe] px-3 py-2 rounded-md">
                <img src="../assets/images/google.svg" alt="" class="w-6 h-6">
                <span class="text-white capitalize text-sm">google</span>
            </button>
            <button @click="handleGoogleLogin" class="flex items-center font-light bg-[#0065fe] px-4 py-2 rounded-md">
                <img src="../assets/images/apple.svg" alt="" class="w-6 h-6">
                <span class="text-white capitalize text-sm">apple</span>
            </button>
        </div>
        <div class="flex  items-center gap-6 mt-3 mb-10">
            <div class="border-b border-[#ccc] w-1/2"></div>
            <span class="font-semibold">Or</span>
            <div class="border-b border-[#ccc] w-1/2"></div>
        </div>

        <form>
            <div class="w-full mt-4 ">
                <div class="mt-4">
                    <input type="text" name="email" placeholder="Username" required 
                    v-model="v$.userName.$model"
                        class="w-full p-2  rounded-md border-2 border-[#0065fe]">
                    <small class="text-red-500" 
                    v-if="v$.userName.$errors.length">
                        {{ v$.userName.$errors[0].$message }}
                    </small>
                </div>

                <div class="mt-4">
                    <input type="text" name="email" placeholder="Email" required
                     v-model="v$.email.$model"
                        class="w-full p-2  rounded-md border-2 border-[#0065fe]">
                    <small class="text-red-500" 
                    v-if="v$.email.$errors.length">
                        {{ v$.email.$errors[0].$message }}
                    </small>
                </div>

                <div class="mt-4">
                    <input type="text" name="password" placeholder="Password" v-model="v$.password.$model"
                        class="w-full p-2 rounded-md border-2 border-[#0065fe]">
                    <small class="text-red-500" v-if="v$.password.$errors.length">
                        {{ v$.password.$errors[0].$message }}
                    </small>
                </div>
                <div class="mt-4">
                    <input type="text" name="email" placeholder="Retype password" required
                        v-model="v$.confirmPassword.$model" class="w-full p-2  rounded-md border-2 border-[#0065fe]">
                    <small class="mt-2">
                        6 or more characters, one number, one uppercase and one lowercase 
                    </small>

                    <small class="text-red-500" v-if="v$.confirmPassword.$errors.length">
                        {{ v$.confirmPassword.$errors[0].$message }}
                    </small>
                </div>
                <button type="button" class="w-full bg-[#0065fe] py-3 rounded-full text-white mt-8"
                    @click="handleEmailSignup">
                    {{ isSubmitting ? 'Signing up' : 'Sign Up' }}
                </button>
            </div>
        </form>
        <div class="text-center text-sm mt-4">
            <p class="">Already have an account? <span class="text-[#0065fe]">
                <router-link to="/login">Log in</router-link>
            </span></p>
            <p>
                <small>
                    By signing in with an account, you agree to <span>Scissor's</span>Terms of Service, Privacy policy and
                    Acceptable Use Policy.
                </small>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { createUser } from '../services'

const handleGoogleLogin = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
}

const router = useRouter();

const user = reactive({
    userName: '',
    email: "",
    password: "",
    confirmPassword: "",
});

const isSubmitting = ref(false);

const userRules = {
    userName: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: {
        required,
        minLength: minLength(6),
        sameAs: sameAs(computed(() => user.password)),
    },
};

const v$ = useVuelidate(userRules, user)

const handleEmailSignup = async () => {
    const isValid = v$.value.$validate()
    if (!isValid) return
    try {
        isSubmitting.value = true
        const response = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password
        )
        console.log('auth', response)
        if (response.user) {
            localStorage.setItem("isLoggedIn", "true");


            router.push('/login');
        }

    } catch (error) {
        console.log(error);
    } finally {
        isSubmitting.value = false;
    }
}

</script>

<style scoped></style>