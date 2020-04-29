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
      name: this.$t('menu.attendanceTicket'), // 考勤单据
      path: 'attendanceTicket',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'attendanceApproval',
      name: this.$t('menu.attendanceApproval'), // 考勤审批
      path: 'attendanceApproval',
      subMenus: []
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-sitemap',
    key: 'organization',
    name: "项目部分", // 组织结构
    path: 'organization',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'deptment',
      name: this.$t('menu.deptment'), // 部门管理
      path: 'deptment'
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'employee',
      name: this.$t('menu.employee'), // 员工管理
      path: 'employee'
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'position',
      name: this.$t('menu.position'), // 岗位管理
      path: 'position'
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-money',
    key: 'finance',
    name: "其他", // 财务管理
    path: 'finance',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-money',
      key: 'finance',
      name: this.$t('menu.finance'), // 薪酬清单
      path: 'finance',
      subMenus: []
    }]
  }];
};
