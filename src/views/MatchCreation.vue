<script setup>
    import Menu from "../components/Menu.vue";
    import { ref } from "vue";
    import useTeam from "../composables/team";
    import useMatch from "../composables/match";
    import router from "../router/main_router";

    const { getAllTeams } = useTeam();
    const { getAllSports, insertMatch } = useMatch();

    const teams = ref([])
    const sports = ref([])
    const team1 = ref("")
    const team2 = ref("")
    const sport = ref("")
    const time = ref("")
    const error = ref("")

    getAllTeams().then(myTeams => teams.value = myTeams)
    getAllSports().then(mySports => sports.value = mySports)

    function addMatch() {
        if (!(team1.value && team2.value && time.value && sport.value))
            error.value = "Please fill all the fields"
        else if (team1.value == team2.value)
            error.value = "Both teams are the same"
        else {
            insertMatch(team1.value, team2.value, sport.value, time.value)
            router.push({ path: '/match/all' })
        }
    }
</script>

<template>
    <Menu></Menu>
    <section class="flex flex-col text-black items-center gap-4 p-10 bg-[#206090] min-h-[90vh] ph-[10vh]">
        <div class="w-fit flex flex-col gap-4">
            <label class="text-white font-bold text-xl">Team 1:</label>
            <select class="p-2 font-bold bg-white" v-model="team1">
                <option :value="team['id']" class="font-bold" v-for="team in teams">{{ team['name'] }}</option>
            </select>
            <label class="text-white font-bold text-xl">Team 2:</label>
            <select class="p-2 font-bold bg-white" v-model="team2">
                <option :value="team['id']" class="font-bold" v-for="team in teams">{{ team['name'] }}</option>
            </select>
            <label class="text-white font-bold text-xl">Sport:</label>
            <input class="text-left pl-2" type="text" list="sports" v-model="sport">
            <datalist id="sports">
                <option class="font-bold" v-for="sport in sports">{{ sport }}</option>
            </datalist>
            <label class="text-white font-bold text-xl">Time:</label>
            <input class="text-left pl-2" type="time" v-model="time">

            <button class="bg-green-500 text-white font-bold mt-5" type="submit" @click="addMatch">Add Match</button>

            <p>{{ error }}</p>
        </div>
    </section>
</template>

<style>
    h1, h2, p {
        color: white;
    }
</style>