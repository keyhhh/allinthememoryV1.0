<template>
  <!-- 0，我的记录×   求助信息√   记忆胶囊√    ==>HomeView 0
       1，我的记录√   求助信息×   记忆胶囊√    ==>HelpView 1
       2，我的记录√   求助信息√   记忆胶囊×    ==>CapsuleView 2
         -->
  <div  class="button-link-div">
    
    <!-- v-if="whichPage == 1 || whichPage == 2 " -->
    <el-badge  style="width: 80%; text-align: center" class="item">
      <router-link to="/" style="text-decoration: none" >
        <el-button id="button-link" type="primary" >
          我的记录
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <!-- v-if="whichPage == 0 || whichPage == 2 " -->
    <el-badge  style="width: 80%; text-align: center" :value="12" class="item" >
      <router-link to="/help" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          求助信息
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <!-- v-if="whichPage == 0 || whichPage == 1 " -->
    <el-badge  style="width: 80%; text-align: center" class="item">
      <router-link to="/capsule" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          记忆胶囊
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>


    <el-badge style="width: 80%;  text-align: center" class="item">
      <router-link to="/collectivity" style="text-decoration: none">
        <el-button  id="button-link" type="primary">
          集体记忆
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <!-- <el-button id="button-link-other" type="primary">
      记忆胶囊<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
    <el-button id="button-link-other" type="primary">
      集体记忆<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button> -->
  </div>
  <!-- 链接按钮组 -->
  <div class="button-link-div">
    <img src="@/assets/icon/gitee.png" />
    <img src="@/assets/icon/github.png" />
    <img src="@/assets/icon/weixin.png" />
  </div>
</template>
<!-- element-plus/icons-vue, -->
<script>
import { ArrowRight } from "@element-plus/icons-vue";
import { useStore } from 'vuex'
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

<style>
/* badge徽章的class */
.item {
  margin-top: 31px;

  margin-bottom: 31px;
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
}

.button-link-div div :hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.el-button:active{
  back
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