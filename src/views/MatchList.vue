<script setup>
    import Menu from "../components/Menu.vue";
    import useMatch from "@/composables/match";
    import { ref } from "vue";

    const { getAllMatches, editScore } = useMatch();

    const matches = ref([])

    getAllMatches().then(myMatches => matches.value = myMatches)
</script>

<template>
    <Menu></Menu>
    <section class="flex flex-col items-center gap-4 p-10 bg-[#206090] min-h-[90vh] ph-[10vh]">
        <div class="w-fit flex flex-col gap-4">
            <div class="text-white match" v-for="match in matches">
                <div class="matchTitle">
                    <span>{{ match["time"].substr(0, 5) }}</span>
                    <span>:</span>
                    <span>{{ match["sport"] }}</span>
                </div>
                <div class="matchRow">
                    <span>{{ match["team1"]["name"] }}</span>
                    <span>-</span>
                    <span>{{ match["team2"]["name"] }}</span>
                </div>
                <div class="matchRow">
                    <div class="flex justify-center">
                        <input @input='event => editScore(match["id"], event.target.value, 1)' class="w-20 text-center" :value='match["team1_score"]'>
                    </div>
                    <span>-</span>
                    <div class="flex justify-center">
                        <input @input='event => editScore(match["id"], event.target.value, 2)' class="w-20 text-center" :value='match["team2_score"]'>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    h1, h2, p {
        color: white;
    }

    .match {
        border: 1px solid white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .matchRow {
        padding: 10px;
        display: grid;
        grid-template-columns: 4fr 1fr 4fr;
        justify-content: center;
        gap: 2px;
    }
    .matchRow > span, input {
        font-weight: bold;
        text-align: center;
    }

    .matchTitle {
        padding: 10px;
        text-align: center;
        background-color: #183048;
        border-bottom: 1px solid white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    .matchTitle > span {
        font-weight: bold;
    }
</style>