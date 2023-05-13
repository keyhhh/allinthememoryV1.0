<template>
  <el-row :gutter="20">
    <el-col :span="19" id="userinfo-center">
      <el-card class="box-card">
        <el-descriptions
          class="margin-top"
          title="我 的 信 息"
          :column="3"
          :size="size"
          border
        >
          <template #extra>
            <el-button type="primary" @click="dialogFormVisible = true"
              >编辑</el-button
            >
          </template>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">用户名</div>
            </template>
            {{ userInfo[0].userName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">电话</div>
            </template>
            {{ userInfo[0].phone }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">邮箱</div>
            </template>
            {{ userInfo[0].email }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">性别</div>
            </template>
            <el-tag size="small">{{ userInfo[0].gender }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">生日</div>
            </template>
            {{
              userInfo[0].birthday === null
                ? ""
                : userInfo[0].birthday.substring(0, 4)
            }}
            年
            {{
              userInfo[0].birthday === null
                ? ""
                : userInfo[0].birthday.substring(5, 7)
            }}
            月
            {{
              userInfo[0].birthday === null
                ? ""
                : userInfo[0].birthday.substring(8, 10)
            }}
            日
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">紧急联系</div>
            </template>
            {{ userInfo[0].urgentContact }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">头像</div>
            </template>
            <el-avatar
              :size="50"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              @click="toMyInfo"
            />
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>

    <el-col :span="5" id="userinfo-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>

  <el-dialog class="el-dialog" v-model="dialogFormVisible" title="个人 信息">
    <el-form :model="record">
      <!-- 添加一个用户名 -->
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input
          v-model="userInfo[0].userName"
          autocomplete="off"
          placeholder="用户名"
        />
      </el-form-item>

      <!-- 性别 -->
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio-group v-model="userInfo[0].gender" class="ml-4">
          <el-radio label="男" size="large">男</el-radio>
          <el-radio label="女" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 我的账号 -->
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input
          disabled
          v-model="userInfo[0].account"
          autocomplete="off"
          placeholder="账号"
        />
      </el-form-item>

      <!-- 生日信息 -->
      <el-form-item label="生日" :label-width="formLabelWidth">
        <el-date-picker
          :label-width="formLabelWidth"
          id="el-date-picker"
          v-model="userInfo[0].birthday"
          type="date"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        >
        </el-date-picker>
      </el-form-item>

      <!-- 电话 -->
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input
          v-model="userInfo[0].phone"
          autocomplete="off"
          placeholder="电话"
        />
      </el-form-item>

      <!-- 紧急联系人电话 -->
      <el-form-item label="紧急联系人电话" :label-width="formLabelWidth">
        <el-input
          v-model="userInfo[0].urgentContact"
          autocomplete="off"
          placeholder="紧急联系人电话"
        />
      </el-form-item>

      <!-- 头像信息 <el-avatar :size="size" :src="circleUrl" /> -->
      <el-form-item label="头像" :label-width="formLabelWidth">
        <img style="width: 100px; height: 100px" :src="require('../../../assets/ALMIMG/' + userInfo[0].avatar)" :fit="fit" />
      </el-form-item>

      <!-- 记忆还是记录蕾单选框 -->
      <!-- <el-form-item label="IsMemory" :label-width="formLabelWidth">
          <el-radio-group v-model.number="recordShow.isMemory" class="ml-4">
            <el-radio :label="1" size="large">集体记忆</el-radio>
            <el-radio :label="0" size="large">我的记录</el-radio>
          </el-radio-group>
        </el-form-item> -->

      <!-- <el-form-item label="IsOpen" :label-width="formLabelWidth">
          <el-radio-group v-model.number="recordShow.isPublic" size="small">
            <el-radio :label="1" border>公开</el-radio>
            <el-radio :label="0" border>私密</el-radio>
          </el-radio-group>
        </el-form-item> -->

      <!-- 添加图片 -->
      <!-- <el-form-item label="Picture" :label-width="formLabelWidth">
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
        </el-form-item> -->
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
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";

import HomeRight from "../components/home/homeRight/HomeRight.vue";

export default {
  name: "UserInfo",
  components: { HomeRight },
  setup() {
    const store = useStore();

    const dialogFormVisible = ref(false); //显示修改对话框的 boolean属性
    const formLabelWidth = "140px";

    let userInfo = reactive([]); //存储登录用户在vuex中的信息
    userInfo.push(store.state.loginUser);

    return { dialogFormVisible, formLabelWidth, userInfo };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.el-row:last-child {
  margin-bottom: -10px;
  /* background-color: blue; */
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/**userinfo-left */
#userinfo-left {
  background-color: #f5f7fa;
}

/**userinfo-center */
#userinfo-center {
  /* background-color: darkgreen; */
  margin-bottom: 60px;
}

/**userinfo-right */
#userinfo-right {
  border-left: 1px solid #000;
  background-color: #dedfe0;
}

/**卡片 */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 80%;
  margin-top: 20%;
}

/**详细列表 */
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
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