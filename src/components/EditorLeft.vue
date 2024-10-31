<template>
  <div class="container">
    <div v-for="item in menuList" :key="item.label" class="item" :draggable="true" @dragstart="dragStart(item)">
      <div class="icon">
        <el-icon  size="14" :style="{color:'red'}">
          <component :is="item.icon" />
        </el-icon>
      </div>
      <span>{{ item.label }}</span>
      <!-- <span>{{ item.key }}</span> -->
    </div>
  </div>
</template>

<script setup name="EditorLeft">
import { ref,inject, onMounted } from 'vue';
import menuList from '../config/menu.js'
const config = inject('config')
const props = defineProps({
  middleDrop:{
    type:Function,
    default:() => {}
  }
})
console.log(config)

function dragStart (component,e) {
  console.log(e,component)
  // e.dataTransfer.dropEffect = 'move'
  // console.log(contaienrRef.value)
  props.middleDrop(component)
}
onMounted(() => {
  // contaienrRef.value.addEventListener('drop', drop)
})
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 90px;
    height: 90px;
    border: 1px solid #ccc;
  }
}
</style>
