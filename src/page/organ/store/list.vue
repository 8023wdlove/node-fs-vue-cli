
<template>
  <div>
    <span>我是仓库资料列表</span>
    <div>
      <input type="text" v-focus='11111' v-if='show'>
      <button @click = "jump2" >输入框消失</button>
      <button @click = "jump ('/organ/store/info/666')" >列表详情</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show:true
    }
  },
  methods: {
    jump2 () {
      this.show=!this.show;
    },
    jump (data) {
      this.$router.push({
        path: data
      })
    }
  }
}
</script>
