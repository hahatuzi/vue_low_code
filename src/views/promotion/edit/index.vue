<template>
  <div class="container">
    <!-- 左侧物料区 -->
    <div class="left">
      <EditorLeft :middleDrop="renderMiddle"></EditorLeft>
    </div>
    <!-- 编排区 -->
     <EditorMiddle></EditorMiddle>
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
import EditorMiddle from './comp/EditorMiddle.vue'

import { ref, provide } from 'vue';
// import {registerConfig as config} from '../../utils/editorConfig.jsx'
const containerEdit = ref(null)
// console.log(router)
// console.log(config)
// provide('config',config)
// const containerRef = ref(null)
const currentComponent = ref(null)
const middleComp = ref([])

function dragenter (e){
  // console.log('enter',e)
  e.dataTransfer.dropEffect = 'move'
}
function dragover (e){
  // console.log('dragover',e)
  e.preventDefault()
}
function dragleave (e){
  // console.log('dragleave',e)
  e.dataTransfer.dropEffect = 'none'
}
function drop (e){
  console.log('drop',e)
  // currentComponent = null
  middleComp.value = [...middleComp.value, {
    top:e.offsetY,
    left:e.offsetX,
    zIndex:1,
    key:currentComponent.value.key
  }]
  // console.log(middleComp)
}
function renderMiddle (comp) {
  console.log(comp);
  currentComponent.value = comp

  containerEdit.value.addEventListener('dragenter',dragenter)
  containerEdit.value.addEventListener('dragover',dragover)
  containerEdit.value.addEventListener('dragleave',dragleave)
  containerEdit.value.addEventListener('drop',drop) //松手的时候
}
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
  .left{
    border-right: 0px;
  }
  .right{
    border-left: 0px;
  }
//   .middle{
//     flex:1;
//     border: 1px solid #ccc;
//     background: #f0f2f5;
//     position: relative;
//     .middle_top{
//       background: #fff;
//       position: absolute;
//       top: 0;
//     }
//     .middle_edit{
//       background: #fff;
//       // background-image: linear-gradient(#fff 2px,transparent 0),linear-gradient(90deg,#999 1px,transparent 0);
//       width: 375px;
//       height: 550px;
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       // .grid {
//   // background-color: #fff;
//   // background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
//   //   linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
//   // background-position: 0 0, 25px 25px;
//   // background-size: 2px 2px;
// // }
//     }
//   }
}
</style>
