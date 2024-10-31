<template>
  <el-dialog>
    <div class="container">
      <div v-for="(item,index) in componentList" :key="item.index">
        <div>
          <component  :index="index"  :is="configComponents[item.middleComp]" :config="item.config"></component>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts" name="Preview">
import configComponents from '@/components/middle/index.js'
import {ref, inject, watch } from 'vue'

const componentList = inject('componentList')

watch(() => componentList, (val) => {
  console.log(val)
})
</script>

<style lang="scss" scoped>
.container{
  width: 325px;
  height: 525px;
  border-radius: 12px;
  margin: 0 auto;
  padding: 20px 12px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
}
</style>
