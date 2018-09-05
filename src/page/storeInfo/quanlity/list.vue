
<template>
  <div>
    <span>我是质量信息列表</span>
    <div>
      <button @click = "jump ('/storeInfo/quanlity/info/666')" >列表详情</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jump (data) {
      this.$router.push({
        path: data
      })
    }
  }
}
</script>
