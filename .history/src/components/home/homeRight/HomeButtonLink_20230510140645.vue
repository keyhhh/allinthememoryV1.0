<template>
  <div  class="button-link-div">
    
    <el-badge  style="width: 80%; text-align: center" class="item">
      <router-link to="/home" style="text-decoration: none" >
        <el-button id="button-link" type="primary" >
          我的记录
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <el-badge  style="width: 80%; text-align: center" class="item">
      <router-link to="/public" style="text-decoration: none" >
        <el-button id="button-link" type="primary" >
          记录广场
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <!--  -->
    <el-badge  style="width: 80%; text-align: center" :value="12" class="item" >
      <router-link to="/help" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          求助信息
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <el-badge  style="width: 80%; text-align: center" class="item">
      <router-link to="/capsule" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          记忆胶囊
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>


    <!-- 这个集体记忆我不打算写了，干脆不展示这个按钮，但是和他相关的数据和其他组件都还在 -->
    <!-- <el-badge style="width: 80%;  text-align: center" class="item">
      <router-link to="/collectivity" style="text-decoration: none">
        <el-button  id="button-link" type="primary">
          集体记忆
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge> -->


  </div>
  <!-- 链接按钮组 -->
  <div class="button-link-div">
    <a href="https://gitee.com/dashboard/projects"><img src="@/assets/icon/gitee.png" /></a>
    <a href="https://github.com/keyhhh?tab=repositories"><img src="@/assets/icon/github.png" /></a>
    <a href="https://github.com/keyhhh?tab=repositories"><img src="@/assets/icon/weixin.png" /></a>
  </div>
</template>
<!-- element-plus/icons-vue, -->
<script>
import { useStore } from 'vuex'

import { ArrowRight } from "@element-plus/icons-vue";

// import {ref} from 'vue'
export default {
  components: {
    ArrowRight,
  },
  setup(){
    const store = useStore()


    return{store}
  }
};
</script>

<style scoped>
/* badge徽章的class */
.item {
  margin-top: 15px;
  margin-bottom: 15px;
}

#button-link {
  width: 100%;
  height: 50px;
  background-color: skyblue;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 1px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  letter-spacing:5px 
}

.button-link-div div :hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
/* 这里式点击按钮式变色，跳转后没发生改变 */
#button-link:active{
  background-color: black;
}

/* 链接按钮组的div */
.button-link-div {
  display: block;
  align-items: center;
  margin-top: 20px;
}

.button-link-div img {
  width: 30px;
  height: 30px;
  margin: 30px 15px;
}
</style>




<!-- <div class="button-link">
    class="button-help"
    <button>求助信息</button>
    class="button-capsule"
    <button>记忆胶囊</button>
    class="button-collective"
    <button>集体记忆</button>
  </div> -->