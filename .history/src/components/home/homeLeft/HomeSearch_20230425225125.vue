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
    <!-- 标签添加显示 -->
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

    <!-- 
      添加记录按钮内容
     -->
    <h4 style="text-align: center">创建记录</h4>
    <p style="text-align: center">
      <img
        ali
        :src="src"
        class="addRecordImg"
        @click="dialogFormVisible = true"
      />
    </p>

    <el-dialog
      class="el-dialog"
      v-model="dialogFormVisible"
      title="Describe your record"
    >
      <el-form :model="recordForm">
        <!-- 标题输入框 -->
        <el-form-item label="RecordTittle" :label-width="formLabelWidth">
          <el-input
            v-model="recordForm.title"
            autocomplete="off"
            placeholder="请输入记忆标题"
          />
        </el-form-item>

        <!-- 记忆还是记录蕾单选框 -->
        <el-form-item label="IsMemory" :label-width="formLabelWidth">
          <el-radio-group v-model="recordForm.isMemory" class="ml-4">
            <el-radio :label="true" size="large">集体记忆</el-radio>
            <el-radio :label="false" size="large">我的记录</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 是否公开switch 
            class="ml-4"
            label="RecordOpen"
            v-model="recordForm.isOpen"-->
        <el-form-item label="RecordOpen" :label-width="formLabelWidth">
          <el-switch
            v-model="recordForm.isOpen"
            inline-prompt
            active-text="是"
            inactive-text="否"
          />
        </el-form-item>
        <!-- 记忆内容输入框 -->
        <el-form-item label="Msg" :label-width="formLabelWidth">
          <el-input
            v-model="recordForm.msg"
            :autosize="{ minRows: 2 }"
            type="textarea"
            placeholder="内容......"
          />
        </el-form-item>
        <el-form-item label="Picture" :label-width="formLabelWidth">
          <el-upload
            ref="pictureUpload"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
          >
            <el-icon><Plus /></el-icon>

            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <el-icon><Download /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img
              w-full
              style="width: 100%"
              :src="dialogImageUrl"
              alt="Preview Image"
            />
          </el-dialog>
        </el-form-item>
      </el-form>

      <!-- 弹出框底下的按钮 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <!-- 保存添加记录 -->
          <el-button type="primary" @click="commitRecord"> 保存 </el-button>
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

import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
// import type { UploadFile } from "element-plus";
export default defineComponent({
  components: {
    Delete,
    Download,
    Plus,
    ZoomIn, //vue上传功能所需的标签
  },
  setup() {
    /**
     * 搜索框属性
     **/
    const searchInput = ref("");

    /**
     * 日期选择框属性
     **/
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

    /**
     * tag标签属性
     **/
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
      //手动记录数据
      title: "", //记录大标题
      date: new Date(), //记录时间
      msg: "", //记录内容
      tag: "", //标签内容
      file: null, //文件
      isOpen: false, //是否公开
      isMemory: false, //是否为集体记忆内容
    });
    //记录提交存储的方法
    const commitRecord = () => {
      console.log("进入方法");
      //判断数据是否存在空，
      if (recordForm.title == "") {
        //回去接着写
        console.log("不可以不可以提交");
        dialogFormVisible.value = true;
      } else {
        //提交
        console.log("走了else");
        dialogFormVisible.value = false;
      }
    };

    /**
     * 添加功能中上传文件的属性
     */
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const disabled = ref(false);
    // const refs = this.$refs;

    function handleRemove(UploadFile) {
      let uploadFiles = this.$refs.pictureUpload.uploadFiles;
      console.log(UploadFile, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", uploadFiles);
      // for (var i = 0; i < uploadFiles.length; i++) {
      //   if (uploadFiles[i]["url"] == UploadFile.url) {
      //     uploadFiles.splice(i, 1);
      //   }
      // }
    }
    const handlePictureCardPreview = (UploadFile) => {
      dialogImageUrl.value = UploadFile.url;
      dialogVisible.value = true;
    };
    const handleDownload = (UploadFile) => {
      console.log(UploadFile);
    };

    return {
      value, //默认的日期选择
      isHoliday,
      searchInput, //搜索框内容
      Search, //element ui的标签
      dynamicTags, //标签数组
      inputValue, //新增输入标签的数值
      inputVisible, //是否显示标签
      InputRef, //新增输入标签的数值的ref参数
      handleClose,
      showInput,
      handleInputConfirm,
      clickTag,

      src, //添加按钮图片
      formLabelWidth, //对话框的标签宽度
      dialogFormVisible, //判断出现对话框的boolean
      recordForm, //记录数据
      commitRecord, //提交方法

      dialogImageUrl,
      dialogVisible,
      disabled,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
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