<template>
   <div class="capsule-left-default">
    <h4 style="text-align: center">创建求助</h4>
    <p style="text-align: center">
      <img
        :src="src"
        class="addCapsuleImg"
        @click="dialogFormVisible = true"
      />
    </p>

    <el-dialog
    
      class="el-dialog"
      v-model="dialogFormVisible"
      title="A new message for the furture"
    >
      <el-form :model="capsuleForm">
        <!-- 标题输入框 -->
        <el-form-item label="CapsuleTittle" :label-width="formLabelWidth">
          <el-input
            v-model="capsuleForm.title"
            autocomplete="off"
            placeholder="请输入记忆胶囊标题"
          />
        </el-form-item>

        <el-form-item label="SendChannel" :label-width="formLabelWidth">
          <!-- 发送形式选择器 -->
          <el-select
            v-model="capsuleForm.type"
            placeholder="请选择到时发送形式"
          >
            <el-option label="手机发送" value="phone" />
            <el-option label="邮箱发送" value="email" />
          </el-select>
        </el-form-item>
        <!-- 发送日期选择器 -->
        <el-form-item label="SendTime" :label-width="formLabelWidth">
          <el-date-picker
            v-model="capsuleForm.sendDate"
            type="date"
            placeholder="选择发送日期"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
          />
        </el-form-item>
        <!-- 发送内容输入框 -->
        <el-form-item label="SendMsg" :label-width="formLabelWidth">
          <el-input
            v-model="capsuleForm.msg"
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
          <el-button type="primary" @click="commitCapsule"> 封存 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

import beforeClickImg from "@/assets/添加按钮浅蓝色.png";
export default {
    setup() {
    let src = ref(beforeClickImg); //添加胶囊图片
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";

    return{src,formLabelWidth,dialogFormVisible}
    }
}
</script>

<style scoped>
/* 图片的阴影效果 */
.addCapsuleImg:active {
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