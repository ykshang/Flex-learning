<template>
<div class="layout">
  <h2>flex-direction 设置主轴方向和默认的元素排列方向（即起始线和终止线的位置）</h2>
  <h1>可选值：</h1>
  <vue-markdown v-highlight>{{msg1}}</vue-markdown>
  <ul>
    <li>row（默认值）：主轴为水平方向，起点在左端。</li>
    <li>row-reverse：主轴为水平方向，起点在右端。</li>
    <li>column：主轴为垂直方向，起点在上沿。</li>
    <li>column-reverse：主轴为垂直方向，起点在下沿。</li>
  </ul>
  <h1>示意图：</h1>
  <img :src="flexDirection" width="2000" height="1000">
  <el-divider></el-divider>
  <h2>flex-wrap 允许换行</h2>
  <h1>可选值：</h1>
  <vue-markdown v-highlight>{{msg2}}</vue-markdown>
  <p>默认情况下，项目都沿着主轴方向排列。flex-wrap属性定义，如果一条轴线排不下，如何换行。它可能有三个取值：</p>
  <ul>
    <li>nowrap（默认）：不换行，如果超宽则溢出</li>
    <br/>
    <img :src="nowrap" width="2000" height="1000">
    <br/>
    <li>wrap：超宽允许换行，由上往下，由左往右换行</li>
    <br/>
    <img :src="wrap" width="2000" height="1000">
    <li>wrap-reverse：超宽允许逆序换行，由下往上，由左往右换行</li>
    <br/>
    <img :src="wrapReverse" width="2000" height="1000">
  </ul>
  <h2>justify-content属性定义了项目在主轴上的对齐方式。</h2>
  <h1>可选值：</h1>
  <vue-markdown v-highlight>{{msg3}}</vue-markdown>
  <ul>
    <li>flex-start（默认值）：起始线对齐（可以当作左对齐理解）</li>
    <li>flex-end：终止线对齐</li>
    <li>center： 居中</li>
    <li>space-between：两端对齐，项目之间的间隔都相等。</li>
    <li>space-around：每个弹性子元素两侧分配相等的空间。所以，子元素之间的间隔比项目与边框的间隔大一倍。</li>
    <li>space-evenly：在主轴上平均分配间隔，等效于所有的子元素设置margin：auto</li>
  </ul>
  <div style="display: flex; flex-wrap: wrap;">
    <div style="margin: 0 10px">
      <h1>flex-start</h1>
      <div class="container" style="height:50px; justify-content: flex-start;">
        <div class="item" >111111</div>
        <div class="item">1111111</div>
        <div class="item">1111111111</div>
        <div class="item">111111</div>
        <div class="item">1111111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>flex-end</h1>
      <div class="container" style="height:50px; justify-content: flex-end;">
        <div class="item" >1111111111</div>
        <div class="item">1111111111</div>
        <div class="item">111111</div>
        <div class="item">1111111111</div>
        <div class="item">1111111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>center</h1>
      <div class="container" style="height:50px; justify-content: center;">
        <div class="item" >1111111111</div>
        <div class="item">1111111111</div>
        <div class="item">1111111111</div>
        <div class="item">1111111111</div>
        <div class="item">1111111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>space-between</h1>
      <div class="container" style="height:50px; justify-content: space-between;">
        <div class="item" >1111111</div>
        <div class="item">1111111111</div>
        <div class="item">1111</div>
        <div class="item">1111111111</div>
        <div class="item">111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>space-around</h1>
      <div class="container" style="height:50px; justify-content: space-around;">
        <div class="item" >1111</div>
        <div class="item">11111</div>
        <div class="item">11111</div>
        <div class="item">1111</div>
        <div class="item">111111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>space-evenly</h1>
      <div class="container" style="height:50px; justify-content: space-evenly;">
        <div class="item" >11111111</div>
        <div class="item">11111111</div>
        <div class="item">111</div>
        <div class="item">11111</div>
        <div class="item">1111</div>
      </div>
    </div>
  </div>
  <h2>align-items:属性定义了项目在交叉轴上的对齐方式</h2>
  <h1>可选值：</h1>
  <vue-markdown v-highlight>{{msg4}}</vue-markdown>
  <ul>
    <li>flex-start：交叉轴的起点对齐。</li>
    <li>flex-end：交叉轴的终点对齐。</li>
    <li>center：交叉轴的中点对齐。</li>
    <li>baseline: 项目的第一行文字的基线对齐。</li>
    <li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。设置了高度的元素，不生效</li>
  </ul>
  <div style="display: flex; flex-wrap: wrap;">
    <div style="margin: 0 10px">
      <h1>flex-start</h1>
      <div class="container" style="height: 100px; align-items: flex-start">
        <div class="item" style="height: 40px">11111</div>
        <div class="item" style="height: 50px">11111</div>
        <div class="item" style="height: 80px">11111</div>
        <div class="item" style="height: 40px;">11111</div>
        <div class="item" style="height: 30px">11111</div>
        <div class="item" style="height: 90px">11111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>flex-end</h1>
      <div class="container" style="height: 100px; align-items: flex-end">
        <div class="item" style="height: 40px">11111</div>
        <div class="item" style="height: 50px">11111</div>
        <div class="item" style="height: 80px">11111</div>
        <div class="item" style="height: 40px;">11111</div>
        <div class="item" style="height: 30px">11111</div>
        <div class="item" style="height: 90px">11111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>center</h1>
      <div class="container" style="height: 100px; align-items: center">
        <div class="item" style="height: 40px">11111</div>
        <div class="item" style="height: 50px">11111</div>
        <div class="item" style="height: 80px">11111</div>
        <div class="item" style="height: 40px;">11111</div>
        <div class="item" style="height: 30px">11111</div>
        <div class="item" style="height: 90px">11111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>baseline</h1>
      <div class="container" style="height: 100px; align-items: baseline">
        <div class="item" style="height: 40px">11111</div>
        <div class="item" style="height: 50px">11111</div>
        <div class="item" style="height: 80px">11111</div>
        <div class="item" style="height: 40px;">11111</div>
        <div class="item" style="height: 30px">11111</div>
        <div class="item" style="height: 90px">11111</div>
      </div>
    </div>
    <div style="margin: 0 10px">
      <h1>stretch</h1>
      <div class="container" style="height: 100px; align-items: stretch">
        <div class="item">11111</div>
        <div class="item">11111</div>
        <div class="item">11111</div>
        <div class="item">11111</div>
        <div class="item">11111</div>
        <div class="item" style="height: 60px">11111</div>
      </div>
    </div>
  </div>
  <h2>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式</h2>
  <h1>默认值为row nowrap。</h1>
  <vue-markdown v-highlight>{{msg5}}</vue-markdown>
  <h2>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</h2>
  <h1>可选值：</h1>
  <vue-markdown v-highlight>{{msg6}}</vue-markdown>
  <ul>
    <li>flex-start：与交叉轴的起点对齐。</li>
    <li>flex-end：与交叉轴的终点对齐。</li>
    <li>center：与交叉轴的中点对齐。</li>
    <li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
    <li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li>
    <li>stretch（默认值）：轴线占满整个交叉轴。</li>
  </ul>
  <img :src="alignContent" width="2000"  height="1000">
  <div style="height:400px"></div>
</div>
</template>

<script>
// 导入组件 及 组件样式
import VueMarkdown from 'vue-markdown';

import flexDirection from "@/assets/img/flex-direction.png";
import nowrap from "@/assets/img/nowrap.png";
import wrap from "@/assets/img/wrap.png";
import wrapReverse from "@/assets/img/wrap-reverse.png";
import alignContent from "@/assets/img/align-content.png";

export default {
  name: 'Init',
  data () {
    return {
      msg1: "```css\n flex-direction: row || row-reverse || column || column-reverse; \n```",
      msg2: "```css\n flex-wrap: nowrap | wrap | wrap-reverse \n```",
      msg3: "```css\n  justify-content: flex-start | flex-end | center | space-between | space-around; \n```",
      msg4: "```css\n  align-items: flex-start | flex-end | center | baseline | stretch \n```",
      msg5: "```css\n  flex-flow: row nowrap; \n```",
      msg6: "```css\n  align-content: flex-start | flex-end | center | space-between | space-around | stretch; \n```",
      flexDirection,
      nowrap,
      wrap,
      wrapReverse,
      alignContent
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
  background: cyan;
}
.container {
  width: 500px;
  display: flex;
  border: 1px dashed red;
  background: yellow;
}
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
