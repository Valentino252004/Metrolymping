<script setup>
    import Menu from "../components/Menu.vue";
    import {ref} from "vue";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
    import useUser from "../composables/user";
    import useTeam from "../composables/team";

    const { getAuthUserId } = useUser();
    const { getTeamWithLeader, setTeamName, setMembers } = useTeam();

    const user = ref("");
    const id = ref("");
    const listeMembers = ref([]);

    getAuthUserId().then(myId => {
        id.value = myId;
        getTeamWithLeader(myId).then(team => {
            if (team.name != null)
                user.value = team.name
            if (team.members != null)
                listeMembers.value = team.members
        })
    })
    

    function editTeamName(name) {
        setTeamName(id.value, name)
        user.value = name
    }

    function addMember() {
        listeMembers.value.push("")
        setMembers(id.value, listeMembers.value)
    }

    function editMember(index, newName) {
        listeMembers.value[index] = newName;
        setMembers(id.value, listeMembers.value)
    }

    function removeMember(index) {
        listeMembers.value.splice(index, 1)
        setMembers(id.value, listeMembers.value)
    }
</script>

<template>
    <Menu>{{ user }}</Menu>
    <section class="flex flex-col items-center gap-4 p-20 bg-[#206090] min-h-[90vh] ph-[10vh]">
        <div class="flex flex-col lg:flex-row gap-4 items-center mb-8">
            <label class="font-bold text-xl text-white">Team Name: </label>
            <input @input="event => editTeamName(event.target.value)" class="font-bold p-2" placeholder="Nom de l'équipe" :value=user></input>
        </div>

        <div class="grid gap-4 grid-cols-[4fr_1fr] items-center" v-for="(member, index) in listeMembers">
            <input @input="event => editMember(index, event.target.value)" class="font-bold p-2" :value=member>
            <button @click="removeMember(index)" class="bg-red-500 h-[80%] aspect-square"><FontAwesomeIcon class="pt-[2px] text-xl text-white" @click="test" id="supprMember" :icon="faTimes" /></button>
        </div>
        <button v-if="listeMembers.length < 5" @click="addMember" class="mt-3 p-3 flex gap-3 center-items text-white bg-green-600"><span>Ajouter un membre</span><FontAwesomeIcon class="pt-[3px] text-xl" @click="test" id="supprMember" :icon="faPlus" /></button>
    </section>
</template>

<style>
    input {
        border: 1px solid black;
        border-radius: 3px;
        padding: 3px !important;
        color: black !important;
    }

    button {
        border: 1px solid black;
        padding: 5px;
        border-radius: 4px;
    }
</style>