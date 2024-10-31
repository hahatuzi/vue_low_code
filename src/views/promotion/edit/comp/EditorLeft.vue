<template>
  <div class="edit_container">
    <div v-for="item in menuList" :key="item.label" class="item" :draggable="true" @dragstart="dragStart(item)">
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
import { toRaw, defineEmits } from 'vue';
import $bus from '@/utils/mitt'

import menuList from '../../../../config/menu.js'
import menuConfig from '../../../../config/props.js'

const emit = defineEmits(['addComp'])

// 拖动左侧表单项
function dragStart (component,e) {
  // 组件添加配置属性
  component.config = menuConfig[component.key]
  $bus.emit('changeComp',toRaw(component))
}

</script>

<style lang="scss" scoped>
.edit_container{
  width: 180px;
  // height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
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
