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
      title="创建一条求助"
    >
      <el-form :model="helpForm">
        <!-- 标题输入框 -->
        <el-form-item label="标题:" :label-width="formLabelWidth">
          <el-input
            v-model="helpForm.title"
            autocomplete="off"
            placeholder="请输入求助信息标题"
          />
        </el-form-item>

        <!-- 添加搜索物件的标签 -->
        <el-form-item label="标签:" :label-width="formLabelWidth">
          <el-select
            v-model="helpForm.tag"
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
            v-model="helpForm.message"
            :autosize="{ minRows: 2 }"
            type="textarea"
            placeholder="写下它"
          />
        </el-form-item>

        <!-- 添加图片 -->
        <el-form-item label="Picture" :label-width="formLabelWidth">
          <el-upload
            ref="pictureUpload"
            action="http://localhost:8081/AIM/common/upload"
            list-type="picture-card"
            :auto-upload="true"
            :on-change="handleChange"
            :on-success="onUploadSuccess"
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
          <!-- 保存添加求助信息 -->
          <el-button type="primary" @click="commitHelp"> 封存 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

import { Delete, Plus, ZoomIn } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus"; //elementui

import { upHelp } from "@/axios/help";
import beforeClickImg from "@/assets/添加按钮浅蓝色.png";

export default {
  components: {
    Delete,
    Plus,
    ZoomIn, //vue上传功能所需的标签
  },
  setup() {
    const router = useRouter(); //路由
    let src = ref(beforeClickImg); //求助信息图片
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";

    const helpForm = reactive({
      //要填写的内容
      datePublish: new Date(), //记录时间
      userId: null,
      image: [], //文件
      title: "",
      message: "",
      tag: [],
    });

    /**
     * 要添加标签的东西
     */
    const select = ref();
    const options = [
      {
        value: "寻人",
        label: "寻人",
      },
      {
        value: "寻物",
        label: "寻物",
      },
      {
        value: "其他",
        label: "其他",
      },
    ];

    /**
     * 添加功能中上传文件的属性
     */
    const pictureUpload = ref(null); //上传图片到组建的ref
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const disabled = ref(false);
    // const refs = this.$refs;

    function handleRemove(file) {
      pictureUpload.value.handleRemove(file); //删除缩略图的方法
      // console.log(file.response.data); //这是获取到了存储的文件名，当点击删除时，通过匹配数组中的文件名删除数组
      helpForm.image.splice(helpForm.image.indexOf(file.response.data), 1);
    }

    const handleChange = () => {};

    const onUploadSuccess = (response) => {
      //上传文件成功是的回调
      console.log("wq#$%^&", response.data);
      helpForm.image.push(response.data); //上传成功后返回的存储在本地的图片名，push到data中去
    };

    const handlePictureCardPreview = (UploadFile) => {
      dialogImageUrl.value = UploadFile.url;
      dialogVisible.value = true;
    };

    /**
     * 提交创建
     */
    const commitHelp = () => {
      // console.log("进入方法helpFormhelpFormhelpForm", helpForm);
      if (
        helpForm.title === "" ||
        helpForm.tag === "" ||
        helpForm.message === ""
      ) { //判断是否存在空值，
        ElMessage.error("请输入完整");
      } else { //当不存在空值就发请求
        let help = {
          userId: localStorage.getItem("userInfo"),
          datePublish: helpForm.datePublish,
          message: helpForm.message,
          title: helpForm.title,
          image: helpForm.image.join(","),
          tag: helpForm.tag.join(","),
        };
        // console.log("hehelplhelphelphelpp", help);
        upHelp(help).then((res) => {
          if (res.data.code) {
            console.log("返回代码1", res);
            router.go(0); //刷新界面，重新展示数据
          } else {
            ElMessage.error(res.data.msg);
          }
        });
        dialogFormVisible.value = false;
      }
    };

    return {
      src,
      formLabelWidth,
      dialogFormVisible,
      helpForm,

      select, //标签的属性
      options,

      dialogImageUrl, //以下是添加图片的返回内容
      dialogVisible,
      disabled,
      handleRemove,
      handleChange,
      onUploadSuccess,
      handlePictureCardPreview,
      pictureUpload,

      commitHelp,
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