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

        <!-- 添加搜索物件的标签 -->
        <el-form-item label="tag" :label-width="formLabelWidth">
          <el-select
            v-model="select"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="添加标签"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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

        <!-- 添加图片 -->
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

import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
export default {
  components: {
    Delete,
    Download,
    Plus,
    ZoomIn, //vue上传功能所需的标签
  },
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
     * 要添加标签的东西
     */
    const select = ref();
    const options = [
      {
        value: "HTML",
        label: "HTML",
      },
      {
        value: "CSS",
        label: "CSS",
      },
      {
        value: "JavaScript",
        label: "JavaScript",
      },
    ];

    /**
     * 添加功能中上传文件的属性
     */
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const disabled = ref(false);
    // const refs = this.$refs;

    function handleRemove(UploadFile) {
      console.log(UploadFile, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    }
    const handlePictureCardPreview = (UploadFile) => {
      dialogImageUrl.value = UploadFile.url;
      dialogVisible.value = true;
    };
    const handleDownload = (UploadFile) => {
      console.log(UploadFile);
    };

    return {
      src,
      formLabelWidth,
      dialogFormVisible,
      helpForm,

      options,

      dialogImageUrl, //以下是添加图片的返回内容
      dialogVisible,
      disabled,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
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