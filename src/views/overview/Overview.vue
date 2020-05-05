<template>
<div style="margin:20px; width:1200px">
  <h2>简介</h2>
  <div>
    <b>CSS 弹性盒子布局</b>是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。
  </div>
  <h2>例子</h2>
  <el-button type="primary" @click="changeFlexFlag">{{"切换弹性元素"}}</el-button>
  <el-button type="primary" @click="changeDiv">{{"当前为: " + isDiv + ""}}</el-button>
  <br/>
  <br/>
  <div v-if="isDiv ==='div'" :class="'container' + flexFlag">
    <div class="item">弹性元素1</div>
    <div class="item">弹性元素2</div>
    <div class="item">弹性元素3</div>
  </div>
  <div v-if="isDiv === 'span'" :class="'container' + flexFlag">
    <span class="item">弹性元素1</span><span class="item">弹性元素2</span><span class="item">弹性元素3</span>
  </div>
  <h2>对应样式</h2>
  <!--css 样式-->
  <div class="css-container"  v-if="flag">
    <span v-for="item in cssContent" :key="item.name" class="css-item">
      <h1>{{item.name}}</h1>
      <vue-markdown v-highlight>{{item.cssContent}}</vue-markdown>
    </span>
  </div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Overview',
  data () {
    return {
      flexFlag: "",
      flag: true,
      isDiv: "div",
      cssContent: [],
      isCollapse: true
    };
  },
  mounted () {
    this.cssContent = [{
      name: "容器",
      // cssContent: "```css \n.container {\n  width: 1200px;\n  height: 400px;\n  background: yellow;\n}\n```"
      cssContent: "```css \n.container {\n  width: 1200px;\n  height: 400px;\n  background: yellow;\n}\n.flex {\ndisplay: flex;\n}\n ```"
    }, {
      name: "弹性元素1",
      cssContent: "```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
    }, {
      name: "弹性元素2",
      cssContent: "```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
    }, {
      name: "弹性元素3",
      cssContent: "```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
    }];
  },
  methods: {
    changeDiv () {
      if (this.isDiv === "div") {
        this.isDiv = "span";
      } else {
        this.isDiv = "div";
      }
    },
    changeFlexFlag () {
      this.flag = false;
      if (!this.flexFlag) {
        this.flexFlag = " flex";
        this.cssContent = [{
          name: "容器",
          cssContent: "```css \n.container {\n  width: 1200px;\n  height: 400px;\n  background: yellow;\n}\n.flex {\ndisplay: flex;\n}\n ```"
        }, {
          name: "弹性元素1",
          cssContent: "```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
        }, {
          name: "弹性元素2",
          cssContent: "```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
        }, {
          name: "弹性元素3",
          cssContent: "```css \n.item {\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
        }];
      } else {
        this.flexFlag = "";
        this.cssContent = [{
          name: "容器",
          cssContent: "```css \n.container {\n  width: 1200px;\n  height: 400px;\n  background: yellow;\n}\n```"
        }, {
          name: "弹性元素1",
          cssContent: "```css \n.item\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
        }, {
          name: "弹性元素2",
          cssContent: "```css \n.item\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
        }, {
          name: "弹性元素3",
          cssContent: "```css \n.item\n  border: dashed 1px;\n  flex: 1;\n}\n ```"
        }];
      }
      this.flag = true;
      console.log(this.cssContent);
    }
  },
  components: {
    VueMarkdown
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 300px;
  background: yellow;
}
.flex {
  display: flex;
}
.item {
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
</style>
