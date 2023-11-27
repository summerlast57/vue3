import './assets/main.css'

// new Vue() 创建一个应用实例  => createApp()
// createRouter()   createStore()
// 将创建实例进行了封装，保证每个实例的独立封闭性
import { createApp } from 'vue'

import { createPinia } from 'pinia'

// 导入持久化的插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

const pinia = createPinia() // 创建pinia实例

const app = createApp(App) // 创建根实例

app.use(pinia.use(piniaPluginPersistedstate)) // pinia插件的安装配置

// mount 设置挂载点 #app （id为app的盒子）
app.mount('#app')

