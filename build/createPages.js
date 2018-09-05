let route = require('./babelRouter.js')
// let route = require('../src/router/index.js')
let router = route.default.routers
let fs = require('fs')
let num = 0
let filenum = 0
for (let key in router) { // 循环创建文件夹
  // num = num + 1
  if (typeof router[key] !== 'string') {
    let mkdirOutPath = './src/page/' + key // 最外层文件夹路径
    try { // 创建文件夹
      num = num + 1
      fs.mkdirSync(mkdirOutPath)
    } catch (err) {
    //    console.log('\x1B[31m',i+"文件夹创建失败");
      num = num - 1
    }
    for (let item in router[key]) {
      let mkdirInPath = './src/page/' + key + '/' + item // 文件夹路径
      // mkdirs(mkdirInPath)
      try { // 创建文件夹
        num = num + 1
        fs.mkdirSync(mkdirInPath)
      } catch (err) {
        //    console.log('\x1B[31m',i+"文件夹创建失败");
        num = num - 1
      }
    }
  } else {
    let mkdirOutPath = './src/page/' + key // 最外层文件夹路径
    try { // 创建文件夹
      num = num + 1
      fs.mkdirSync(mkdirOutPath)
    } catch (err) {
    //    console.log('\x1B[31m',i+"文件夹创建失败");
      num = num - 1
    }
  }
}
for (let key in router) { // 写入文件
  if (typeof router[key] !== 'string') {
    for (let item in router[key]) {
      let listvue = './src/page/' + key + '/' + item + '/list.vue' // 建立*/list.vue 路径
      let infovue = './src/page/' + key + '/' + item + '/info.vue' // 建立*/info.vue 路径
      let islistvue = fs.existsSync(listvue) // 判断*/list.vue存不存在
      let isinfovue = fs.existsSync(infovue) // 判断*/info.vue存不存在
      let list = `
<template>
  <div>
    <span>我是${router[key][item]}列表</span>
    <div>
      <button @click = "jump ('/${key}/${item}/info/666')" >列表详情</button>
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
`
      let info = `
<template>
  <div>我是${router[key][item]}编辑模板</div>
</template>
`
      if (!islistvue) {
        fs.appendFileSync(listvue, list)
        filenum = filenum + 1
      } else {
      //        console.error('\x1B[31m',j+"文件夹list.vue创建失败");
      }
      if (!isinfovue) {
        fs.appendFileSync(infovue, info)
        filenum = filenum + 1
      } else {
      //        console.log('\x1B[31m',item+"文件夹info.vue创建失败");
      }
    }
  } else {
    let listvue = './src/page/' + key + '/list.vue' // 建立*/list.vue 路径
    let infovue = './src/page/' + key + '/info.vue' // 建立*/info.vue 路径
    let islistvue = fs.existsSync(listvue) //  判断*/list.vue存不存在
    let isinfovue = fs.existsSync(infovue) //  判断*/info.vue存不存在
    let list = `
    <template>
      <div>
        <span>我是${router[key]}列表</span>
        <div>
          <button @click = "jump ('/${key}/info/666')" >列表详情</button>
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
    `
    let info = `
    <template>
      <div>我是${router[key]}编辑模板</div>
    </template>
    `
    if (!islistvue) {
      fs.appendFileSync(listvue, list)
      filenum = filenum + 1
    } else {
    //        console.error('\x1B[31m',j+"文件夹list.vue创建失败");
    }
    if (!isinfovue) {
      fs.appendFileSync(infovue, info)
      filenum = filenum + 1
    } else {
    //        console.log('\x1B[31m',item+"文件夹info.vue创建失败");
    }
  }
}
console.log('\x1B[33m%s\x1b[0m:', '共创建' + num + '个文件夹,' + filenum + '个文件')
