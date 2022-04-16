import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHidden: true
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHidden: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default routes