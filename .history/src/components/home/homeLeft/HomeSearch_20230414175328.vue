<template>
  <div class="home-search">
    <!-- 输入搜索框 
          import { Search } from '@element-plus/icons-vue'
          style="width: 80%"设置长度
        -->
    <div class="demo-input-size">
      <el-input
        style="width: 200px"
        v-model="searchInput"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
    </div>

    <!-- 日期选择框 
          style="width: 80%"设置长度
        -->
    <div class="demo-date-picker">
      <el-date-picker
        style="width: 200px"
        id="el-date-picker"
        v-model="value"
        type="date"
        placeholder="Pick a day"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      >
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)" class="holiday" />
          </div>
        </template>
      </el-date-picker>
    <!-- </div> -->

    <!-- 标签选择框,点击事件后期传参数 
  @click.prevent="clickTag($event,tag)"  设置标签的点击事件
     style="margin-right:10px;margin-top:10px" 设置每个tag的间距
  -->
    <!-- <div class="demo-tag-picker"> -->
      <el-tag
        @click.prevent="clickTag($event, tag)"
        v-for="tag in dynamicTags"
        :key="tag"
        class="mx-1"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
        style="margin-right: 10px; margin-top: 10px; cursor: pointer"
      >
        {{ tag }}
      </el-tag>
    </div>
    <div class="demo-tag-picker-search">
      <el-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        class="ml-1 w-20"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
        style="margin-right: 10px; margin-top: 10px; width: 80%"
      />
      <el-button
        v-else
        class="button-new-tag ml-1"
        size="small"
        @click="showInput"
        style="margin-right: 10px; margin-top: 10px"
      >
        + 添加标签
      </el-button>
    </div>
  <!-- </div>

  <div class="home-left-add-record"> -->
    <h4 style="text-align: center">创建记录</h4>
    <p style="text-align: center">
      <img
        ali
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
//
import { defineComponent, ref, nextTick, reactive } from "vue";

import { Search } from "@element-plus/icons-vue";

import beforeClickImg from "@/assets/添加按钮深蓝色.png";

export default defineComponent({
  // components: { PlusOutlined },
  setup() {
    //搜索框属性
    const searchInput = ref("");

    //日期选择框属性
    const value = ref("2021-10-29");
    const holidays = [
      "2021-10-01",
      "2021-10-02",
      "2021-10-03",
      "2021-10-04",
      "2021-10-05",
      "2021-10-06",
      "2021-10-07",
    ];
    const isHoliday = ({ dayjs }) => {
      return holidays.includes(dayjs.format("YYYY-MM-DD"));
    };

    //tag标签属性
    const inputValue = ref("");
    const dynamicTags = ref(["happy", "sad", "amused"]);
    const inputVisible = ref(false);
    const InputRef = ref("");
    const handleClose = (tag) => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };

    const showInput = () => {
      inputVisible.value = true;
      nextTick(() => {
        InputRef.value.focus();
      });
    };

    const handleInputConfirm = () => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
    };

    function clickTag(event, msg) {
      //点击标签的方法
      console.log("dianle", event, msg);
    }


    /**
     * 添加记录按钮的相关内容 
    */
    let src = ref(beforeClickImg); //添加记录图片
    //对话框相关
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";
    const recordForm = reactive({
      //时间胶囊要填写的内容
      title: "",//记录大标题
      msg: "",//记录内容
      tag: "",//标签内容
      file: null,//文件
      recordOpenOrNot: false
    });
    /**
     * 记录提交存储的方法
     */
    const commitrecord = () => {
      console.log("进入方法");
      //判断数据是否存在空，
      if (capsuleForm.title == "") {
        //回去接着写
        console.log("不可以不可以提交");
        dialogFormVisible.value = true;
      } else {
        //提交
        console.log("走了else");
        dialogFormVisible.value = false;
      }
    };
    return {
      value,//默认的日期选择
      isHoliday,
      searchInput,//搜索框内容
      Search,//element ui的标签
      dynamicTags,//标签数组
      inputValue,//新增输入标签的数值
      inputVisible,//是否显示标签
      InputRef,//新增输入标签的数值的ref参数
      handleClose,
      showInput,
      handleInputConfirm,
      clickTag,

      src,//添加按钮图片
      formLabelWidth,//对话框的标签宽度
      dialogFormVisible,//判断出现对话框的boolean
      recordForm,//记录数据
      commitCapsule,//提交方法
    };
  },
});
</script>

<style scoped>
.home-search {
  position: fixed;
  width: 16.6%;
  overflow: hidden;
  z-index: 1;
}

.demo-input-size,
.demo-date-picker,
.demo-tag-picker {
  position: relative;
  margin-left: 10px;
}
/* 日期选择框样式 */
.demo-date-picker {
  margin-top: 40px;
}
/* 标签选择框样式 */
.demo-tag-picker,
.demo-tag-picker-search {
  padding-left: 10px;
  margin: 15px 0px 15px 0;
}

.demo-date-picker.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100px;
}

.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
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