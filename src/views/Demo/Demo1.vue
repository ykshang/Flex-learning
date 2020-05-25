<template>
  <div class="table">
    <el-table :data="tableData" stripe border :header-cell-style="{background:'#e4e4e4', color: '#444444'}" style="width: 100%">
      <el-table-column prop="id" label="Id" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="470">
        <template slot-scope="scope">
          <column-hover
            :type="typeRender(scope.row.type)"
            mode="row"
            :content="scope.row.name"
            :row="scope.row"
            @clickContent="clickName"
            :icon="iconRender(scope.row.type)"
            :iconStyle="iconStyleRender(scope.row.type)"
            :iconList="iconList">
          </column-hover>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="status" label="状态">
      </el-table-column>
      <el-table-column prop="des" label="描述">
      </el-table-column>
    </el-table>
    <el-divider></el-divider>
    <p>div默认情况下会独占一行：</p>
    <div style="border: 1px dashed">ddd</div>
  </div>
</template>

<script>
import ColumnHover from "./ColumnHover";
export default {
  name: 'Overview',
  data () {
    return {
      tableData: [{
        date: '2018-05-02',
        name: 'VolumeSolt@AutoSnap d6b44619-7767-4904-9018-3b709a179af3',
        id: 'd6b44619-7767-4904-9018-3b709a179af3',
        type: "catalog",
        status: "可用",
        des: "云计划任务自动生成的云硬盘 快照"
      }, {
        date: '2018-05-04',
        name: '蒸羊羔,蒸熊掌,蒸鹿尾儿,烧花鸭,烧雏鸡儿,烧子鹅,卤煮咸鸭,酱鸡,松花,小肚儿,晾肉,香肠,什锦苏盘',
        type: "catalog",
        status: "可用",
        id: '2c559087-e3f4-4c53-8b8c-416f785fcb35'
      }, {
        date: '2018-05-01',
        name: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        id: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        type: "file",
        status: "可用",
        des: "null"
      }, {
        date: '2018-05-03',
        name: '王小虎',
        id: 'bef8b732-afc8-4255-8622-a380749838f4',
        type: "catalog",
        status: "异常",
        des: "上海市普陀区金沙江路 1518 弄"
      }],
      iconList: [{
        icon: "fa fa-heart-o fa-lg",
        enabled: function (row) {
          return row.type !== "file";
        },
        handler: function (row) {
          this.$message.info("收藏成功");
        }.bind(this)
      }, {
        icon: "fa fa-share-alt fa-lg",
        enabled: function (row) {
          return row.status === "可用";
        },
        handler: function (row) {
          this.$message.error("分享成功");
        }.bind(this)
      }, {
        icon: "fa fa-info-circle fa-lg",
        enabled: true,
        handler: function (row) {
          this.$message.warning("更多");
        }.bind(this)
      }]
    };
  },
  mounted () {
  },
  methods: {
    clickName (value) {
      console.log(value);
      this.$message.info(value.name);
    },
    typeRender (value) {
      if (value === "file") {
        return "text";
      } else {
        return "button";
      }
    },
    iconRender (value) {
      if (value === "file") {
        return "fa fa-file";
      } else {
        return "fa fa-folder-open";
      }
    },
    iconStyleRender (value) {
      if (value === "file") {
        return "color: #c0c4cca8";
      } else {
        return "color: #ffb509";
      }
    }
  },
  components: {
    ColumnHover
  }
};
</script>
<style scoped>
.table {
  margin: 30px;
}
/* .tableCss >>> .el-table--enable-row-hover .el-table__body tr td:hover .column_icon { */
/* div >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
  display: inline-flex;
} */
</style>
