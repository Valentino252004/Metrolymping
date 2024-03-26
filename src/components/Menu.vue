<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const dropdown = ref(null);

function test() {
    let style = dropdown.value.style
    style.display = (style.display != "flex" ? "flex" : "none")
}

</script>
<template>
    <header>
        <span>Team Name (à changer vraiment aller)</span>
        <FontAwesomeIcon @click="test" id="burger" :icon="faBars" />
    </header>
    <nav ref="dropdown">
        <a href="#">Team Settings</a>
        <a href="#">Rankings</a>
        <a href="#">Matches</a>
        <a href="#">Logout</a>
        <a class="text-xs" href="#">Login</a>
        <a class="text-xs" href="#">Sign up</a>
    </nav>
</template>

<style>
    header {
        color: white;
        display: grid;
        grid-template-columns: 8fr 1fr;
        height: 50px;
        padding: 10px;
        background-color: #206090;
    }

    nav {
        display: none;
        flex-direction: column;
        color: white;
        background-color: #206090;
    }

    nav a {
        padding: 10px;
        padding-left: 20px;
        border-bottom: 1px solid white;
    }

    #burger {
        font-size: 1.8em;
    }

</style>