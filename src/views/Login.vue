<template>
    <div class="w-[460px] mx-auto mt-[64px] text-[#bbb7b7]">
        <p class="text-center">Login with: </p>
        <div class="flex  items-center gap-6">
            <div class="border-b border-[#ccc] w-1/2"></div>
            <span class="font-semibold text-[#9e999e]">Or</span>
            <div class="border-b border-[#ccc] w-1/2"></div>
        </div>
        <form>
            <div class="w-full mt-4">
                <input type="text" name="email" placeholder="Email address or name" required
                    class="w-full p-2 rounded-md border-2 border-[#0065fe]" 
                    v-model="v$.email.$model">
                    <small 
                    class="text-red-500" v-if="v$.email.$errors.length">
                        {{ v$.email.$errors[0].$message }}  
                    </small>
                <div class="mt-4">
                    <input type="text" name="password" placeholder="Password"
                        class="w-full p-2 rounded-md border-2 border-[#0065fe]" 
                        v-model="v$.password.$model">
                    <small 
                    class="text-red-500" v-if="v$.password.$errors.length">
                        {{ v$.password.$errors[0].$message }}  
                    </small>
                    <small class="text-right text-[#0065fe] mt-2">
                        Forgot your password?
                    </small>
                </div>
                <button type="button" class="w-full bg-[#0065fe] py-3 rounded-full text-white mt-8"
                    @click="handleGoogleLogin">
                    Login
                </button>
            </div>
        </form>
        <div class="text-center text-sm mt-4">
            <p class="">Don't have an account? <span class="text-[#0065fe]">
               <router-link to="/signup">Sign Up</router-link>
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
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { auth } from '../utils/firebase'

const router = useRouter();

const user = reactive({ email: "", password: "" });

const userRules = {
    email: { required, email },
    password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(userRules, user);

const handleGoogleLogin = async () => {
    const isValid = await v$.value.$validate();

    if (!isValid) return;

    try {
        const response = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        );

        if (response.user) {
            localStorage.setItem("isLoggedIn", "true");

            router.push("/");
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped></style>