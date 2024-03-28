import useSupabase from "./supabase";
import { useRouter } from 'vue-router'

export default function useAuth() {
    const router = useRouter()
    const { supabase } = useSupabase();

    async function signInUser(email, password) {
        console.log(email)
        console.log(password)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error == null) {
            router.push({ path: 'team' })
            return true;
        }

        return error;
    }

    async function signUpNewUser(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        router.push({ path: 'team' })
    }
    
    return { signInUser, signUpNewUser }
}