<script setup>
import { ref } from "vue"
import useAuth from "../composables/auth";

const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const error = ref("")

function checkmail(mail) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(mail)
}

const { signUpNewUser } = useAuth();

function signUp() {
    error.value=""
    if (password.value == "" || confirmPassword.value == "" || email.value == "") {
        return error.value += "Tout les champs doivent être remplis !"
    }
    if (!checkmail(email.value)) {
        error.value += "L'adresse mail n'est pas valide"
    }
    else if (password.value != confirmPassword.value) {
        error.value += "Les mots de passe sont différents<br>"
    }
    if (error.value == "") {
        signUpNewUser(email.value, password.value).then(myError => error.value = myError)
    }
}

</script>

<template>
    <section class="flex flex-col items-center gap-4 p-20 bg-[#206090] vh-100">
        <h2 class="font-bold text-xl">Create an account</h2>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="password" placeholder="Password (again)" v-model="confirmPassword">
        <button type="submit" class="bg-green-200" @click="signUp">Let's go</button>
        <p>{{ error }}</p>
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
        color: blue;
        text-decoration: underline;
    }
</style>