import { createRouter, createWebHistory } from 'vue-router';
import useSupabase from '../composables/supabase'

import LogIn from "../views/LogIn.vue"
import SignUp from "../views/SignUp.vue"
import Team from "../views/Team.vue"
import Rankings from "../views/Rankings.vue"
import MatchList from "../views/MatchList.vue"
import MatchCreation from '../views/MatchCreation.vue';

const {supabase} = useSupabase()

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        
        {
            path: '/',
            redirect: () => {
                return { name: 'team'};
            }
        },
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
            meta: {
                protected: true
            },
            component: Team
        },
        {
            path: '/rankings',
            name: 'rankings',
            component: Rankings
        },
        {
            path: '/match/all',
            name: 'matchList',
            meta: {
                protected: true
            },
            component: MatchList
        },
        {
            path: '/match/creation',
            name: 'matchCreation',
            meta: {
                protected: true
            },
            component: MatchCreation
        }
    ]
});


async function isLoggedIn() {
    const { data } = await supabase.auth.getSession();
    return !!data.session;
}
router.beforeEach(async (to, from) => {
    if(to.meta.protected){
        const isLogged = await isLoggedIn()
        if(isLogged)
            return true
        else
            return "/login"
    }
})

export default router;