<template>
  <div :id="'comp' + index" :style="style">{{ props.config.content }}</div>
</template>

<script setup name="TextEdit">
import {ref,reactive, watch,computed, inject} from 'vue'

const props = defineProps({
  index:"",
  config:{
    type:Object,
    default:{}
  }, // 组件列表
})

const style = computed(() => {
  if(!props.config) return {}
  let { fontSize} = props.config.style
  return {
    ...props.config.style,
    "font-size": fontSize + 'px',
  }
})

watch(() => props.config, (val) => {
  console.log(val)
})

</script>

<style lang="scss" scoped>
</style>
