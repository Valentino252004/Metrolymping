<script setup>

</script>

<template>
    <section class="flex flex-col items-center gap-4 p-20 bg-[#206090] vh-100">
        <h2 class="font-bold text-xl">Create an account</h2>
        <form class="flex flex-col items-center gap-4">
            <input type="text" placeholder="Email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Password (again)">
            <button type="submit" class="bg-green-200">Let's go</button>
        </form>
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