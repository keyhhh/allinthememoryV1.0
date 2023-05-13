<template>
  <div class="home-search">
    <!-- 输入搜索框 
          import { Search } from '@element-plus/icons-vue'
          style="width: 80%"设置长度
        -->
    <!-- <div class="demo-input-size">
      <el-input
        style="width: 200px"
        v-model="searchInput"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
    </div> -->

    <el-divider style="width: 80%" content-position="left">
      <span style="font-size: 10px">全部记录</span>
    </el-divider>

    <p style="text-align: center; margin-right: 20%">
      <el-button type="success" round @click="showAll">全部记录</el-button>
    </p>

    <el-divider style="width: 80%" content-position="right">
      <span style="font-size: 10px">搜索记录</span>
    </el-divider>

    <!-- 日期选择框 
          style="width: 80%"设置长度
        -->

    <div class="demo-date-picker">
      <el-date-picker
        style="width: 200px"
        id="el-date-picker"
        v-model="searchDateValue"
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
      <el-button
        style="margin-left: 1%"
        type="info"
        :icon="Check"
        circle
        @click="showSomeByDate"
      />
    </div>

    <!-- 标签选择框,点击事件后期传参数 
          @click.prevent="showSomeByTag($event,tag)"  设置标签的点击事件
          style="margin-right:10px;margin-top:10px" 设置每个tag的间距
       -->

    <div>
      <el-tag
        @click.prevent="showSomeByTag($event, tag)"
        v-for="tag in dynamicTags"
        :key="tag"
        class="mx-1"
        v-model="searchTagValue"
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
      title="创建一条记录"
    >
      <el-form :model="record">
        <!-- 添加一个标签 -->
        <el-form-item label="标签:" :label-width="formLabelWidth">
          <el-select
            clearable
            :show-all-levels="false"
            v-model="recordShow.tag"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!-- 记忆还是记录蕾单选框 -->
        <el-form-item label="我的记录:" :label-width="formLabelWidth">
          <el-radio-group v-model.number="recordShow.isMemory" class="ml-4">
            <!-- <el-radio :label="1" size="large">集体记忆</el-radio> -->
            <el-radio :label="0" size="large">我的记录</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 是否公开switch 
            class="ml-4"
            label="RecordOpen"
            v-model="record.isOpen"-->
        <el-form-item label="状态:" :label-width="formLabelWidth">
          <el-radio-group v-model.number="recordShow.isPublic" size="small">
            <el-radio :label="1" border>公开</el-radio>
            <el-radio :label="0" border>私密</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 记忆内容输入框 -->
        <el-form-item label="内容:" :label-width="formLabelWidth">
          <el-input
            v-model="recordShow.message"
            :autosize="{ minRows: 2 }"
            type="textarea"
            placeholder="内容......"
          />
        </el-form-item>
        <!-- 添加图片 -->
        <el-form-item label="图片:" :label-width="formLabelWidth">
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
import { defineComponent, ref, nextTick, reactive } from "vue";
import { useRouter } from "vue-router";

// import { Search } from "@element-plus/icons-vue";
import { Delete, Plus, ZoomIn, Check } from "@element-plus/icons-vue";

import { ElMessage } from "element-plus"; //elementui

import beforeClickImg from "@/assets/添加按钮深蓝色.png";
import { upRecord } from "@/axios/home";

