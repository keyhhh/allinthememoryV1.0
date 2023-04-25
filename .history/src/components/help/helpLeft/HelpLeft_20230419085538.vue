<template>
   <div class="help-left-default">
    <h4 style="text-align: center">创建求助</h4>
    <p style="text-align: center">
      <img
        :src="src"
        class="addhelpImg"
        @click="dialogFormVisible = true"
      />
    </p>

    <el-dialog
    style="z-index:20px"
      class="el-dialog"
      v-model="dialogFormVisible"
      title="A new message for the furture"
    >
      <el-form :model="helpForm">
        <!-- 标题输入框 -->
        <el-form-item label="helpTittle" :label-width="formLabelWidth">
          <el-input
            v-model="helpForm.title"
            autocomplete="off"
            placeholder="请输入记忆胶囊标题"
          />
        </el-form-item>

        <el-form-item label="SendChannel" :label-width="formLabelWidth">
          <!-- 发送形式选择器 -->
          <el-select
            v-model="helpForm.type"
            placeholder="请选择到时发送形式"
          >
            <el-option label="手机发送" value="phone" />
            <el-option label="邮箱发送" value="email" />
          </el-select>
        </el-form-item>
        <!-- 发送日期选择器 -->
        <el-form-item label="SendTime" :label-width="formLabelWidth">
          <el-date-picker
            v-model="helpForm.sendDate"
            type="date"
            placeholder="选择发送日期"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
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
    /**
     * 日期选择区域
     */
    const shortcuts = [
      {
        text: "7天之后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
          return date;
        },
      },
      {
        text: "30天之后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
          return date;
        },
      },
      {
        text: "60天之后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 60);
          return date;
        },
      },
      {
        text: "90天之后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 90);
          return date;
        },
      },
      {
        text: "120天之后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 120);
          return date;
        },
      },
      {
        text: "180天之后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 180);
          return date;
        },
      },
      // 一年后和两年后
      // {
      //   text: "365天之后",
      // },
      // {
      //   text: "730天之后",
      // },
    ];

    const disabledDate = (time) => {
      return (
        time.getTime() - 3600 * 1000 * 24 * 7 <
        new Date().getTime() - 3600 * 24 * 1000
      );
    };
    /**
     * 记忆胶囊提交存储的方法
     */
    const commithelp = () => {
      console.log("进入方法");
      //判断数据是否存在空，
      if (helpForm.title == "") {
        //回去接着写
        console.log("不可以不可以提交");
        dialogFormVisible.value = true;
      } else {
        //提交
        console.log("走了else");
        dialogFormVisible.value = false;
      }
    };

    return{src,formLabelWidth,dialogFormVisible
    ,      helpForm,
      shortcuts,
      disabledDate,
      commithelp,}
    }
}
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