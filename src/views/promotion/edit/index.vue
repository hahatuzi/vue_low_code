<template>
  <div class="container">
    <!-- 左侧物料区 -->
      <EditorLeft></EditorLeft>
    <!-- 编排区 -->
     <EditorMiddle v-model:list="componentList" v-model:index="currentIndex"></EditorMiddle>
     <!-- 配置面板 -->
    <EditorRight v-model:list="componentList" v-model:index="currentIndex"></EditorRight>
  </div>
</template>

<script setup >
import {provide, ref, } from 'vue'
import EditorLeft from './comp/EditorLeft.vue'
import EditorMiddle from './comp/EditorMiddle.vue'
import EditorRight from './comp/EditorRight.vue'
import $bus from '@/utils/mitt'

let componentList = ref([]) // 组件列表
let currentIndex = ref('') // 当前组件对应的索引位置

provide('componentList',componentList)
provide('currentIndex',currentIndex)

// 改变某索引处的属性
$bus.on('changeConfig', e => {
  componentList.value[currentIndex.value].config = e
})

</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

}
</style>
