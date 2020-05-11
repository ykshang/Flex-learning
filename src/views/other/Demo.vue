<template>
  <div class="tableCss">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="Id" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="450">
        <template slot-scope="scope">
          <div class="column">
            <div class="column_content">
              <div class="el-button--text" :title="scope.row.name" @click="clickName(scope.row.name)">{{scope.row.name}}</div>
            </div>
            <div class="column_icon">
              <i @click="showName(scope.row.name)" class="fa fa-heart-o"></i>
              <i @click="showName(scope.row.name)" class="fa fa-share-alt"></i>
              <i @click="showName(scope.row.name)" class="fa fa-ellipsis-h"></i>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="200px">
      </el-table-column>
      <el-table-column prop="des" label="描述">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: 'VolumeSolt@AutoSnap d6b44619-7767-4904-9018-3b709a179af3',
        id: 'd6b44619-7767-4904-9018-3b709a179af3',
        des: "云计划任务自动生成的云硬盘 快照"
      }, {
        date: '2016-05-04',
        name: '蒸羊羔,蒸熊掌,蒸鹿尾儿,烧花鸭,烧雏鸡儿,烧子鹅,卤煮咸鸭,酱鸡,松花,小肚儿,晾肉,香肠,什锦苏盘',
        id: '2c559087-e3f4-4c53-8b8c-416f785fcb35'
      }, {
        date: '2016-05-01',
        name: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        id: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        des: "null"
      }, {
        date: '2016-05-03',
        name: '王小虎',
        id: 'bef8b732-afc8-4255-8622-a380749838f4',
        des: "上海市普陀区金沙江路 1518 弄"
      }]
    };
  },
  mounted () {
  },
  methods: {
    clickName (value) {
      this.$message.info("查看" + value);
    },
    showName (value) {
      this.$message.info(value);
    }
  }
};
</script>
<style scoped>
.tableCss {
  margin: 30px;
}
.column {
  display: flex;
  flex-direction: row;
}
.column_content {
  flex: 1;
  min-width: 0;
  display: flex;
}
.column_icon {
  display: none;
}
.tableCss >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
  display: inline-flex;
  align-items: center;
}
.el-button--text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.column_icon i {
  margin: 0px 5px;
  font: 1.5em;
  display: inline-block;
}
.column_icon i:hover {
  color: #409EFF;
  cursor: pointer;
}
</style>
