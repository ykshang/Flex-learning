<template>
<div class="layout">
  <h2>position</h2>
  <p>position为absolute和fixed的元素会导致元素脱离文档流，影响flex布局，不会作为弹性子元素的存在，但是可以设置在容器上进行布局</p>
  <p>position为arelative的元素不会导致元素脱离文档流，但也影响flex布局</p>
  <vue-markdown v-highlight>{{msg1}}</vue-markdown>
  <div class="container flex" style="position: absolute">
    <div class="item">11111111111111111111111 11111111111111111111</div>
    <div class="item">11111111111111111111111 11111111111111111111</div>
    <div class="item" style="position: absolute; top:40px; left:100px">11111111111111111111111 11111111111111111111</div>
    <div class="item">1111111111111111111111111111111 11111111111111111111</div>
  </div>
</div>
</template>
<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Position',
  data () {
    return {
      msg1: '```html\n' +
      '<div class="container flex" style="position: absolute"\n' +
      '    <div class="item">111111111111111111111111111111111111</div>\n' +
      '    <div class="item">11111111111111111111111 11111111111111111111</div>\n' +
      '    <div class="item" style="position: absolute; top:40px; left:100px">11111111111111111111111 11111111111111111111</div>\n' +
      '    <div class="item">1111111111111111111111111111111 11111111111111111111</div>\n' +
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
