<template>
  <div>
    <div :style="style">{{ config.content }}</div>
  </div>
</template>

<script setup  name="ButtonEdit">
import {ref,reactive, watch,computed, defineProps} from 'vue'

const props = defineProps({
  index:"",
  config:{
    type:Object,
    default:{}
  }, // 组件列表
})

function handlePX (val) {
  return val + 'px'
}

const style = computed(() => {
  if(!props.config) return {}
  let {isFullWidth, width, height, borderRadius, fontSize} = props.config.style
  return {
    ...props.config.style,
    "width": isFullWidth ? '100%' : width + 'px',
    "height": height + 'px',
    "line-height": height + 'px',
    "border-radius": borderRadius + 'px',
    "font-size": fontSize + 'px',
  }
})

watch(() => props.config, (val) => {
  console.log(val)
})
</script>

<style lang="scss" scoped>
</style>
