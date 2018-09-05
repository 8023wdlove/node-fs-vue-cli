var menulist = [{
  'id': 1,
  'menuName': '组织资料',
  'menuUrl': '/organ',
  'childern': [
    {
      'id': 11,
      'menuName': '角色资料',
      'menuUrl': '/organ/role'
    },
    {
      'id': 12,
      'menuName': '仓库资料',
      'menuUrl': '/organ/store'
    },
    {
      'id': 13,
      'menuName': '商品资料',
      'menuUrl': '/organ/itemInfo'
    }
  ]}, {
  'id': 2,
  'menuName': '商品信息',
  'menuUrl': '/storeInfo',
  'childern': [
    {
      'id': 21,
      'menuName': '价格信息',
      'menuUrl': '/storeInfo/price'
    },
    {
      'id': 22,
      'menuName': '产地信息',
      'menuUrl': '/storeInfo/product'
    },
    {
      'id': 23,
      'menuName': '质量信息',
      'menuUrl': '/storeInfo/quanlity'
    }
  ]}
]
module.exports = menulist
