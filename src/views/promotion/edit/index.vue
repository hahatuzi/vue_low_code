<template>
  <div class="container">
    <!-- 左侧物料区 -->
      <EditorLeft></EditorLeft>
    <!-- 编排区 -->
     <EditorMiddle></EditorMiddle>
     <!-- 配置面板 -->
    <EditorRight></EditorRight>
  </div>
</template>

<script setup >
import EditorLeft from './comp/EditorLeft.vue'
import EditorMiddle from './comp/EditorMiddle.vue'
import EditorRight from './comp/EditorRight.vue'

</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

}
</style>
