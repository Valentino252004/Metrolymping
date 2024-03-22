<script setup>

</script>

<template>
    <section class="flex flex-col items-center gap-4 p-20 bg-[#206090] vh-100">
        <h1 class="font-bold text-2xl">Metrolympiades</h1>
        <h2 class="font-bold text-xl">Login</h2>
        <form class="flex flex-col items-center gap-4">
            <input type="text" placeholder="Email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$">
            <input type="password" placeholder="Password">
            <button type="submit" class="bg-green-200">Get me in!</button>
        </form>
        <p>Don't have an account? <a href="#">Create an account!</a></p>
        <button class="bg-blue-200">Guest Access</button>
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