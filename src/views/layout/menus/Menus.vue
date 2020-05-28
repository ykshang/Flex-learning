<template>
<div style="position:'relative';">
  <div class="menuHeader">
      <span v-if="!!!isCollapse">{{$t("menu.navigationMenu")}}</span>
      <el-button v-if="isCollapse" icon="fa fa-th fa-lg" type="text" @click="changeCollapse"></el-button>
      <el-button v-else icon="fa fa-outdent fa-lg"  type="text" style="float: right;" @click="changeCollapse"></el-button>
  </div>
  <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="onSelect" background-color="#f2f6fc">
    <template v-for="menu in menuList">
        <el-submenu :index="menu.key" :key="menu.key" v-if="menu.flag && menu.subMenus && menu.subMenus.length != 0">
            <template slot="title" v-if="menu.subMenus">
              <i :class="menu.icon"></i>
              <span>{{menu.name}}</span>
            </template>
            <el-menu-item v-for="subMenu in menu.subMenus" :key="subMenu.key" :index="subMenu.key">
              <template slot="title" v-if="subMenu.flag">
                <i :class="[subMenu.icon]"></i>
                <span>{{subMenu.name}}</span>
              </template>
            </el-menu-item>
        </el-submenu>
        <el-menu-item :index="menu.key" :key="menu.key" v-if="menu.flag && (!menu.subMenus || menu.subMenus.length === 0)">
          <i :class="menu.icon"></i>
          <span>{{menu.name}}</span>
        </el-menu-item>
    </template>
  </el-menu>
</div>
</template>

<script>
import Vue from 'vue';
import menuList from './menuList';
export default {
  name: 'Menus',
  data () {
    return {
      isCollapse: false,
      menuList: menuList.bind(this)()
    };
  },
  mounted () {
    //  this.$i18n.locale === 'zh_CN' ? this.language = 0 : this.language = 1;// 数据加载时判断当前属于哪种语言，为其单选按钮赋值
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse;
    },
    onSelect (key, keyPath) {
      let fullPath = "/Index/" + keyPath.join('/');
      console.log("当前菜单项的路由为：", fullPath);
      this.$emit("menuChanged", key, fullPath);
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.menuHeader {
  text-align: center;
  padding:9px;
  line-height: 40px;
  border-bottom: 1px solid #e6e6e6;
  color: #303133;
  transition: .3s;
  -webkit-transition: .3s;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
</style>
