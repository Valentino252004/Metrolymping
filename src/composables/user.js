import useSupabase from './supabase'

const {supabase} = useSupabase()

export default function useUser() {

    async function getAuthUserId() {
        const { data: { user } } = await supabase.auth.getUser()
        return user['id']
    }

    return (getAuthUserId);
}