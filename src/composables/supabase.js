import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function useSupabase() {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    return {supabase, supabaseUrl, supabaseAnonKey}
}