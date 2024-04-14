<script setup>
import {ref} from "vue";
import useAuth from "../composables/auth";
import { useRouter } from "vue-router";

const router = useRouter()
const email = ref("")
const password = ref("")
const error = ref("")

const { signInUser } = useAuth();

function signIn() {
    signInUser(email.value, password.value).then(myError => error.value = myError)
}

function goToRankings() {
    router.push({ path: 'rankings' })
}

</script>

<template>
    <section class="flex flex-col items-center gap-4 p-10 bg-[#206090] min-vh-100">
        <h1 class="font-bold text-2xl">Metrolympiades</h1>
        <h2 class="font-bold text-xl">Login</h2>
        <div class="flex flex-col items-center gap-4">
            <input type="text" placeholder="Email" v-model="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit" @click="signIn" class="bg-green-200">Get me in!</button>
            <p>{{ error }}</p>
        </div>
        <p>Don't have an account? <a href="/signup" class="underline text-lime-500">Create an account!</a></p>
        <button @click="goToRankings" class="bg-blue-200">Guest Access</button>
    </section>
</template>

<style>
    h1, h2, p {
        color: white;
    }

    input {
        border: 1px solid black;
        border-radius: 3px;
        padding: 3px;
    }

    button {
        border: 1px solid black;
        padding: 5px;
        border-radius: 4px;
    }

    a {
        color: lime;
        text-decoration: underline;
    }

</style>