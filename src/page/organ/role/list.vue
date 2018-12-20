<template>
    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2">
    </el-tree>
</template>

<script>
  export default {
    data() {
      return {
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
</script>