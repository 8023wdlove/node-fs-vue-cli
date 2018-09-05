<template>
        <el-menu
            v-if="menus"
            :default-active="curmenu"
            class="el-menu-vertical-demo"
            @select="handleSelect"
            router
            unique-opened
            >
            <el-submenu v-for='item in menus' :index="item.id+''" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span v-text="item.menuName"></span>
              </template>
                <el-menu-item v-if ="item.childern" v-for="child in item.childern" :index="child.id+''" :route="{path:child.menuUrl}" v-text='child.menuName' :key="child.menuUrl" ></el-menu-item>
            </el-submenu>
        </el-menu>
</template>
<script>
import menus from '@/router/menulist'
export default {
  data () {
    return {
      menus,
      curmenu: ''

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.curmenu = key
    }
  }
}
</script>
<style>

</style>
