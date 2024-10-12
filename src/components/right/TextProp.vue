<template>
  <div class="container" >
    <div class="title">文本属性</div>
    <!-- <el-card> -->
    <div class="content">
      <el-form label-width="70">
        <el-form-item label="文本内容">
          <el-input v-model="config.content" />
        </el-form-item>
        <el-form-item label="字号">
          <el-input-number v-model="config.style.fontSize" :min="12"/>
          <!-- <el-input-number v-model="config.style.fontSize" :min="12" @change="changeFontSize"/> -->
        </el-form-item>
        <el-form-item label="对齐方式">
          <el-radio-group v-model="config.style.textAlign">
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
    <div class="btn">
      <el-button type="primary" class="submit" @click="sumbit">修改</el-button>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script setup name="TextProp">
import { ElMessage } from 'element-plus'

const props = defineProps({
  config:{
    type:Object,
    default:{}
  }
})

function sumbit () {
  ElMessage({
    message: '保存成功',
    type: 'success',
  })
  editStore.updateComp(comp, currentIndex)
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  position: relative;
}
.title{
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  background: rgba(64, 158, 255, .18);
}
.btn{
  position: absolute;
  bottom: 0;
  left: 50%;
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
