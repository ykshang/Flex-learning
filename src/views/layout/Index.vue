<template>
  <div>
    <el-container>
      <el-header height="60px">
        <Header></Header>
      </el-header>
      <el-container style="position: absolute; top: 60px; width: 100%; height: auto; bottom: 0px; left: 0px">
        <el-aside width="auto" style="border: 1px solid #e6e6e6">
          <menus></menus>
        </el-aside>
        <el-container>
          <el-main>
            <Main></Main>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menus from './menus/Menus';
import Header from './headers/Header';
import Main from './main/Main';
export default {
  name: 'Index',
  data () {
    return {
    };
  },
  methods: {
  },
  components: {
    Menus,
    Header,
    Main
  }
};
</script>

<style scoped>
  .el-aside {
    color: #333;
    background-color: #f2f6fc
  }
  .el-main {
    background-color: #F5F7FA;
    padding: 10px;
  }
  .el-header {
    background-color: #3385ff;
    color: #333;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    height: 60px;
  }
</style>
