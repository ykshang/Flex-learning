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
    name: "其他",
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
      icon: 'el-icon-fa fa-spinner fa-spin',
      key: 'Content',
      name: "css属性min-content",
      path: 'Content',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-spinner fa-spin',
      key: 'Direction',
      name: "css属性direction",
      path: 'Direction',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-spinner fa-spin',
      key: 'Margin',
      name: "css属性Margin",
      path: 'Margin',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-spinner fa-spin',
      key: 'MinWidth',
      name: "MinWidth",
      path: 'MinWidth',
      subMenus: []
    }]
  }];
};
