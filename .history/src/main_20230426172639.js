import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//dadadaddada
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

// import ViewUIPlus from 'view-ui-plus'
// import 'view-ui-plus/dist/styles/viewuiplus.css'
// .use(ViewUIPlus)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// .use(ElementPlus)



createApp(App).use(ElementPlus).use(Antd).use(store).use(router).mount('#app')
