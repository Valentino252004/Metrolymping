import useSupabase from './supabase'

const {supabase} = useSupabase()

export default function useTeam() {

    async function getTeamWithLeader(leaderId) {
        const { data } = await supabase.from('teams').select("id, name, members").eq('leader', leaderId)
        return data[0]
    }

    async function setTeamName(id, name) {
        await supabase.from('teams').update({ name: name }).eq("leader", id)
    }

    async function setMembers(id, array) {
        await supabase.from('teams').update({ members: array }).eq("leader", id)
    }

    return { getTeamWithLeader, setTeamName, setMembers };
}