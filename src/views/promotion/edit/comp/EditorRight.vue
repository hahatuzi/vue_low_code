<template>
  <div class="right">
    <component :is="configComponents[currentComponent.key]"></component>
  </div>
</template>

<script setup name="EditorRight">
import configComponents from '@/components/right/index.js'
import { ref, provide, onMounted } from 'vue';
import $bus from '@/utils/mitt'

let currentComponent = ref('')
console.log(configComponents)
function renderRight (comp) {
  currentComponent.value = comp
  console.log(comp)
}

onMounted(() => {
  $bus.on('changeComp', e => renderRight(e))
})
</script>

<style lang="scss" scoped>
.right{
  width: 320px;
  padding: 10px;
}
</style>
