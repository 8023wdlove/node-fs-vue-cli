<template>
  <div id="app">
    <el-container>
      <el-header class='Header'>
        <Vheader/>
      </el-header>
      <el-container>
        <el-aside width="200px" class='Aside'>
           <Vmenu/>
        </el-aside>
        <el-container>
          <el-main class='Main'>
            <router-view></router-view>
          </el-main>
          <el-footer class='Footer'>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vmenu from '@common/menu/menu.vue'
import Vheader from '@common/header/header.vue'
export default {
  name: 'App',
  components: {
    Vmenu,
    Vheader
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // .Header{
  //   background:green;
  // }
  // .Aside{
  //   background:gold;
  // }
  .Main{
    background:burlywood;
  }
  .Footer{
    background:cyan;
  }
}
</style>
