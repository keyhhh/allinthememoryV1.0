<template>
  <div class="collectivity-search">
    <!-- 
      添加记录按钮内容
     -->
    <h4 style="text-align: center">创建亲属记录</h4>
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
      <el-form :model="record">
        <!-- 添加一个称呼 -->
        <el-form-item label="call" :label-width="formLabelWidth">
          <el-cascader
            :options="calls"
            clearable
            :show-all-levels="false"
            v-model="reRecordShow.called"
          />
        </el-form-item>

        <!-- 记忆内容输入框 -->
        <el-form-item label="Msg" :label-width="formLabelWidth">
          <el-input
            v-model="reRecordShow.message"
            :autosize="{ minRows: 2 }"
            type="textarea"
            placeholder="内容......"
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
                  v-if="disabled"
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
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
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";

import { Delete, Plus, ZoomIn } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus"; //elementui

import { upReRecord, getRe } from "@/axios/collectivity";

import beforeClickImg from "@/assets/添加按钮深蓝色.png";

export default defineComponent({
  components: {
    Delete,
    Plus,
    ZoomIn, //vue上传功能所需的标签
  },
  setup() {
    const store = useStore();
    /**
     * 添加记录按钮的相关内容
     */
    let src = ref(beforeClickImg); //添加记录图片
    //对话框相关
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";
    const reRecordShow = reactive({
      //手动记录数据
      relativesId: "",
      userId: "",
      message: "", //记录内容
      called: "", //标签内容
      image: [], //文件
    });

    //记录提交存储的方法
    const pictureUpload = ref(null); //上传图片到组建的ref
    const commitRecord = () => {
      console.log("进入方法");
      //判断数据是否存在空，
      if (reRecordShow.message == "" || reRecordShow.tag == "") {
        //回去接着写
        console.log("提交失败");
        ElMessage.error("请输入call/message");
        dialogFormVisible.value = true;
      } else {
        //提交
        console.log("提交成功");
        reRecordShow.userId = localStorage.getItem("userInfo"); //把上传记录的用户id传过去
        let recordRelatives = {
          userId: reRecordShow.userId,
          message: reRecordShow.message,
          called: reRecordShow.called.join(","),
          image: reRecordShow.image.join(","),
        };
        console.log("recordRelativesrecordRelativesrecordRelatives",recordRelatives);
        //上传记录的API
        upReRecord(recordRelatives).then((res) => {
          if (res.data.code) {
            console.log();
          } else {
            console.log();
          }
        });
        reRecordShow.image = []; //提交成功后清空文件名
        dialogFormVisible.value = false;
      }
    };

    /**
     * 添加功能中上传文件的属性
     */
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const disabled = ref(true);

    // const formFileList = ref([]);// 显示的上传文件
    function handleRemove(file) {
      pictureUpload.value.handleRemove(file); //删除缩略图的方法
      // console.log(file.response.data); //这是获取到了存储的文件名，当点击删除时，通过匹配数组中的文件名删除数组
      reRecordShow.image.splice(
        reRecordShow.image.indexOf(file.response.data),
        1
      );
    }
    const handleChange = () => {};

    const onUploadSuccess = (response) => {
      //上传文件成功是的回调
      console.log("wq#$%^&", response.data);
      reRecordShow.image.push(response.data); //上传成功后返回的存储在本地的图片名，push到data中去
    };

    const handlePictureCardPreview = (UploadFile) => {
      dialogImageUrl.value = UploadFile.url;
      dialogVisible.value = true;
    };

    /**
     * 级联选择框的数据，通过获取用户的亲属的called属性
     */
    const userRe = reactive([]);
    const calls = [
    ];
    getRe(store.state.user).then((res) => {
      if (res.data.code) {
        // console.log("resresresres", res);
        for (let index = 0; index < res.data.data.length; index++) {
          userRe.push({
            relatives_id: res.data.data[index].relativesId,
            birthday: res.data.data[index].birthday,
            name: res.data.data[index].name,
            gender: res.data.data[index].gender,
            called: res.data.data[index].called,
            userId: res.data.data[index].userId,
          });
          calls.push({
            value: userRe[index].called,
            label: userRe[index].called,
          });
        }
      } else {
        console.log();
      }
    });

    return {
      src, //添加按钮图片
      formLabelWidth, //对话框的标签宽度
      dialogFormVisible, //判断出现对话框的boolean
      reRecordShow, //记录数据
      commitRecord, //提交方法
      handleChange,
      onUploadSuccess,
      pictureUpload,
      // formFileList,// 显示的上传文件

      userRe,
      calls, //标签的级联选择框数据

      dialogImageUrl,
      dialogVisible,
      disabled,
      handleRemove,
      handlePictureCardPreview,
    };
  },
});
</script>

<style scoped>
.collectivity-search {
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