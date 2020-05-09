<template>
<div class="layout">
  <h2>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0</h2>
  <vue-markdown v-highlight>{{msg1}}</vue-markdown>
  <div class="container" style="height: 50px">
    <div class="item flex1" style="order: 1">1</div>
    <div class="item flex1" style="order: 2">2</div>
    <div class="item flex1" style="order: 1">1</div>
    <div class="item flex1" style="order: 2">2</div>
    <div class="item flex1" style="order: 3">3</div>
    <div class="item flex1" style="order: 0">0</div>
    <div class="item flex1" >无</div>
    <div class="item flex1" style="order: 1">1</div>
  </div>
  <br/>
  <div class="container" style="flex-direction: column; height: 200px; width: 150px">
    <div class="item flex1" style="order: 1">1</div>
    <div class="item flex1" style="order: 2">2</div>
    <div class="item flex1" style="order: 1">1</div>
    <div class="item flex1" style="order: 2">2</div>
    <div class="item flex1" style="order: 3">3</div>
    <div class="item flex1" style="order: 1">1</div>
  </div>
  <h2>flex-grow属性定义项目在主轴上的的放大比例，默认为0，即如果存在剩余空间，也不放大。</h2>
  <p>flex-grow 若被赋值为一个正整数， flex 元素会以 flex-basis 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。如果我们给上例中的所有元素设定 flex-grow 值为1， 容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。flex-grow 属性可以按比例分配剩余空间。在分配空间的时候，如果第一个元素 flex-grow 值为2， 其他元素值为1，则第一个元素将占有2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有1/4（各50px）。</p>
  <vue-markdown v-highlight>{{msg2}}</vue-markdown>
  <div class="container" style="height: 50px">
    <div class="item">11111</div>
    <div class="item" style="flex-grow: 0">11111</div>
    <div class="item" style="flex-grow: 1">11111</div>
    <div class="item" style="flex-grow: 2">11111</div>
    <div class="item" style="flex-grow: 3">11111</div>
  </div>
  <h2>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</h2>
  <p>flex-grow属性是处理flex元素在主轴上增加空间的问题，相反flex-shrink属性是处理flex元素收缩的问题。如果我们的容器中没有足够排列flex元素的空间，那么可以把flex元素flex-shrink属性设置为正整数来缩小它所占空间到flex-basis以下。与flex-grow属性一样，可以赋予不同的值来控制flex元素收缩的程度 —— 给flex-shrink属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。在计算flex元素收缩的大小时，它的最小尺寸也会被考虑进去，就是说实际上flex-shrink属性可能会和flex-grow属性表现的不一致。</p>
  <vue-markdown v-highlight>{{msg3}}</vue-markdown>
  <div class="container" style="height: 50px">
    <div class="item" style="flex-shrink: 0; width: 300px">11111</div>
    <div class="item" style="width: 300px">11111</div>
    <div class="item" style="flex-shrink: 1; width: 300px">11111</div>
    <div class="item" style="flex-shrink: 2; width: 300px">11111</div>
    <div class="item" style="flex-shrink: 3; width: 300px">11111</div>
  </div>
  <h2>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。</h2>
  <p>浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。如果元素设置主轴方向的宽度，那么flex-basis会默认使用这个值，它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。flex-basis 属性在任何空间分配发生之前初始化flex子元素的尺寸. 此属性的初始值为 auto. 如果 flex-basis 设置为 auto , 浏览器会先检查flex子元素的主尺寸是否设置了绝对值再计算出flex子元素的初始值. 比如说你已经给你的flex子元素设置了200px 的宽，则200px 就是这个flex子元素的 flex-basis.</p>
  <vue-markdown v-highlight>{{msg4}}</vue-markdown>
  <div class="container" style="height: 50px">
    <div class="item">11111</div>
    <div class="item" style="flex-basis: auto">11111</div>
    <div class="item" style="flex-basis: 100px">11111</div>
    <div class="item" style="flex-basis: 200px">11111</div>
    <div class="item" style="flex-basis: 300px">11111</div>
  </div>
  <h2>flex  属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</h2>
  <ul>
    <li>flex: initial 是把flex元素重置为Flexbox的初始值，它相当于 flex: 0 1 auto。在这里 flex-grow 的值为0，所以flex元素不会超过它们 flex-basis 的尺寸。flex-shrink 的值为1, 所以可以缩小flex元素来防止它们溢出。flex-basis 的值为 auto. Flex元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的。</li>
    <li>flex: auto 等同于 flex: 1 1 auto；和上面的 flex:initial 基本相同，但是这种情况下，flex元素在需要的时候既可以拉伸也可以收缩。</li>
    <li>flex: none 可以把flex元素设置为不可伸缩。它和设置为 flex: 0 0 auto 是一样的。元素既不能拉伸或者收缩，但是元素会按具有 flex-basis: auto 属性的flexbox进行布局。</li>
    <li>你在教程中常看到的 flex: 1 或者 flex: 2 等等。它相当于flex: 1 1 0。元素可以在flex-basis为0的基础上伸缩</li>
  </ul>
  <h2>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。</h2>
  <vue-markdown v-highlight>{{msg5}}</vue-markdown>
  <div class="container" style="height: 200px; align-slef: flex-start">
    <div class="item" style="height: 40px">11111</div>
    <div class="item" style="height: 50px">11111</div>
    <div class="item" style="height: 110px">11111</div>
    <div class="item" style="height: 80px; align-self:flex-end">11111</div>
    <div class="item" style="height: 30px">11111</div>
    <div class="item" style="height: 170px">11111</div>
  </div>
  <ul>
    <li>默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</li>
    <li>flex-start：与交叉轴的起点对齐。</li>
    <li>flex-end：与交叉轴的终点对齐。</li>
    <li>center：与交叉轴的中点对齐。</li>
    <li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
    <li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li>
    <li>stretch：轴线占满整个交叉轴。</li>
  </ul>
  <div style="height:400px"></div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'item',
  data () {
    return {
      msg1: '```html\n<div>\n  <div style="order: 1">1</div>\n  <div style="order: 2">2</div>\n  <div style="order: 1">1</div>\n  <div style="order: 2">2</div>\n  <div style="order: 3">3</div>\n  <div style="order: 0">0</div>\n  <div>无</div>\n  <div style="order: 1">1</div>\n</div>\n  ```',
      msg2: '```html\n<div class="container" style="height: 50px">\n  <div>11111</div>\n  <div style="flex-grow: 0">11111</div>\n  <div style="flex-grow: 1">11111</div>\n  <div style="flex-grow: 2">11111</div>\n  <div style="flex-grow: 3">11111</div>\n</div>\n```',
      msg3: '```html\n<div class="container" style="height: 50px">\n  <div style="flex-shrink: 0; width: 300px">11111</div>\n  <div style="width: 300px">11111</div>\n  <div style="flex-shrink: 1; width: 300px">11111</div>\n  <div style="flex-shrink: 2; width: 300px">11111</div>\n  <div style="flex-shrink: 3; width: 300px">11111</div>\n</div>\n```',
      msg4: '```html\n<div class="container" style="height: 50px">\n  <div>11111</div>\n  <div style="flex-basis: auto">11111</div>\n  <div style="flex-basis: 100px">11111</div>\n  <div style="flex-basis: 200px">11111</div>\n  <div style="flex-basis: 300px">11111</div>\n</div>\n```',
      msg5: '```html\n<div class="container" style="height: 200px; align-slef: flex-start">\n  <div class="item" style="height: 40px">11111</div>\n  <div class="item" style="height: 50px">11111</div>\n  <div class="item" style="height: 110px">11111</div>\n  <div class="item" style="height: 80px; align-self:flex-end">11111</div>\n  <div class="item" style="height: 30px">11111</div>\n  <div class="item" style="height: 170px">11111</div>\n</div>\n```'
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
.item {
  border: 1px dashed;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  border: 1px dashed red;
  background: yellow;
  width: 100%;
}
.flex1 {
  flex: 1;
}
.layout {
  margin:20px;
  width:1200px;
}
.layout >>> pre code {
  font-size: 17px;
  font-weight: 600;
}
</style>
