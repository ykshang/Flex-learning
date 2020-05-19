<template>
<div class="layout">
  <h2>主要名词概念</h2>
  <h1>示意图:</h1>
  <!-- 响应式图片 -->
  <img :src="imgPath" width="2000" height="1000">
  <h1>主轴(Main Axis)</h1>
  <p>flex-direction 可以设置主轴以及元素排列方向，它有以下四个取值：</p>
  <vue-markdown v-highlight>{{msg}}</vue-markdown>
  <p>示意图:</p>
  <img :src="flexDirection" width="2000" height="1000">
  <h1>交叉轴(Cross Axis)</h1>
  <p>垂直于主轴的轴线是交叉轴。</p>
  <h1>起始线和终止线</h1>
  <p>主轴的开始位置（与边框的交叉点）叫做<b>main start</b>，结束位置叫做<b>main end</b>；交叉轴的开始位置叫做<b>cross start</b>，结束位置叫做<b>cross end</b>。如果是阿拉伯语，他的书写方式是按照从右向左的方式来写的，这时候起始线和终止线会交换，通过head标签设置浏览器的语言来通知浏览器。浏览器会自动切换的。</p>
  <h1>容器和项目</h1>
  <p>采用 Flex 布局的元素，称为 Flex 容器（<b>flex container</b>），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（<b>flex item</b>），简称"项目"或者“元素”。设置了flex属性后，会让项目的float，clear，vertical-align属性失效，不会导致脱离文档流。</p>
  <h1>flex和inline-flex的区别</h1>
  <ul>
    <li>flex相当于是块级元素，相当于div 独占一行</li>
    <li>inline-flex相当于内联元素，相当于span，一行有很多个弹性盒子容器。</li>
  </ul>
  <h1>正/负自由空间</h1>
  <ul>
    <li>正向自由空间：指的是所有的弹性元素在主轴上未能占满弹性容器的全部宽度，这时候多余的空间叫做正向自由空间</li>
    <li>负向自由空间：指的是所有的弹性元素在主轴上平铺，弹性容器的全部宽度不足以全部容纳，这时候不足的空间叫做负向自由空间</li>
  </ul>
  <div style="height:400px"></div>
</div>
</template>

<script>
// 导入组件 及 组件样式
import imgPath from "@/assets/img/demo.png";
import flexDirection from "@/assets/img/flex-direction.png";
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Introduction',
  data () {
    return {
      imgPath,
      flexDirection,
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
.layout {
  margin:20px;
  width:1200px;
}
.layout >>> pre code {
  font-size: 17px;
  font-weight: 600;
  font-family: auto;
}
</style>
