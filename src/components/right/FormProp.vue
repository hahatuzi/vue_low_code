<template>
  <div class="container">
    <div class="title">表单属性</div>
    <div class="content">
      <el-form label-width="70">
        <el-form-item label="姓名">
          <el-radio-group v-model="config.name">
            <el-radio :value="true">显示</el-radio>
            <el-radio :value="false">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-radio-group v-model="config.phone">
            <el-radio :value="true">显示</el-radio>
            <el-radio :value="false">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="验证码">
          <el-radio-group v-model="config.code">
            <el-radio :value="true">显示</el-radio>
            <el-radio :value="false">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="上边距">
          <el-input-number v-model="config.style.paddingTop" :min="0"/>
        </el-form-item>
        <el-form-item label="右边距">
          <el-input-number v-model="config.style.paddingRight" :min="0"/>
        </el-form-item>
        <el-form-item label="下边距">
          <el-input-number v-model="config.style.paddingBottom" :min="0"/>
        </el-form-item>
        <el-form-item label="左边距">
          <el-input-number v-model="config.style.paddingLeft" :min="0"/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="FormProp">
import {watch} from 'vue'
const props = defineProps({
  config:{
    type:Object,
    default:{}
  }
})
watch(() => props.config, (val) => {
  console.log(val)
})
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
