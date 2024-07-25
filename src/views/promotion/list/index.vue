<template>
  <div class="list_container">
    <el-button  type="primary" size="small">新增活动页</el-button>
    <el-table :data="tableData" style="width: 800px;">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="state" label="状态" />
      <el-table-column prop="link" label="链接" width="300"/>
      <el-table-column label="操作" >
        <template #default>
          <el-button plain type="primary" size="small" @click="handleClick">详情</el-button>
          <el-button  type="primary" size="small" @click="handle">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup >
import { useRouter } from 'vue-router';
const router = useRouter()

const tableData = [
{name:'活动页1',state:'使用中',link:'https://www.activity.com/act01'},
{name:'活动页2',state:'禁用',link:'https://www.activity.com/act02'},
]
const handleClick = () => {
  console.log('click')
}
function handle () {
  router.push({path:'/promotion/edit'})
}
</script>

<style lang="scss" scoped>
.list_container{
  width: 100%;
  height: 100%;
  padding: 20px;
}

</style>
