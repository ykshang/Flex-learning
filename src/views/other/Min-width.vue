<template>
<div class="layout">
  <h1>在一个flex布局中，对于一个设置了flex属性设置为1的div容器，再对其设置min-width：0，保证内容不超出外层容器</h1>
  <vue-markdown v-highlight>{{msg1}}</vue-markdown>
  <div class="container">
    <div class="item">111111111111111111111111111111111111</div>
    <div class="item">11111111111111111 11111111111111111111111111111111111111 1111111111111 111111111111111111111111111111111111111111111111111</div>
    <div class="item">11 11111111111111111111111111111</div>
    <div class="item">111 111111111111111111111111111</div>
    <div class="item">1111111111111111 111111111111111111111</div>
  </div>
  <h1>给第二个元素添加min-width: 0</h1>
  <div class="container">
    <div class="item">111111111111111111111111111111111111</div>
    <div class="item" style="min-width: 0">11111111111111111 11111111111111111111111111111111111111 1111111111111 111111111111111111111111111111111111111111111111111</div>
    <div class="item">11 11111111111111111111111111111</div>
    <div class="item">111 111111111111111111111111111</div>
    <div class="item">1111111111111111 111111111111111111111</div>
  </div>
  <h1>给第二个元素添加overflow: hidden,效果类似min-width，但是多余的部分被遮挡了</h1>
  <div class="container">
    <div class="item">111111111111111111111111111111111111</div>
    <div class="item" style="overflow: hidden">11111111111111111 11111111111111111111111111111111111111 1111111111111 111111111111111111111111111111111111111111111111111</div>
    <div class="item" style="">11 11111111111111111111111111111</div>
    <div class="item">111 111111111111111111111111111</div>
    <div class="item">1111111111111111 111111111111111111111</div>
  </div>
</div>
</template>
<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Min-width',
  data () {
    return {
      msg1: '```html\n' +
      '<div class="container">\n' +
      '    <div class="item">111111111111111111111111111111111111</div>\n' +
      '    <div class="item">11111111111111111 11111111111111111111111111111111111111 1111111111111 111111111111111111111111111111111111111111111111111</div>\n' +
      '    <div class="item">11 11111111111111111111111111111</div>\n' +
      '    <div class="item">111 111111111111111111111111111</div>\n' +
      '    <div class="item">1111111111111111 111111111111111111111</div>\n' +
      '</div>\n' +
      '```'
    };
  },
  mounted () {
  },
  methods: {
  },
  components: {
    VueMarkdown
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
.layout {
  margin: 20px;
}
.layout >>> pre code {
  font-size: 17px;
  font-weight: 600;
  font-family: auto;
}
</style>
