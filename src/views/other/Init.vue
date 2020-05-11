<template>
<div style="margin:20px; width:1200px">
  <h2>初始化</h2>
  <p>当一个元素被设置为flex容器时，那么容器内他的所有子元素具备以下行为；</p>
  <ul>
    <li>元素排列为一行 (容器的flex-direction 属性的初始值是 row)。</li>
    <li>元素从主轴的起始线开始（容器的justify-content，初始值为flex-start）。</li>
    <li>元素不会在主维度方向拉伸，但是可以缩小（元素的flex-grow默认为0）。</li>
    <li>元素被拉伸来填充交叉轴大小（容器的align-items，默认值为stretch）。</li>
    <li>flex-basis 初始值为 auto，如果元素本身上设置了主轴方向上的宽度，那么flex-basis的值默认取那个宽度，如果单独设置了flex-basis，那么元素本身在主轴上的宽度不再起作用。</li>
    <li>flex-wrap 属性为 nowrap。</li>
  </ul>
  <p>这会让你的元素呈线形排列，并且把自己的大小作为在主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。元素会沿交叉轴被拉伸来填满它的大小。</p>
  <el-divider></el-divider>
  <div class="container">
    <div class="item">111111111111111111111111111111111111</div>
    <div class="item">111111111111111111111111111111111</div>
    <div class="item">11111111111111111111111111111</div>
    <div class="item">11111111111111111111111111</div>
    <div class="item">111111111111111111111</div>
  </div>
  <el-divider></el-divider>
    <div class="container">
    <div class="item">111111111111111111111111111111111111</div>
    <div class="item">11111111111111111 111111111111111111111111111111111</div>
    <div class="item">11111111111111111111111111111</div>
    <div class="item">11111111111111111111111111</div>
    <div class="item">111111111111111111111</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Init',
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
  width: 1200px;
}
</style>
