// 菜单列表
module.exports = function () {
  return [{
    flag: true,
    icon: 'el-icon-fa fa-thumb-tack',
    key: 'Overview',
    name: "Flex简介",
    path: 'Overview',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-tags',
    key: 'Introduction',
    name: "Flex相关概念",
    path: 'Introduction',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-folder-o',
    key: 'Container',
    name: "容器部分",
    path: 'Container',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-sitemap',
    key: 'Item',
    name: "项目部分",
    path: 'Item',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-bars',
    key: 'Other',
    name: "影响flex布局的一些因素",
    path: 'Other',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-spinner fa-spin',
      key: 'Init',
      name: "初始化",
      path: 'Init',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-arrows-alt',
      key: 'Content',
      name: "css属性min/max-content",
      path: 'Content',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-arrows',
      key: 'Direction',
      name: "css属性direction",
      path: 'Direction',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-object-group',
      key: 'Margin',
      name: "css属性Margin",
      path: 'Margin',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-arrows-h',
      key: 'MinWidth',
      name: "css属性min-width",
      path: 'MinWidth',
      subMenus: []
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-file-powerpoint-o',
    key: 'Demo',
    name: "一个具体的应用例子",
    path: 'Demo',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-file-powerpoint-o',
    key: 'Demo1',
    name: "表格hover组件",
    path: 'Demo1',
    subMenus: []
  // }, {
  //   flag: true,
  //   icon: 'el-icon-fa fa-file-powerpoint-o',
  //   key: 'Demo2',
  //   name: "案例步骤条",
  //   path: 'Demo2',
  //   subMenus: []
  }];
};
