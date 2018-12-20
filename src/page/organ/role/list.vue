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
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

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
                "label": "一级分类",
                "pId": "1",
                "children": [
                    {
                        "id": "HR1812131224110",
                        "label": "第四个模板"
                    },
                    {
                        "id": "3",
                        "label": "二级分类",
                        "pId": "2",
                        "children": [
                            {
                                "id": "HR1812131224109",
                                "label": "第四个模板",
                                "pId": "3",
                                "children": [
                                    {
                                        "id": "HR1812131224108",
                                        "label": "第四个模板"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "HR1812131224111",
        "label": "第四个模板"
    },
    {
        "id": "HR2812131224111",
        "label": "第四个模板"
    },
    {
        "id": "HR3812131224111",
        "label": "第四个模板"
    },
    {
        "id": "HR4812131224111",
        "label": "第四个模板"
    },
    {
        "id": "HR5812131224111",
        "label": "第四个模板"
    }
]
,
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>