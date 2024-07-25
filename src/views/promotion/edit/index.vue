<template>
  <div class="container">
    <!-- 左侧物料区 -->
    <div class="left">
      <EditorLeft :middleDrop="renderMiddle"></EditorLeft>
    </div>
    <!-- 编排区 -->
    <div class="middle" ref="containerRef">
      <!-- 功能区 -->
      <div class="middle_top">
        <el-button link>保存</el-button>
        <el-button link>预览</el-button>
      </div>
      <div class="middle_edit">

      </div>
      <!-- <div v-for="item in middleComp" :key="item.key" v-bind="item">{{ config.componentMap[item.key].render() }}</div> -->
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup >
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import EditorLeft from './comp/EditorLeft.vue'
import { ref, provide } from 'vue';
// import {registerConfig as config} from '../../utils/editorConfig.jsx'

// console.log(router)
// console.log(config)
// provide('config',config)
// const containerRef = ref(null)
// const currentComponent = ref(null)
// const middleComp = ref([])

// function dragenter (e){
//   // console.log('enter',e)
//   e.dataTransfer.dropEffect = 'move'
// }
// function dragover (e){
//   // console.log('dragover',e)
//   e.preventDefault()
// }
// function dragleave (e){
//   // console.log('dragleave',e)
//   e.dataTransfer.dropEffect = 'none'
// }
// function drop (e){
//   console.log('drop',e)
//   // currentComponent = null
//   middleComp.value = [...middleComp.value, {
//     top:e.offsetY,
//     left:e.offsetX,
//     zIndex:1,
//     key:currentComponent.value.key
//   }]
//   console.log(middleComp)
// }
// function renderMiddle (comp) {
//   console.log(config.componentMap);
//   currentComponent.value = comp

//   containerRef.value.addEventListener('dragenter',dragenter)
//   containerRef.value.addEventListener('dragover',dragover)
//   containerRef.value.addEventListener('dragleave',dragleave)
//   containerRef.value.addEventListener('drop',drop) //松手的时候
// }
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  .left,.right{
    width: 180px;
    border: 1px solid #ccc;
  }
  .middle{
    flex:1;
    border: 1px solid #ccc;
    background: #f0f2f5;
    position: relative;
    .middle_top{
      background: #fff;
      position: absolute;
      top: 0;
    }
    .middle_edit{
      background: #fff;
      width: 375px;
      height: 550px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
