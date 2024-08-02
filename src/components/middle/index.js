// 注册编排区域组件，组件名与config下的menu.js中的middleComp属性一致
const modules = import.meta.globEager("./*.vue")
const componentsMoudleObj = {}
for (const key in modules) {
  let name = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.vue'))
  componentsMoudleObj[name] = modules[key].default
}

export default componentsMoudleObj