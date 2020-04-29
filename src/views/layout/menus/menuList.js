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
    key: 'task',
    name: "Flex相关概念",
    path: 'task',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-calendar',
    key: 'vacation',
    name: "容器部分",
    path: 'vacation',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'attendanceTicket',
      name: "demo1",
      path: 'attendanceTicket',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'attendanceApproval',
      name: "demo2",
      path: 'attendanceApproval',
      subMenus: []
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-sitemap',
    key: 'organization',
    name: "项目部分",
    path: 'organization',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'deptment',
      name: "demo1",
      path: 'deptment'
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'employee',
      name: "demo2",
      path: 'employee'
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'position',
      name: "demo3",
      path: 'position'
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-money',
    key: 'finance',
    name: "其他",
    path: 'finance',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-money',
      key: 'finance',
      name: "min-width",
      path: 'finance',
      subMenus: []
    }]
  }];
};
