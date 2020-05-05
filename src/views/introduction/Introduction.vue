<template>
<div style="margin:20px; width:1200px">
  <h2>主要名词概念</h2>
  <h1>示意图:</h1>
  <!-- 响应式图片 -->
  <img :src="imgPath" width="2000" height="1000">
  <h1>主轴(Main Axis)</h1>
  <p>flex-direction 可以设置主轴以及元素排列方向</p>
  <vue-markdown v-highlight>{{msg}}</vue-markdown>
</div>
</template>

<script>
// 导入组件 及 组件样式
import imgPath from "@/assets/img/demo.png";
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Introduction',
  data () {
    return {
      imgPath,
      msg: "```css\n flex-direction: row ||  row-reverse || column || column-reverse; \n```"
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
img {
    max-width: 70%;
    height: auto;
}
</style>
