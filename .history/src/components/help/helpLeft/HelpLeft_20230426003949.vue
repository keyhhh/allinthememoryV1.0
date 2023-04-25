<template>
  <div class="help-left-default">
    <h4 style="text-align: center">创建求助</h4>
    <p style="text-align: center">
      <img :src="src" class="addhelpImg" @click="dialogFormVisible = true" />
    </p>

    <el-dialog
      style="z-index: 20px"
      class="el-dialog"
      v-model="dialogFormVisible"
      title="What are you looking for"
    >
      <el-form :model="helpForm">
        <!-- 标题输入框 -->
        <el-form-item label="helpTittle" :label-width="formLabelWidth">
          <el-input
            v-model="helpForm.title"
            autocomplete="off"
            placeholder="请输入求助信息标题"
          />
        </el-form-item>

        <!-- 发送内容输入框 -->
        <el-form-item label="SendMsg" :label-width="formLabelWidth">
          <el-input
            v-model="helpForm.msg"
            :autosize="{ minRows: 2 }"
            type="textarea"
            placeholder="写下它"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">下次</el-button>
          <!-- 保存添加记忆胶囊 -->
          <el-button type="primary" @click="commithelp"> 封存 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

import beforeClickImg from "@/assets/添加按钮浅蓝色.png";
export default {
  setup() {
    let src = ref(beforeClickImg); //添加胶囊图片
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";

    const helpForm = reactive({
      //时间胶囊要填写的内容
      title: "",
      type: "",
      sendDate: "",
      msg: "",
    });
    return {
      src,
      formLabelWidth,
      dialogFormVisible,
      helpForm,
      shortcuts,
      disabledDate,
      commithelp,
    };
  },
};
</script>

<style scoped>
/* 图片的阴影效果 */
.addhelpImg:active {
  border-radius: 20px;
  background-color: rgb(30, 244, 173);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}

/* 对话框css */
.el-select {
  width: 300px;
}
.el-input,
.el-date-picker {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>