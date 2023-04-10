<template>
  <!-- 0，我的记录×   求助信息√   记忆胶囊√
       1，我的记录√   求助信息×   记忆胶囊√
       2，我的记录√   求助信息√   记忆胶囊×
         -->
  <div  class="button-link-div">

    <el-badge v-if="whichPage == 0 || whichPage == 2 " style="width: 80%; text-align: center" :value="12" class="item">
      <router-link to="/help" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          求助信息
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <el-badge v-if="whichPage == 1 || whichPage == 2 " style="width: 80%; text-align: center" :value="12" class="item">
      <router-link to="/help" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          我的记录
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>

    <el-badge v-if="whichPage == 0 || whichPage == 1 " style="width: 80%; text-align: center" class="item">
      <router-link to="/capsule" style="text-decoration: none">
        <el-button id="button-link" type="primary">
          记忆胶囊
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </router-link>
    </el-badge>


    <el-badge style="width: 80%; text-align: center" class="item">
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
    <img src="./gitee.jpg" />
    <img src="./gitee.jpg" />
    <img src="./gitee.jpg" @click.stop="test"/>
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
    const whichPage = store.state.whichPage
    console.log(whichPage,whichPage == 0)
    return{store,whichPage}
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