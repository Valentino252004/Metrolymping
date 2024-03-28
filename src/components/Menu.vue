<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useAuth from "../composables/auth";
import useUser from "../composables/user";
import useTeam from "../composables/team";

const { logOut } = useAuth();
const { getAuthUserId } = useUser();
const { getTeamWithLeader } = useTeam();

const user = ref("");
const isGuest = ref(true);
const id = ref("");
const dropdown = ref(null);
const opacityDiv = ref(null);

getAuthUserId().then(myId => {
    if (myId == null) {
        user.value = "Guest"
        isGuest.value = true;
    } else {
        id.value = myId;
        isGuest.value = false;
        getTeamWithLeader(myId).then(team => {
            if (team.name != null)
                user.value = team.name
        })
    }
})

function openMenu() {
    let dropDownStyle = dropdown.value.style
    dropDownStyle.display = (dropDownStyle.display != "flex" ? "flex" : "none")
    let opacityStyle = opacityDiv.value.style
    opacityStyle.display = (opacityStyle.display != "block" ? "block" : "none")
}

</script>
<template>
    <header @click="openMenu" class="flex items-center text-white bg-[#183048] p-5 h-[10vh]">
        <span class="w-[95vw]"><slot>{{ user }}</slot></span>
        <FontAwesomeIcon id="burger" :icon="faBars" />
    </header>
    <nav class="text-white bg-[#183048] absolute top-[10vh] left-0 w-[100vw] max-w-[100%] z-10" ref="dropdown">
        <a v-if="!isGuest" href="/team">Team Settings</a>
        <a href="/rankings">Rankings</a>
        <a href="/match/all">Matches</a>
        <a @click="logOut" v-if="!isGuest" href="#">Logout</a>
        <a v-if="isGuest" href="/login">Login</a>
        <a v-if="isGuest" href="/signup">Sign up</a>
    </nav>
    <div id="opacityDiv" class="fixed top-[10vh] h-[100%] w-[100vw] bg-[#000000c0]" ref="opacityDiv"></div>
</template>

<style>

    nav {
        display: none;
        flex-direction: column;
    }

    nav a {
        padding: 10px;
        padding-left: 20px;
        border-top: 1px solid white;
        text-decoration: none;
        color: white;
    }

    #opacityDiv {
        display: none;
    }

    #burger {
        font-size: 1.8em;
    }

</style>