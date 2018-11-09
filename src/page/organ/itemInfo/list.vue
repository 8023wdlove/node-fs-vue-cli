<template>
  <div>
    <span>我是商品资料列表</span>
    <div>
       <el-input v-model="input" placeholder="请输入内容"></el-input>
       <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="item,index in data" :label="item.id" :key="item.id">{{item.name + '' +item.tel}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  data () {
    return {
      data: [{id: 1, name: '王一', tel: 123131}, {id: 2, name: '网二', tel: 123131}, {id: 3, name: '网伞', tel: 123131}, {id: 4, name: '哈哈', tel: 123131}, {id: 5, name: '呵呵', tel: 123131}],
      checkList: [],
      input: ''
    }
  },
  watch: {
    input (val, old) {
      this.checkList = []
      if (val) {
        let arr = []
        arr = this.data.filter((item, index) => {
          return item.name.indexOf(val) !== -1 || (item.tel + '').indexOf(val) !== -1
        })
        arr.forEach((item, index, datas) => {
          this.checkList.push(item.id)
        })
      }
    }
  }
}
</script>
<style lang="less">
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color:black;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background: greenyellow;
    border-color:greenyellow;
  }
</style>
