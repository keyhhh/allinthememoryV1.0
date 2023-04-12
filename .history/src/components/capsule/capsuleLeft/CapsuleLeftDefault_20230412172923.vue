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
          <el-input
            v-model="capsuleForm.title"
            autocomplete="off"
            placeholder="请输入记忆胶囊标题"
          />
        </el-form-item>
        <!-- 标题输入框 -->
        <el-form-item label="SendChannel" :label-width="formLabelWidth">
          <!-- 发送形式选择器 -->
          <el-select
            v-model="capsuleForm.type"
            placeholder="请选择到时发送形式"
          >
            <el-option label="手机发送" value="phone" />
            <el-option label="邮箱发送" value="email" />
          </el-select>
          <!-- 日期时间选择器 -->
          <el-date-picker
            v-model="capsuleForm.sendDate"
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
    const capsuleForm = reactive({
      //时间胶囊要填写的内容
      title: "",
      type: "",
      sendDate: "",
    });
    /**
     * 日期选择区域
     */
    const shortcuts = [
      {
        text: "一年后",
        value: () => {
          let date = new Date();
          let now = new Date(date);
          let year = now.getFullYear() + 1; //得到年份
          let month = (now.getMonth() + 1).toString().padStart(2, "0"); //得到月份
          let day = (now.getDate() - 1).toString().padStart(2, "0"); //得到日期

          if (month == "01" && day == "00") {
            year = now.getFullYear(); //得到年份
            month = "12";
            day = "31";
          } else if (day == "00") {
            year = now.getFullYear() + 1; //得到年份
            month = now.getMonth().toString().padStart(2, "0"); //得到月份;
            if (
              month == "01" ||
              month == "03" ||
              month == "05" ||
              month == "07" ||
              month == "08" ||
              month == "10" ||
              month == "12"
            ) {
              //大月
              day = "31";
            } else if (
              month == "04" ||
              month == "06" ||
              month == "09" ||
              month == "11"
            ) {
              //小月
              day = "30";
            } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
              //瑞年
              day = "29";
            } else {
              //平年
              day = "28";
            }
          } else {
            year = now.getFullYear() + 1; //得到年份
            month = (now.getMonth() + 1).toString().padStart(2, "0"); //得到月份
            day = (now.getDate() - 1).toString().padStart(2, "0"); //得到日期
          }
          // console.log(year, month, day, '年月日')

          date.
          return now;
        },
      },
      {
        text: "一月后",
        value: () => {
          const date = new Date();
          let now = new Date(date);
          // console.log(now, '一年后时间')
          let year = now.getFullYear(); //得到年份
          let month = ((now.getMonth() + 1).toString().padStart(2, "0") + 1 ); //得到月份
          let day = (now.getDate() - 1).toString().padStart(2, "0"); //得到日期

          if (month == "01" && day == "00") {
            year = now.getFullYear(); //得到年份
            month = "12";
            day = "31";
          } else if (day == "00") {
            year = now.getFullYear() + 1; //得到年份
            month = now.getMonth().toString().padStart(2, "0"); //得到月份;
            if (
              month == "01" ||
              month == "03" ||
              month == "05" ||
              month == "07" ||
              month == "08" ||
              month == "10" ||
              month == "12"
            ) {
              //大月
              day = "31";
            } else if (
              month == "04" ||
              month == "06" ||
              month == "09" ||
              month == "11"
            ) {
              //小月
              day = "30";
            } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
              //瑞年
              day = "29";
            } else {
              //平年
              day = "28";
            }
          } else {
            year = now.getFullYear() + 1; //得到年份
            month = (now.getMonth() + 1).toString().padStart(2, "0"); //得到月份
            day = (now.getDate() - 1).toString().padStart(2, "0"); //得到日期
          }
          return now;
        },
      },
      {
        text: "一周后",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
          return date;
        },
      },
    ];

    return { src, formLabelWidth, dialogFormVisible, capsuleForm, shortcuts };
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