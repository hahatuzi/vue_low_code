<template>
  <div class="middle">
     <!-- 页面功能区 -->
     <div class="middle_top">
        <el-button link>保存</el-button>
        <el-button link>预览</el-button>
      </div>
      <div class="middle_edit" ref="containerEdit">
        <div v-for="item in middleComp" :key="item.key">
          {{ item.middleComp }}
          <component :is="configComponents[item.middleComp]"></component>
          <!--文本控件-->
          <!-- <TextEdit v-if="comp.type === 'text'" :component="comp"></TextEdit> -->
          <!--图片控件-->
          <!-- <ImgEdit v-if="comp.type === 'img'" :component="comp"></ImgEdit> -->
          <!--表单控件-->
          <!-- <FormEdit v-if="comp.type === 'form'" :component="comp"></FormEdit> -->
        </div>
      <!-- <div v-for="item in middleComp" :key="item.key" v-bind="item">{{ config.componentMap[item.key].render() }}</div> -->
      </div>
  </div>
</template>

<script setup lang="ts" name="EditorMiddle">
import $bus from '@/utils/mitt'
import { ref, provide, onMounted } from 'vue';
import configComponents from '@/components/middle/index.js'
console.log(configComponents)
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
    key:currentComponent.value.key,
    middleComp: e.middleComp
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
      height: 550px;
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
    }
  }
</style>
