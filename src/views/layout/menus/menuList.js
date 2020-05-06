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
    key: 'Other',
    name: "其他",
    path: 'Other',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-money',
      key: 'Init',
      name: "初始化",
      path: 'Init',
      subMenus: []
    }]
  }];
};
