<template>
<<<<<<< HEAD
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

=======
    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2">
    </el-tree>
</template>

>>>>>>> 17b534d51365b2438c87c322ce9c741fd10e0a84
<script>
  export default {
    data() {
      return {
<<<<<<< HEAD
        tableData5: []
      }
    },
    created (){
      this.$axios.get('/apis/a.html').then(data=>{
        this.tableData5 = data.data;
      })
    }
  }
=======
        filterText: '',
        data2: [
        {
            "id": "1",
            "label": "顶级分类",
            "pId": "0",
            "children": [
                {
                    "id": "2",
                    "label": "毛线"
                },
                {
                    "id": "4",
                    "label": "粗线"
                },
                {
                    "id": "2",
                    "label": "次级分类",
                    "pId": "1",
                    "children": [
                        {
                            "id": "1",
                            "label": "电线"
                        }
                    ]
                },
                {
                    "id": "3",
                    "label": "次级分类",
                    "pId": "1",
                    "children": [
                        {
                            "id": "3",
                            "label": "细线"
                        }
                    ]
                }
            ]
        },
        {
            "id": "4",
            "label": "顶级分类",
            "pId": "0"
        }
    ]
,
        defaultProps: {
          children: 'children',
          label: 'label'
        //         function(data,node){
        //       console.log(data,node)
        //       if(data.pId ||data.pId === 0){
        //           return data.label
        //       }else{
        //           node.visible = false;
        //       }
        //   }
        }
      };
    },
    mounted () {
        this.$refs.tree2.filter('val');
    },
    methods: {
        filterNode (value, data ,ff) {
            // return false
            console.log(value, data, ff,88888)
            if(data.pId || data.pId ==='0'){
                return true
            }
        },
        aa (data,node){
            console.log(data,node)
        }
    }
  };
>>>>>>> 17b534d51365b2438c87c322ce9c741fd10e0a84
</script>