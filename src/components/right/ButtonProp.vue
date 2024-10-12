<template>
  <div class="container">
    <div class="title">按钮属性</div>
    <!-- <el-card> -->
      <div class="content">
      <el-form label-width="70">
        <el-form-item label="按钮文字">
          <el-input v-model="config.content" />
        </el-form-item>
        <el-form-item label="字号">
          <el-input-number v-model="config.style.fontSize" :min="12"/>
        </el-form-item>
        <el-form-item label="对齐方式">
          <el-radio-group v-model="config.style.align">
            <el-radio value="left">居左</el-radio>
            <el-radio value="center">居中</el-radio>
            <el-radio value="right">居右</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文字颜色">
          <el-color-picker v-model="config.style.color" />
        </el-form-item>
        <el-form-item label="背景颜色">
          <el-color-picker v-model="config.style.backgroundColor" />
        </el-form-item>
      </el-form>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script setup name="ButtonProp">
import {reactive, watch,computed} from 'vue'
import { useEditStore } from "@/store/modules/edit";

const props = defineProps({
  config:{
    type:Object,
    default:{}
  }
})

function sumbit () {
  console.log(config)
  editStore.updateComp(editStore.currentComp, currentIndex)
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
}
.title{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  background: rgba(64, 158, 255, .18);
}
.content{
  padding: 12px 10px 0;

}
:deep(.el-form-item){
  margin-bottom: 12px;
}
:deep(.el-form-item__label){
  font-weight: bold;
}
</style>
