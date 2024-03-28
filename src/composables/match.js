import useSupabase from './supabase'

const {supabase} = useSupabase()

export default function useMatch() {

    async function getAllMatches() {
        const { data } = await supabase.from("matchs")
                                       .select('id, team1 (name), team2 (name), team1_score, team2_score, time, sport')
                                       .order('time');
        return data;
    }

    async function editScore(id, score, team) {
        if (team == 1)
            await supabase.from("matchs").update({"team1_score": score}).eq("id", id)
        else
            await supabase.from("matchs").update({"team2_score": score}).eq("id", id)
    }

    async function getOrderedRankings() {
        const { data } = await supabase.from('matchs').select('team1 (name), team2 (name), team1_score, team2_score')
        let teams = {};
        for (const match of data) {
            let t1_name = match.team1.name ? match.team1.name : "Sans nom";
            let t2_name = match.team2.name ? match.team2.name : "Sans nom";
            let t1 = match.team1_score
            let t2 = match.team2_score
            let t1_result, t2_result;
            if (t1 > t2) {
                t1_result = 3;
                t2_result = 0;
            } else if (t1 == t2) {
                t1_result = 1;
                t2_result = 1;
            } else {
                t1_result = 0;
                t2_result = 3;
            }
            teams[t1_name] = t1_result + (teams[t1_name] ? teams[t1_name] : 0)
            teams[t2_name] = t2_result + (teams[t2_name] ? teams[t2_name] : 0)
        }
        return Object.keys(teams).map((key) => [key, teams[key]]).sort((a, b) => b[1] - a[1]);
    }

    return { getOrderedRankings, getAllMatches, editScore };
}