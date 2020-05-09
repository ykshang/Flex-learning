<template>
<div style="margin:20px; width:1200px">
  <h1>在一个flex布局中，对于一个设置了flex属性设置为1的div容器，再对其设置min-width：0，保证内容不超出外层容器</h1>
  <div class="container">
    <div class="item">1111111111111111111111111111111111111111111111111</div>
    <div class="item" style="min-width:0">1111111111 11111111 1111111111 111111111111111 11111111111111111111 111111111111111 11111111111111111 1111111111111111 111111111111111111111111111111111111111111111111111111111111</div>
    <div class="item">11111111111111111111</div>
    <div class="item">11111 11111111111111111</div>
    <div class="item">1111111111111111 111111111111111111111</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Min-width',
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {
  }
};
</script>
<style scoped>
.item {
  border: 1px dashed;
  height: 150px;
}
.container {
  display: flex;
  border: 1px dashed red;
  background: yellow;
  width: 100%;
}
</style>
