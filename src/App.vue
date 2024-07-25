<template>
  <div class="container">
    <div class="menu">
      <el-scrollbar height="100%">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="/home" @click="handleMenu">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/promotion/list"  @click="handleMenu">
            <el-icon><setting /></el-icon>
            <span>推广列表页</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const handleMenu = (e) => {
  console.log(e)
  router.push({path:e.index})
}

</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  .left,.right{
    width: 200px;
  }
  .middle{
    flex:1;
    border: 1px solid #ccc;
  }
}
.menu{
  width: 200px;
  height: 100%;
  font-size: 14px;
}
.content{
  flex: 1;
}
svg{
  width: 100%;
}
:deep(.el-scrollbar__view){
    height: 100%;
}
.el-menu{
  height: 100%;
}
</style>
