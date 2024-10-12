<template>
  <div class="right">
    <div v-for="(item,index) in props.list" :key="item.index">
      <component v-if="index == props.index" :is="configComponents[item.rightComp]" v-model:config="item.config"></component>
    </div>
  </div>
</template>

<script setup name="EditorRight">
import configComponents from '@/components/right/index.js'
import { ref,watch, } from 'vue';

const emit = defineEmits(['update:list', 'update:index'])
const props = defineProps({
  list:{
    type:Array,
    default:[]
  }, // 组件列表
  index:'', // 当前组件索引
})

</script>

<style lang="scss" scoped>
.right{
  width: 320px;
  padding: 10px;
}
</style>
