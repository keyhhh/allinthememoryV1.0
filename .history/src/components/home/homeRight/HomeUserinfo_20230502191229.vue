<template>
  <!-- 头像
    import { UserFilled } from '@element-plus/icons-vue' -->
  <div>
    <el-avatar
      :size="100"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      @click=""
    />
    <!-- 个人信息 -->
    <div class="user-info">
      <h5>keyh</h5>
      <h5 v-show="hasPhone">1663486xxxx</h5>
      <el-link type="primary" v-show="!hasPhone">绑定电话</el-link><br v-show="!hasPhone"/>
      <h5 v-show="hasEmail">keyh2333@168.com</h5>
      <el-link type="success" v-show="!hasEmail">绑定邮箱</el-link>
    </div>
  </div>

  <!-- 个人信息 -->
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const hasPhone = ref(false);
    const hasEmail = ref(false);

    return { hasPhone, hasEmail };
  },
};
</script>

<style >
/* 头像的样式 */
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

/* 个人信息去绑定链接的样式- */
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}

.user-info{
    text-align:center;
}
.user-info h5 {
  margin-bottom: 0px;
  font-size: 16px;
}
</style>