<template>
  <div class="panel">
    <div class="step">
      <div class="item_active">
        <div class="index">1</div>
        <div class="content">检验卡信息</div>
      </div>
      <div class="arrow">
        <div class="arrow_top_active"></div>
        <div class="arrow_bottom_active"></div>
      </div>
      <div class="item">
        <div class="index">2</div>
        <div class="content">输入手机号码</div>
      </div>
      <div class="arrow">
        <div class="arrow_top"></div>
        <div class="arrow_bottom"></div>
      </div>
      <div class="item">
        <div class="index">3</div>
        <div class="content">签约绑定</div>
      </div>
      <div class="arrow">
        <div class="arrow_top"></div>
        <div class="arrow_bottom"></div>
      </div>
      <div class="item">
        <div class="index">4</div>
        <div class="content">进入业务办理</div>
      </div>
      <div class="arrow">
        <div class="arrow_top"></div>
        <div class="arrow_bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ColumnHover from "./ColumnHover";
export default {
  name: 'Overview',
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {
  },
  components: {
    ColumnHover
  }
};
</script>
<style scoped>
.panel {
  margin: 30px;
}
.step {
  width: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.item {
  height: 100px;
  background: cyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item_active {
  height: 100px;
  background: cornflowerblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.index {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
.content {
  margin: 10px;
  text-align: center;
}
.arrow {
  height: 45px;
  position: relative;
}
.arrow_top {
  position: relative;
  border-top: cyan 40px solid;
  border-left: transparent 50px solid;
  border-right: transparent 50px solid;
}
.arrow_top_active {
  position: relative;
  border-top: cornflowerblue 40px solid;
  border-left: transparent 50px solid;
  border-right: transparent 50px solid;
}
.arrow_bottom {
  border-top: transparent 40px solid;
  border-left: cyan 50px solid;
  border-right: cyan 50px solid;
  position: relative;
  top: -35px;
}
.arrow_bottom_last {
  border-top: transparent 40px solid;
  border-left: cyan 50px solid;
  border-right: cyan 50px solid;
  position: relative;
  top: -35px;
}
.arrow_bottom_active {
  border-top: transparent 40px solid;
  border-left: cyan 50px solid;
  border-right: cyan 50px solid;
  position: relative;
  top: -35px;
}
.active {
  background: royalblue;
}
</style>
