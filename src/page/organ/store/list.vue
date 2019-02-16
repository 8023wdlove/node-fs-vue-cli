
<template>
  <div>
    <span>我是仓库资料列表</span>
    <div>
       <editor class="editor" :value="content"  :setting="editorSetting" @input="(content)=> content = content"></editor>
      <!-- <input type="text" v-focus='11111' v-if='show'>
      <button @click = "jump2" >输入框消失</button>
      <button @click = "jump ('/organ/store/info/666')" >列表详情</button> -->
    </div>
  </div>
</template>
<script>

import editor from '@/components/common/editor'
export default {
  data () {
    return {
      show:true,
      content:'我是富文本编辑器的内容',
      editorSetting:{
          height:400,
      }
    }
  },
  components:{
      'editor':editor
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
