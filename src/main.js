import { createApp } from 'vue'
import './style.css'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'

const app = createApp(App)

app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
