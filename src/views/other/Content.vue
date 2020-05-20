<template>
<div class="layout">
  <h2>什么是min-content</h2>
  <vue-markdown v-highlight>{{msg3}}</vue-markdown>
  <div class="flex">
    <div class="div1">adadadadaadadadadadadasdad daasdasdadasdadada daasdasdadadasds sa asda sdasd </div>
    <div class="div2">adadadadaadadadadadadasdad daasdasdadasdadada daasdasdadadasds sa asda sdasd </div>
  </div>
  <h2>什么是max-content</h2>
  <vue-markdown v-highlight>{{msg4}}</vue-markdown>
  <div class="div3">adadadadaadadadadadadasdad daasdasdadasdadada daasdasdadadasds sa asda sdasd </div>
  <h2>怎么影响flex布局，影响哪些范围</h2>
  <h1>仅设置display: flex</h1>
  <p>不存在width和flex-basis的时候，元素的宽度应该是受max-content影响的</p>
  <div class="container flex">
    <div class="item">11111111111111111111111 11111111111111111111</div>
    <div class="item">11111111111111111111111 11111111111111111111</div>
    <div class="item">11111111111111111111111 11111111111111111111</div>
    <div class="item">1111111111111111111111111111111 11111111111111111111</div>
  </div>
  <br>
  <p>某个元素设置了width和flex-basis的时候，剩余元素的宽度受max-content影响的</p>
  <div class="container flex">
    <div class="item" style="width:200px">111111 111 111 11111111111111 11111111111111111111</div>
    <div class="item">111111111111 11111111111111111 11111111111 1 1111111111111</div>
    <div class="item">1111111 11111 1111 1111 111 1111 111111 11111111 111  11111 11111111111 1111111 11111111 11111111</div>
    <div class="item">1111111111111111111111 111111111111</div>
  </div>
  <h1>设置display: flex 和flex: 1</h1>
  <div class="container flex">
    <div class="item1">111111 111 111 11111111111111 11111111111111111111</div>
    <div class="item1">111111111111 11111111111111111 11111111111 1 1111111111111</div>
    <div class="item1">1111111 11111 1111 1111 111 1111 111111 11111111 111  11111 11111111111 1111111 11111111 11111111</div>
    <div class="item1">111111111111111111111 111111111111</div>
  </div>
  <h1>假设容器的宽度为1000px，且在设置成flex属性前：</h1>
  <p>有多个元素（假设是5个）均设置的了flex：1，那么一般情况他们的伸缩比例是相同的，且强制设置其在主轴上的空间为0。</p>
  <p>1，这几个元素在主轴的上的宽度均小于平均宽度（200px）。那么分配剩余空间后，这几个元素的宽度（200px）相等</p>
  <div class="container flex">
    <div class="item1">111111 111 111 11111111</div>
    <div class="item1">111111111111 1111111111111</div>
    <div class="item1">1111111 11111 1111 111111</div>
    <div class="item1">111111111111111111111 11111</div>
    <div class="item1">111111111111 1111111111111</div>
  </div>
  <p>2，这几个元素有大于平均宽度（200px）的，有小于平均宽度（200px）的，但是加起来不大于1000px，此时存在：</p>
  <ul>
    <li>当所有的元素min-content小于等于平均宽度（200px）的时候，宽度平分，最终每一个元素都是平均宽度（200px）；</li>
    <br/>
    <div class="container flex">
      <div class="item1">111111 111 111 11111111</div>
      <div class="item1">111111111111 1111111 111 11 11 11 11 11111111</div>
      <div class="item1">111111111111 1111111 111 11 11 11 11 11111111</div>
      <div class="item1">1111111 11111 1111 11111111 11111111</div>
      <div class="item1">111111111111111111111 11111</div>
    </div>
    <br/>
    <li>当有元素min-content大于平均宽度（200px）的时候，那么它的宽度最终为min-content，然后剩余的宽度有另外的元素平分。</li>
    <br/>
    <div class="container flex">
      <div class="item1">111111 111 111 11111111</div>
      <div class="item1">111111111111 1111111 111 11 11 11 11 11111111</div>
      <div class="item1">111111111111 1111111 111 11 11 11 11 11111111</div>
      <div class="item1">1111111 11111 1111 11111111 11111111</div>
      <div class="item1">11111111111111111111111111111111111111111111 11111</div>
    </div>
  </ul>
  <p>3，当这几个元素有大于平均宽度（200px），有小于平均宽度（200px）的，加起来大于1000px，此时存在：</p>
  <ul>
    <li>当这几个元素的min-content均未大于平均宽度（200px），那么这几个元素平分后最终均为平均宽度（200px）；</li>
    <br/>
    <div class="container flex">
      <div class="item1">111111 111 111 11111111</div>
      <div class="item1">111111111111 1111111 111 11 11 11 11 11111111</div>
      <div class="item1">1111111 11111 1111 11111111 11111111</div>
      <div class="item1">111111111111111111 11111111 1111111111111111 1111111111111111111111 11111</div>
      <div class="item1">111111111111111111 11111111 1111111111111111 1111111111111111111111 11111</div>
    </div>
    <br/>
    <li>当有的min-content大于平均宽度（200px），有的小于平均宽度（200px），总的加起来并未超过1000px，那么1000px减去大于平均宽度（200px）的min-content，剩下的元素平分后，宽度相等，大于平均宽度（200px）的元素宽度均为其各自的min-content。如果这时候最终总宽度大于1000px，会溢出。</li>
    <br/>
    <div class="container flex">
      <div class="item1">111111111111111111111111111 11 11 11 </div>
      <div class="item1">1111111111111111111111111111111111 11 1111111</div>
      <div class="item1">111111111111111111111111111111 11 1111</div>
      <div class="item1">1111111111111111111111111111111111 111111 1111111111111111111111 11 11111</div>
      <div class="item1">111111111111111111111111111111 11 1111</div>
    </div>
    <br/>
    <li>如果所有的元素的min-content均大于平均宽度（200px），那么最终宽度为各自的min-content，溢出。</li>
    <div class="container flex">
      <div class="item1">111  1111111111111111111111111111 11 11 11 </div>
      <div class="item1">1111111111111111111111111111111 11 1111111</div>
      <div class="item1">1111111111111111111111111111111 11 1111111</div>
      <div class="item1">1111111111111111111111111111111 11 1111</div>
      <div class="item1">1111111111111111111111111111111 1111111111111111111111111111 11 11111</div>
    </div>
  </ul>
  <div style="height:400px"></div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Content',
  data () {
    return {
      msg3: "```css\n width: min-content; \n```",
      msg4: "```css\n width: max-content; \n```"
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
.div1 {
  width: 200px;
  height: 100px;
  background: yellow;
  margin: 30px;
  border: dashed 1px;
}
.div2 {
  width: min-content;
  height: 100px;
  background: yellow;
  margin: 30px;
  border: dashed 1px;
}
.div3 {
  width: max-content;
  height: 100px;
  background: yellow;
  margin: 20px;
  border: dashed 1px;
}
.flex {
  display: flex;
}
.container {
  width: 100%;
  height: 100px;
  background: yellow;
}
.item {
  border: dashed 1px;
 }
 .item1 {
  border: dashed 1px;
  flex: 1;
 }
.css-container {
  display: flex;
}
.css-item {
  display: inline-block;
  flex: 1;
  margin: 5px;
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
