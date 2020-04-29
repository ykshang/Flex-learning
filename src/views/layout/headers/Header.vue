<template>
<div>
  <div class="logo">
    <el-image class="logoStyle" :src="logoSrc" :fit="'contain'">
    </el-image>
  </div>
  <div class="dropdList">
    <el-dropdown trigger="click" @command="handleCommand" @visible-change="handleShowDropList">
      <span class="el-dropdown-link">
        {{$t("base.setting")}}
        <i v-if="dropListIconFlag" class="fa fa-angle-up"></i>
        <i v-else class="fa fa-angle-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item v-for="item in operationDropList" :key="item.path" :command="item" :icon="item.icon">{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <div class="avatar">
    <el-avatar :src="avatarSrc"></el-avatar>
  </div>
</div>
</template>

<script>
import logo from '../../../assets/img/logo.png';
export default {
  name: 'Header',
  data () {
    return {
      logoSrc: logo,
      avatarSrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      dropListIconFlag: false,
      operationDropList: [{
        icon: "fa fa-user",
        name: this.$t('base.profile'), // 个人信息
        path: "1"
      }, {
        icon: "fa fa-refresh",
        name: this.$t('base.changeAvatar'), // 更换头像
        path: "2"
      }, {
        icon: "fa fa-cog",
        name: this.$t('base.settingCenter'), // 设置中心
        path: "3"
      }, {
        icon: "fa fa-power-off",
        name: this.$t('base.signOut'), // 退出登录
        path: "4"
      }]
    };
  },
  mounted () {
  },
  methods: {
    /**
     * 当菜单展开/隐藏时触发，展开为true，隐藏为false
     */
    handleShowDropList (showFlag) {
      this.dropListIconFlag = showFlag;
    },
    handleCommand (command) {
      let path = command;
      this.$message('click on item ' + path.name);
    }
  }
};
</script>
<style scoped>
.logo {
  margin: 15px 0px;
  float: left;
  height: 30px;
  width: 168px;
}
.avatar {
  float: right;
  margin: 8px 20px;
}
.dropdList {
  float: right;
  margin: 18px 15px 18px 0px;
  font-weight: 600;
}
.el-dropdown-link {
  cursor: pointer;
  color: #EEEEEE;
  font-size: 16px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu .el-popper {
  width: 200px;
}
</style>
