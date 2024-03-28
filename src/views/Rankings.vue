<script setup>
    import Menu from "../components/Menu.vue";
    import useMatch from "@/composables/match";
    import { ref } from "vue";

    const { getOrderedRankings } = useMatch();

    const rankings = ref([])

    getOrderedRankings().then(results => rankings.value = results)
</script>

<template>
    <Menu></Menu>
    <section class="flex flex-col items-center gap-4 p-10 bg-[#206090] h-[90vh] ph-[10vh]">
        <div class="w-fit flex flex-col gap-4">
            <div class="text-white team rounded-lg [&:nth-child(1)]:bg-yellow-600 [&:nth-child(2)]:bg-gray-500 [&:nth-child(3)]:bg-red-600 bg-[#185070]" v-for="(team, index) in rankings">
                <span class="bg-[#183048] rounded-s-lg">{{ index+1 }}</span>
                <span>{{ team[0] }}</span>
                <span>{{ team[1] }}</span>
            </div>
        </div>
    </section>
</template>

<style>
    h1, h2, p {
        color: white;
    }

    .team {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        text-align: center;
        border: 1px solid white;
    }

    .team span {
        padding: 10px;
    }
</style>