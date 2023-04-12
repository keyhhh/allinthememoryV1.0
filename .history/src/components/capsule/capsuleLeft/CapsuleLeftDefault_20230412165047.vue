<template>
  <div class="capsule-left-default">
    <h4>创建胶囊</h4>
    <img :src="src" class="addCapsuleImg" @click="dialogFormVisible = true"/>

    <el-dialog
      class="el-dialog"
      v-model="dialogFormVisible"
      title="Shipping address"
    >
      <el-form :model="form">
        <el-form-item  label="Promotion name" :label-width="formLabelWidth">
          <el-input  v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai" />
            <el-option label="Zone No.2" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// import { useRouter } from "vue-router";
import beforeClickImg from "@/assets/添加按钮浅蓝色.png";
// import afterClickImg from "@/assets/添加按钮深蓝色.png";

export default {
  setup() {
    let src = ref(beforeClickImg); //添加胶囊图片
/*对话框相关
*/
    const dialogFormVisible = ref(false);
    const formLabelWidth = '140px'
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });


    return { src, formLabelWidth, dialogFormVisible, form};
  },
};
</script>

<style scoped>
/* 图片的阴影效果 */
.addCapsuleImg:active {
  border-radius: 20px;
  background-color: aquamarine;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}

/* 对话框css */
.el-select {
  width: 300px;
}
.el-input{
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>