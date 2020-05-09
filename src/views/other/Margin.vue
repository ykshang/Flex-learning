<template>
<div style="margin:20px; width:1200px">
  <h1>在第一个和第三个元素上加margin: auto</h1>
  <div class="container">
    <div class="item" style="margin:auto">1111111111</div>
    <div class="item">1111111111</div>
    <div class="item" style="margin:auto">11111111111111111111</div>
    <div class="item">1111111111</div>
    <div class="item">11111111111111111111</div>
  </div>
  <h1>在第一、二、三个元素上加margin: auto</h1>
  <div class="container">
    <div class="item" style="margin:auto">1111111111</div>
    <div class="item" style="margin:auto">1111111111</div>
    <div class="item" style="margin:auto">11111111111111111111</div>
    <div class="item">1111111111</div>
    <div class="item">11111111111111111111</div>
  </div>
  <h1>在第一个和第三个元素上加margin-left: auto</h1>
  <div class="container">
    <div class="item" style="margin-left:auto">1111111111</div>
    <div class="item">1111111111</div>
    <div class="item" style="margin-left:auto">11111111111111111111</div>
    <div class="item">1111111111</div>
    <div class="item">11111111111111111111</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Margin',
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
  background: cyan;
  height: 50px;
}
.container {
  display: flex;
  border: 1px dashed red;
  background: yellow;
  width: 100%;
}
</style>
