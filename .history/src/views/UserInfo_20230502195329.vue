<template>
  <el-row :gutter="20">
    <el-col :span="19" id="userinfo-center">
      <el-card class="box-card">
        <el-descriptions
          class="margin-top"
          title="With border"
          :column="3"
          :size="size"
          border
        >
          <template #extra>
            <el-button type="primary">Operation</el-button>
          </template>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">Username</div>
            </template>
            kooriookami
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">Telephone</div>
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">Place</div>
            </template>
            Suzhou
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">Remarks</div>
            </template>
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">Address</div>
            </template>
            No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>

    <el-col :span="5" id="userinfo-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

import HomeRight from "../components/home/homeRight/HomeRight.vue";

export default {
  name: "UserInfo",
  components: { HomeRight },
  setup(){
    const store = useStore()
    let userInfo = reactive([])   
    userInfo.pu
    return{userInfo}
  }
};
</script>

<style>
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
  background-color: darkgreen;
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
  width: 480px;
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
</style>