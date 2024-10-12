<template>
  <div>
    <el-button type="primary" :style="{...props.config.style,fontSize:handlePX(props.config.style.fontSize)}">按钮</el-button>
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
watch(() => props.config, (val) => {
  console.log(val)
})
</script>

<style lang="scss" scoped>
</style>
