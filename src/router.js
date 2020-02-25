import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import MyWallet from './components/MyWallet.vue'
import profile from './components/Profile.vue'
import Authenticated from './components/Authenticated.vue'
import Contracts from './components/Contracts.vue'
import sendToken from './components/sendToken.vue'
import sendEth from './components/sendEth.vue'
import burnToken from './components/burnToken.vue'
import ImportAccounts from './components/importaccounts'
import checkTxStatus from './components/checkTxStatus'
import TransactionHistory from './components/TransactionHistory'

//import Main from './components/Main.vue'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'
import Forgetpass from './components/Auth/Forgetpass.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'landingPage',
            component: LandingPage
        },
        {
            path: '/home',
            name: 'home',
            component: Authenticated,
            children: [
                {
                    path: '/home',
                    name: 'mywallet',
                    component: MyWallet
                },
                {
                    name: 'sendToken',
                    path: '/sendToken/:address',
                    component: sendToken
                },
                {
                    name: 'sendEth',
                    path: '/sendEth/:address',
                    component: sendEth       
                },
                {
                    path: '/burnToken',
                    name: 'burnToken',
                    component: burnToken
                },
                {
                    path: '/profile',
                    name: 'Profile',
                    component: profile
                },
                {
                    path: '/contracts',
                    name: 'contracts',
                    component: Contracts
                },
                {
                    path: '/importaccounts',
                    name: 'importaccounts',
                    component: ImportAccounts
                },
                {
                    path: '/checkTxStatus',
                    name: 'checkTxStatus',
                    component: checkTxStatus
                },
                {
                    path: '/TransactionHistory',
                    name: 'TransactionHistory',
                    component: TransactionHistory
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/forgetpass',
            name: 'Forgetpass',
            component: Forgetpass
        }
    ]
});
