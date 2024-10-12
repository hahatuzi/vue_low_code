
import {defineStore} from 'pinia'
import {ref, reactive} from 'vue'

export const useEditStore = defineStore("edit", () => {

  let currentIndex = ref(0) // 当前组件对应的索引位置
  // let currentComp = ref({}) // 当前组件
  let componentList = ref([]) // 编辑区域组件列表

  // 新增元素
  function addComp (comp){
    let index = componentList.value.length
    componentList.value.push(comp)
    console.log(index)
    // componentList.value = [...componentList.value, comp]
    setCurrentComp(index)
  }
  // 上移元素
  function upComp (comp,index) {
    componentList.value.splice(index,1)
    componentList.value.splice(index -1 , 0, comp)
  }
  // 下移元素
  function downComp (comp,index) {
    componentList.value.splice(index,1)
    componentList.value.splice(index + 1 , 0, comp)
  }
  // 删除元素
  function deleteComp (index) {
    componentList.value.splice(index , 1)
  }

  // 更新指定位置的元素
  function updateComp (comp, index) {
    componentList.value[index] = comp
    console.log(componentList.value[index])
  }
  // 切换当前元素的索引
  function setCurrentComp (index) {
    // function setCurrentComp (comp,index) {
    console.log(index,currentIndex.value)
    // currentComp.value = componentList.value[index]
    // currentComp.value = comp
    currentIndex.value = index
    console.log(index,currentIndex.value)
  }

  return {
    currentIndex,
    // currentComp,
    componentList,
    addComp,
    upComp,
    downComp,
    deleteComp,
    setCurrentComp,
    updateComp
  };
});

// 非setup
// export function useEditStoreHook() {
//   return useEditStore(store);
// }
