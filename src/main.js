import { createApp } from 'vue'
import App from './App.vue';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

import './style.css'



createApp(App).mount('#app')
