<template>
<div class="layout">
  <h2>css属性direction对flex布局的影响</h2>
  <vue-markdown v-highlight>{{msg1}}</vue-markdown>
  <el-form :inline="true" :model="formInline">
    <el-form-item label="direction:">
      <el-select v-model="formInline.value" placeholder="请选择" @change="changeItem" clearable>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="flex-direction:">
      <el-select v-model="formInline.value1" placeholder="请选择" @change="changeItem1" clearable>
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div :class="'flex container' + css + css1">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </div>
  <div style="height:400px"></div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Direction',
  data () {
    return {
      formInline: {
        value: "",
        value1: ""
      },
      msg1: "```css\n direction：ltr | rtl \n```",
      css: "",
      css1: "",
      options: [
        {label: "rtl", value: "rtl"},
        {label: "ltr", value: "ltr"}
      ],
      options1: [
        {label: "row", value: "row"},
        {label: "row-reverse", value: "row-reverse"},
        {label: "column", value: "column"},
        {label: "column-reverse", value: "column-reverse"}
      ]
    };
  },
  mounted () {
  },
  methods: {
    changeItem (value) {
      this.css = " " + value;
      console.log(value);
    },
    changeItem1 (value) {
      this.css1 = " " + value;
      console.log(value);
    }
  },
  components: {
    VueMarkdown
  }
};
</script>
<style scoped>
.lrt {
  direction: ltr;
}
.rtl {
  direction: rtl;
}
.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}
.column {
  flex-direction: column;
}
.column-reverse {
  flex-direction: column-reverse;
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
}
.flex {
  display: flex;
}
.container {
  width: 1000px;
  height: 1000px;
  background: yellow;
}
.item {
  border: dashed 1px;
  font-size: 40px;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
