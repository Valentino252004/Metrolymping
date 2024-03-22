import { createRouter, createWebHistory } from 'vue-router';
import LoginView from "../views/LoginView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        /*
        {
            path: '/',
            redirect: () => {
                return { name: 'login', params: { chatId: 'new' } };
            }
        },*/
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }
    ]
});

/*
async function isLoggedIn() {
    const { data } = await supabase.auth.getSession();
    return !!data.session;
}

router.beforeEach(async (to, from) => {

    if (to.path == "/chat"){
        const isLogged = await isLoggedIn()
        if (isLogged) {
            return true
        }
        return "/login"
    }

    return true;
})*/

export default router;