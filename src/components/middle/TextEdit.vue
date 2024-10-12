<template>
  <div :id="'comp' + index" :style="{...props.config.style,fontSize:handlePX(props.config.style.fontSize)}">{{ props.config.content }}</div>
</template>

<script setup name="TextEdit">
import { storeToRefs } from 'pinia';
import { useEditStore } from "@/store/modules/edit";
import {ref,reactive, watch,computed, inject} from 'vue'

const props = defineProps({
  index:"",
  config:{
    type:Object,
    default:{}
  }, // 组件列表
})

// const componentList = inject('componentList')
// const currentIndex = inject('currentIndex')

// const editStore = useEditStore()
// console.log(editStore)
// const {currentIndex,componentList} = storeToRefs(editStore)
// const currentIndex = editStore.currentIndex
// const comp = computed( () => componentList[currentIndex])
// const {config} = editStore.comp

function handlePX (val) {
  return val + 'px'
}
watch(() => props.config, (val) => {
  console.log(val)
})
// watch(() => editStore.componentList,(val) => {
//   console.log(val)
// })
</script>

<style lang="scss" scoped>
</style>
