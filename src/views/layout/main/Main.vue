<template>
<div>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="router_view_des">
  </div>
  <div>
    <router-view />
  </div>
</div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      isCollapse: true
    };
  },
  mounted () {
  },
  methods: {
  }
};
</script>
<style scoped>
.breadcrumb {
  width: auto;
  margin: 10px 0px 15px 0px;
}
.router_view_des {
  width: auto;
  background-color: #e4ebf1;
  min-height: 40px;
}
</style>
