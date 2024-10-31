<template>
  <div class="container">
    <div class="title">图片属性</div>
    <!-- <el-card> -->
      <div class="content">
      <el-form label-width="70">
        <el-form-item label="是否全屏">
          <el-radio-group v-model="config.style.isFullWidth">
            <el-radio :value="true">是</el-radio>
            <el-radio :value="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="对齐方式" v-if="!config.style.isFullWidth">
          <el-radio-group v-model="config.style.margin">
            <el-radio value="0 auto 0 0">居左</el-radio>
            <el-radio value="0 auto">居中</el-radio>
            <el-radio value="0 0 0 auto">居右</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="图片宽度" v-if="!config.style.isFullWidth">
          <el-input-number v-model="config.style.width"/>
        </el-form-item>
        <el-form-item label="图片高度">
          <el-input-number v-model="config.style.height"/>
        </el-form-item>
      </el-form>
    </div>
    <!-- </el-card> -->
  </div>
</template>

<script setup name="ImgProp">

const props = defineProps({
  config:{
    type:Object,
    default:{}
  }
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
