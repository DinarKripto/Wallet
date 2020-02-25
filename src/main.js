import Vue from 'vue'
import App from './App.vue'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import Topbar from './components/Topbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import MainContent from './components/MainContent.vue'
import PopupModals from './components/popup-modals/PopupModals.vue'
import NewWallet from './components/popup-modals/NewWallet.vue'
import DncModal from './components/popup-modals/DncModal.vue'
import EtheriumModal from './components/popup-modals/EtheriumModal.vue'
import BitcoinModal from './components/popup-modals/BitcoinModal.vue'
import TransactionHistory from './components/TransactionHistory.vue'
import TransactionSpeed from './components/popup-modals/TransactionSpeed.vue'

import Spinner from 'vue-simple-spinner'
import router from './router'

Vue.component('topbar', Topbar)
Vue.component('sidebar', Sidebar)
Vue.component('project-footer', Footer)
Vue.component('main-content', MainContent)
Vue.component('popup-modals', PopupModals)
Vue.component('new-wallet-modal', NewWallet)
Vue.component('dnc-modal', DncModal)
Vue.component('etherium-modal', EtheriumModal)
Vue.component('BitcoinModal', BitcoinModal)
Vue.component('vue-simple-spinner', Spinner)
Vue.component('TransactionHistory', TransactionHistory)
Vue.component('TransactionSpeed', TransactionSpeed)

import VeeValidate from "vee-validate";

Vue.use(FlagIcon);
Vue.use(VeeValidate);

Vue.config.productionTip = false
new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
