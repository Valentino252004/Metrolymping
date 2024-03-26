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

        console.log(data)

        if (error == null) {
            router.push({ path: 'chat' })
            return true;
        }

        return error;
    }

    async function signUpNewUser(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        router.push({ path: 'chat' })
    }
    
    return { signInUser, signUpNewUser }
}