export default defineComponent({
  components: {
    Delete,
    Plus,
    ZoomIn, //vue上传功能所需的标签
  },
  setup() {
    const router = useRouter(); //路由

    /**
     * 搜索框属性,代码中暂时注释掉
     **/
    const searchInput = ref("");

    /**
     * 日期选择框属性
     **/
    const searchDateValue = ref(); //这是要进行搜索的日期
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
    const searchTagValue = ref(); //这是要进行搜索的标签
    const dynamicTags = ref([
      "开心",
      "伤心",
      "震怒",
      "胆寒",
      "狂喜",
      "得意",
      "畅快",
      "爽朗",
    ]);
    const inputVisible = ref(false);
    const InputRef = ref("");
    const handleClose = (tag) => {
      //删除tag
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };

    const showInput = () => {
      //让点击添加标签后，焦点锁定在输入框
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

    function showAll() {
      //展示全部记录的方法
      console.log("展示全部记录");
      router.push({
        path: "/home",
      });
    }

    function showSomeByDate() {
      //根据日期搜索记录的方法
      console.log("展示日期搜搜", searchDateValue.value);
      router.push({
        path: "/home/date",
        query: {
          searchDateValue: searchDateValue.value,
        },
      });
    }

    function showSomeByTag(event, tag) {
      //根据标签搜索记录的方法
      searchTagValue.value = tag;
      console.log("展示标签搜索", event, tag);
      router.push({
        path: "/home/tag",
        query: {
          searchTagValue: searchTagValue.value,
        },
      });
    }

    /**
     * 添加记录按钮的相关内容
     */
    let src = ref(beforeClickImg); //添加记录图片
    //对话框相关
    const dialogFormVisible = ref(false);
    const formLabelWidth = "140px";
    const recordShow = reactive({
      //手动记录数据
      userId: null,
      message: "", //记录内容
      tag: "", //标签内容
      image: [], //文件
      isPublic: 0, //是否公开
      isMemory: 0, //是否为集体记忆内容
    });

    //记录提交存储的方法
    const pictureUpload = ref(null); //上传图片到组建的ref
    const commitRecord = () => {
      console.log("进入方法");
      //判断数据是否存在空，
      if (recordShow.message == "" || recordShow.tag == "") {
        //回去接着写
        console.log("提交失败");
        ElMessage.error("请输入tag/message");
        dialogFormVisible.value = true;
      } else {
        //提交
        // pictureUpload.value.submit(); //手动上串图片
        recordShow.userId = localStorage.getItem("userInfo"); //把上传记录的用户id传过去
        let record = {
          datePublish: new Date(),
          userId: recordShow.userId,
          message: recordShow.message,
          tag: recordShow.tag.join(","),
          image: recordShow.image.join(","),
          isPublic: recordShow.isPublic,
          isMemory: recordShow.isMemory,
        };
        console.log("recordrecordrecordrecord",record);
        upRecord(record).then((res) => {
          
          if (res.data.code) {
            console.log("返回代码1", res);
            router.go(0); //刷新界面，重新展示数据
          } else {
            console.log("返回代码0", res);
          }
        });
        recordShow.image = []; //提交成功后清空文件名
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
      recordShow.image.splice(recordShow.image.indexOf(file.response.data), 1);
    }
    const handleChange = () => {};

    const onUploadSuccess = (response) => {
      //上传文件成功是的回调
      console.log("wq#$%^&", response.data);
      recordShow.image.push(response.data); //上传成功后返回的存储在本地的图片名，push到data中去
    };

    const handlePictureCardPreview = (UploadFile) => {
      dialogImageUrl.value = UploadFile.url;
      dialogVisible.value = true;
    };

    /**
     * 级联选择框的数据
     * 开心
     * 伤心
     * 震怒
     * 胆寒
     * 狂喜
     * 得意
     * 畅快
     * 爽朗
     */
    const options = [
      {
        value: "开心",
        label: "开心",
      },
      {
        value: "伤心",
        label: "伤心",
      },
      {
        value: "震怒",
        label: "震怒",
      },
      {
        value: "狂喜",
        label: "狂喜",
      },
      {
        value: "胆寒",
        label: "胆寒",
      },
      {
        value: "得意",
        label: "得意",
      },
      {
        value: "畅快",
        label: "畅快",
      },
      {
        value: "爽朗",
        label: "爽朗",
      },
    ];

    return {
      showAll, //点击搜索全部记录
      showSomeByDate, //根据日期搜索
      showSomeByTag, //根据标签搜索
      searchDateValue, //搜索输入的时间日期
      searchTagValue, //搜索点击的标签
      Check,
      isHoliday,
      searchInput, //搜索框内容
      // Search, //element ui的标签
      dynamicTags, //标签数组
      inputValue, //新增输入标签的数值
      inputVisible, //是否显示标签
      InputRef, //新增输入标签的数值的ref参数
      handleClose,
      showInput,
      handleInputConfirm,

      src, //添加按钮图片
      formLabelWidth, //对话框的标签宽度
      dialogFormVisible, //判断出现对话框的boolean
      recordShow, //记录数据
      commitRecord, //提交方法
      handleChange,
      onUploadSuccess,
      pictureUpload,

      options, //标签的级联选择框数据

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

/* 分割线上文字的背景色 */
::v-deep .el-divider__text.is-right {
  left: 60px;
  background-color: #f5f7fa;
}
::v-deep .el-divider__text.is-left {
  left: 60px;
  background-color: #f5f7fa;
}

/* 日期选择框旁边的按钮 */
::v-deep .el-button.is-circle {
}
</style>