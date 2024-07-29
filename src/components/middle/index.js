import {markRaw} from 'vue'
const modules = import.meta.glob('./*.vue')

let components = {}
const keys = Object.keys(modules)
console.log(modules)
// for (const path in keys) {
//   // modules[path]().then(async (mod) => {
//   //   const comonentName = path.replace(/^\.\.vue$/,'$1')
//   //   components[comonentName] = markRaw(mod.default)
//   //   console.log(comonentName,'comonentName',mod.default)
//   // })
//   // console.log(path.lastIndexOf('/') + 1, path.lastIndexOf('.vue'))
//   console.log(path)
//   let reg = new RegExp(`/(.*).`)
//   let name = path.match()
//   console.log(name)
//   components[name] = modules[path].default
// }
keys.forEach(path => {
  let reg = new RegExp(`/(.*).`)
  let name = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.vue'))
  components[name] = modules[path]
})
export default {
  components:{...components}
}