<template>
  <div class="edit_container">
    <div v-for="item in menuConfig" :key="item.label" class="item" :draggable="true" @dragstart="dragStart(item)">
      <div class="icon">
        <el-icon  size="20">
          <component :is="item.icon" />
        </el-icon>
      </div>
      <div>{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup name="EditorLeft">
import { ref,inject, onMounted } from 'vue';
import menuConfig from '../../../../config/menu.js'
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
.edit_container{
  width: 100%;
  // height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item{
    width: 60px;
    height: 60px;
    margin: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    border-radius: 8px;
    box-shadow: 0 0 8px #ccc;
    cursor: pointer;
  }
  .item:hover{
    transform: scale(1.1);
    transition:  0.2s ease-out;
  }
}
</style>
