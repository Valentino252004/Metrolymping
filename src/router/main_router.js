import { createRouter, createWebHistory } from 'vue-router';
import useSupabase from '../composables/supabase'

import LogIn from "../views/LogIn.vue"
import SignUp from "../views/SignUp.vue"
import Team from "../views/Team.vue"

const {supabase} = useSupabase()

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        
        /*{
            path: '/',
            redirect: () => {
                return { name: 'rankings' };
            }
        },*/
        {
            path: '/login',
            name: 'login',
            component: LogIn
        }, 
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        }/*,
        {
            path: '/rankings',
            name: 'rankings',
            component: Rankings
        },
        {
            path: '/match/all',
            name: 'matchList',
            component: MatchList
        },
        {
            path: '/match/creation',
            name: 'matchCreation',
            component: MatchCreation
        }*/
    ]
});


async function isLoggedIn() {
    const { data } = await supabase.auth.getSession();
    return !!data.session;
}
/*
router.beforeEach(async (to, from) => {
    if (to.path != "/" || to.path != "/login" || to.path != "/rankings" || to.path != "/signup"){
        const isLogged = await isLoggedIn()
        if (isLogged) {
            return true
        }
        return "/login"
    }
    return true;
})*/

export default router;