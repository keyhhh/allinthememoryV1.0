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
              <div class="cell-item">紧急联系人</div>
            </template>
            {{ userInfo[0].urgentContact }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template #label>
              <div class="cell-item">头像</div>
            </template>
            <el-avatar
              :size="50"
              :src="require('../assets/ALMIMG/' + userInfo[0].avatar)"
              @click="toMyInfo"
            />
          </el-descriptions-item>
          <el-descriptions-item> 
            <el-button type="danger" @click="loginOut">退出登录</el-button>
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>

    <el-col :span="5" id="userinfo-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>

  <!-- 跳出的修改界面 -->
  <el-dialog class="el-dialog" v-model="dialogFormVisible" title="个人 信息">
    <el-form :model="record">
      <!-- 添加一个用户名 -->
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input
          v-model="user[0].userName"
          autocomplete="off"
          oninput="if(value.length>11)value=value.slice(0,11)"
          placeholder="用户名"
        />
      </el-form-item>

      <!-- 性别 -->
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio-group v-model="user[0].gender" class="ml-4">
          <el-radio label="男" size="large">男</el-radio>
          <el-radio label="女" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 我的账号 -->
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input
          disabled
          v-model="user[0].account"
          autocomplete="off"
          placeholder="账号"
        />
      </el-form-item>

      <!-- 生日信息 -->
      <el-form-item label="生日" :label-width="formLabelWidth">
        <el-date-picker
          :label-width="formLabelWidth"
          id="el-date-picker"
          v-model="user[0].birthday"
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
          v-model="user[0].phone"
          type="number"
          autocomplete="off"
          oninput="if(value.length>11)value=value.slice(0,11)"
          placeholder="电话"
        />
      </el-form-item>

      <!-- 紧急联系人电话 -->
      <el-form-item label="紧急联系人电话" :label-width="formLabelWidth">
        <el-input
          v-model="user[0].urgentContact"
          type="number"
          autocomplete="off"
          oninput="if(value.length>11)value=value.slice(0,11)"
          placeholder="紧急联系人电话"
        />
      </el-form-item>

      <!-- 邮箱 -->
      <el-form-item label="邮箱" :label-width="formLabelWidth">
        <el-input
          v-model="user[0].email"
          type="email"
          autocomplete="off"
          placeholder="邮箱"
        />
      </el-form-item>

      <!-- 头像信息 <el-avatar :size="size" :src="circleUrl" /> -->
      <el-form-item label="头像" :label-width="formLabelWidth">
        <!-- 上传 -->
        <el-upload
          action="http://localhost:8081/AIM/common/upload"
          :show-file-list="false"
          :on-success="onUploadSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else style="width: 100%">
            <el-avatar
              :size="size"
              :src="require('../assets/ALMIMG/' + user[0].avatar)"
            />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>

    <!-- 弹出框底下的按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <!-- 保存添加记录 -->
        <el-button type="primary" @click="commit"> 保存 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { ElMessage } from "element-plus"; //elementui

import HomeRight from "../components/home/homeRight/HomeRight.vue";

import { updateUser } from "@/axios/home";

export default {
  name: "UserInfo",
  components: { HomeRight },
  setup() {
    const store = useStore();
    const router = useRouter(); //路由

    const dateTimeDefault = ref(new Date());
    const dialogFormVisible = ref(false); //显示修改对话框的 boolean属性
    const formLabelWidth = "140px";

    let userInfo = reactive([]); //存储登录用户在vuex中的信息
    userInfo.push(store.state.loginUser);
    let user = reactive([]); //用来修改哦的
    user.push({
      userName: userInfo[0].userName,
      account: userInfo[0].account,
      phone: userInfo[0].phone,
      urgentContact: userInfo[0].urgentContact,
      gender: userInfo[0].gender,
      birthday: userInfo[0].birthday,
      avatar: userInfo[0].avatar,
      email: userInfo[0].email,
      userId: userInfo[0].userId,
    });

    const regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/; //手机号的正则表达式
    // const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //邮箱的正则表达式

    const onUploadSuccess = (response) => {
      //上传文件成功是的回调
      console.log("wq#$%^&", response.data);
      user[0].avatar = response.data; //上传成功后返回的存储在本地的图片名，push到data中去
    };

    /**
     * 提交的方法
     */
    const commit = () => {
      if (
        !regPhone.test(user[0].phone) ||
        // !regEmail.test(user[0].email) ||
        user[0].userName === " "
      ) {
        //不满足规范的情况
        ElMessage.error("注意输入规范");
      } else {
        //满足规范的情况
        //，上传数据修改
        updateUser(user[0]).then((res) => {
          if (res.data.code) {
            //修改成功后，刷新vuex的数据
            console.log("返回代码1", res);
          } else {
            console.log("返回代码0", res);
          }
        });
        //，清空展示数据
        user.splice(0, user.length); //清空数组的方法
        user.push({
          userName: userInfo[0].userName,
          account: userInfo[0].account,
          phone: userInfo[0].phone,
          urgentContact: userInfo[0].urgentContact,
          gender: userInfo[0].gender,
          birthday: userInfo[0].birthday,
          avatar: userInfo[0].avatar,
          email: userInfo[0].email,
          userId: userInfo[0].userId,
        });
        dialogFormVisible.value = false;
        router.go(0); //刷新界面，重新展示数据
      }
    };

    /**
     * 退出登陆的方法
     */
     const loginOut = () => {
      //删除localStorage
      localStorage.removeItem("userInfo");
      //跳转到登陆界面
      router.push({
        path: "/"
      })
      loginout
    };


    return {
      dateTimeDefault,
      dialogFormVisible,
      formLabelWidth,
      userInfo,
      user,
      onUploadSuccess,

      commit, //提交

      loginOut, //退出登录
    };
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