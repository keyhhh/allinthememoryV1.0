<template>
  <div class="capsule-left-default">
    <h4>创建胶囊</h4>
    <img :src="src" class="addCapsuleImg" @click="dialogFormVisible = true" />

    <el-dialog
      class="el-dialog"
      v-model="dialogFormVisible"
      title="A new message for the furture"
    >
      <el-form :model="capsuleForm">
        <el-form-item label="CapsuleTittle" :label-width="formLabelWidth">
          <el-input v-model="capsuleForm.title" autocomplete="off" placeholder="请输入记忆胶囊标题" />
        </el-form-item>
        <el-form-item label="SendChannel" :label-width="formLabelWidth">
          <el-select v-model="capsuleForm.type" placeholder="请选择到时发送形式">
            <el-option label="手机发送" value="phone" />
            <el-option label="邮箱发送" value="email" />
          </el-select>
          <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Select date and time"
        :shortcuts="shortcuts"
      />
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
    /*
    对话框相关
     */
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";
    const capsuleForm = reactive({ //时间胶囊要填写的内容
      title: "",
      type: "",
      date1: "",
      date2: "",
    });

    return { src, formLabelWidth, dialogFormVisible, capsuleForm };
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
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>