<template>
  <div class="middle">
     <!-- 页面功能区 -->
     <div class="middle_top">
        <el-button link>保存</el-button>
        <el-button link>预览</el-button>
      </div>
      <div class="middle_edit" ref="containerEdit">
        <div v-for="(item,index) in compList" :key="item.key" :class="['comp',{ 'cur_comp':currentComponent.middleComp == item.middleComp }]" @click="handleComp(item)">
          <component :is="configComponents[item.middleComp]"></component>
          <!-- 功能区:上移，下移，删除 -->
          <div class="tools" v-if="currentComponent.middleComp == item.middleComp">
            <div :class="['item',{'disabled_item':index == 0}]" @click="upComp(item,index)"><el-icon size="20"><CaretTop /></el-icon></div>
            <div :class="['item',{'disabled_item':index == compList.length - 1}]" @click="downComp(item,index)"><el-icon size="20"><CaretBottom /></el-icon></div>
            <div class="item" @click="deleteComp(index)"><el-icon size="16"><DeleteFilled /></el-icon></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts" name="EditorMiddle">
import $bus from '@/utils/mitt'
import { ref, provide, onMounted } from 'vue';
import configComponents from '@/components/middle/index.js'
const containerEdit = ref(null)
// console.log(router)
// console.log(config)
// provide('config',config)
// const containerRef = ref(null)
const currentComponent = ref(null)
const compList = ref([])

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
  compList.value = [...compList.value, {
    top:e.offsetY,
    left:e.offsetX,
    zIndex:1,
    key:currentComponent.value.key,
    middleComp: currentComponent.value.middleComp
  }]
  // console.log(middleComp)
}
// 上移元素
function upComp (comp,index) {
  compList.value.splice(index,1)
  compList.value.splice(index -1 , 0, comp)
}
// 下移元素
function downComp (comp,index) {
  compList.value.splice(index,1)
  compList.value.splice(index + 1 , 0, comp)
}
// 删除元素
function deleteComp (index) {
   compList.value.splice(index , 1)
}
function renderMiddle (comp) {
  currentComponent.value = comp

  containerEdit.value.addEventListener('dragenter',dragenter)
  containerEdit.value.addEventListener('dragover',dragover)
  containerEdit.value.addEventListener('dragleave',dragleave)
  containerEdit.value.addEventListener('drop',drop) //松手的时候
}
// 点击组件
function handleComp(comp) {
  currentComponent.value = comp
}
onMounted(() => {
  $bus.on('changeComp', e => renderMiddle(e))
})
</script>

<style lang="scss" scoped>
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
      // background-image: linear-gradient(#fff 2px,transparent 0),linear-gradient(90deg,#999 1px,transparent 0);
      width: 375px;
      height: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // .grid {
  // background-color: #fff;
  // background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
  //   linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
  // background-position: 0 0, 25px 25px;
  // background-size: 2px 2px;
// }
.comp{
  cursor: pointer;
  border:  1px solid transparent;
  position: relative;
  .tools{
    position: absolute;
    right: -38px;
    top: 0;
    // width: 28px;
    // height: 100px;
    text-align: center;
    border-radius: 5px;
    .item{
      width: 28px;
      height: 28px;
      background: #fff;
    // border-bottom: 1px solid #ccc;
      margin-bottom: 2px;
      color: #666;
    }
    .disabled_item{
      color: #e4e4e4;
    }
  }
}
.cur_comp{
  border:  1px solid #2aa7ff;
}
    }
  }
</style>
