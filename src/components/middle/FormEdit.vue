<template>
  <div>
    <div  :style="style">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入姓名"/>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.phone"  placeholder="请输入手机号码"/>
        </el-form-item>
        <el-form-item label="验证码" >
          <div class="item_container">
            <el-input v-model="form.code"  placeholder="请输入验证码"/>
            <el-button type="primary">获取验证码</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="margin: 0 auto;">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="FormEdit">
import {ref,reactive, watch,computed, inject} from 'vue'

const props = defineProps({
  config:{
    type:Object,
    default:{}
  }, // 组件列表
})

const style = computed(() => {
  if(!props.config) return {}
  let {paddingTop, paddingRight, paddingBottom, paddingLeft} = props.config.style
  return {
    ...props.config.style,
    "padding": `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
  }
})

watch(() => props.config, (val) => {
  console.log(val)
})

let form = reactive({
  name:'',
  phone:'',
  code:""
})
</script>

<style lang="scss" scoped>
.item_container{
  display: flex;
}
</style>
