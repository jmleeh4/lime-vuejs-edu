import {createRouter, createWebHistory} from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from "../views/ItemView"
import UserView from "../views/UserView";
import Calculator from "@/views/Calculator";
import HelloWorld from "@/components/HelloWorld";


const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView
        },
        {
            path: '/ask',
            name: 'ask',
            component : AskView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component : JobsView
        },
        {
            path: '/item/:id',
            component : ItemView
        },
        {
            path: '/user/:id',
            component : UserView
        },
        {
            path: '/hello',
            component : HelloWorld
        },
        {
            path: '/calculator',
            component : Calculator
        }
    ],

})

export default router;

