<script setup>
    import Menu from "../components/Menu.vue";
    import {ref} from "vue";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

    const listeMembers = ref(["Valentin Patey", "Théo Lesieur", "Raphaël Aubry"]);

    function addMember() {
        listeMembers.value.push("")
    }

    function editMember(index, newName) {
        listeMembers.value[index] = newName;
    }

    function removeMember(index) {
        listeMembers.value.splice(index, 1)
    }
</script>

<template>
    <Menu></Menu>
    <section class="flex flex-col items-center gap-4 p-20 bg-[#206090] h-[90vh] ph-[10vh]">
        <div class="flex flex-col lg:flex-row gap-4 items-center mb-8">
            <h1 class="font-bold text-xl">Nom de l'équipe : </h1><input class="font-bold p-2" placeholder="Nom de l'équipe" value="team"></input>
        </div>

        <div class="grid gap-4 grid-cols-[4fr_1fr] items-center" v-for="(member, index) in listeMembers">
            <input @input="event => editMember(index, event.target.value)" class="font-bold p-2" :value=member>
            <button @click="removeMember(index)" class="bg-red-500 h-[80%] aspect-square"><FontAwesomeIcon class="pt-[2px] text-xl text-white" @click="test" id="supprMember" :icon="faTimes" /></button>
        </div>
        <button @click="addMember" class="mt-3 p-3 flex gap-3 center-items text-white bg-green-600"><span>Ajouter un membre</span><FontAwesomeIcon class="pt-[3px] text-xl" @click="test" id="supprMember" :icon="faPlus" /></button>
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