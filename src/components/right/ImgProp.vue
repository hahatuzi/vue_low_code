<template>
  <div>
    <div class="title">图片属性</div>
    <div class="content">
      <!-- <el-form label-width="70">
        <el-form-item label="对齐方式">
          <el-radio-group v-model="comp.config.style.textAlign">
            <el-radio value="left">居左</el-radio>
            <el-radio value="center">居中</el-radio>
            <el-radio value="right">居右</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form> -->
    </div>
  </div>
</template>

<script setup>
import {reactive, watch,computed} from 'vue'
import { useEditStore } from "@/store/modules/edit";
import { storeToRefs } from "pinia";

const editStore = useEditStore()
const {currentIndex, componentList} = storeToRefs(editStore)
watch(() => currentIndex, (val) => {
  console.log(val, componentList)
})

</script>

<style lang="scss" scoped>
</style>
